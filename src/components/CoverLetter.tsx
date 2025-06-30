import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import Bubble from './Bubble';
import FormSection from './FormSection';
import FactsAnimation from './FactsAnimation';
import { generateLocalLetter, generateWithAI } from '../utils/letterGenerator';
import { copyToClipboard, exportToPDF } from '../utils/exportUtils';
import './CoverLetter.css';


const CoverLetter = () => {
    const [formData, setFormData] = useState({
        name: '',
        purpose: '',
        target: '',
        qualifications: '',
        motivation: '',
        goals: '',
        age: '',
        university: '',
        fieldOfStudy: '',
        experience: '',
        achievements: '',
        languages: '',
        interests: '',
    });
    const [errors, setErrors] = useState({
    name: '',
    target: '',
    purpose: '',
    qualifications: '',
    motivation: '',
    goals: '',
    age: '',
    university: '',
    fieldOfStudy: '',
    experience: '',
    achievements: '',
    languages: '',
    interests: '',
});
    const [isLoading, setIsLoading] = useState(false);
    const [showFacts, setShowFacts] = useState(false);
    const [letter, setLetter] = useState('');
    const [currentLetterData, setCurrentLetterData] = useState(null);
    const [savedLetters, setSavedLetters] = useState([]);
    const [useAI, setUseAI] = useState(true);
    const [apiKey, setApiKey] = useState('');
    const [step, setStep] = useState(1);
    const [language, setLanguage] = useState('fr'); // 'fr' or 'en'
    const [gender, setGender] = useState(''); // 'male', 'female', or ''
    const [universitySearch, setUniversitySearch] = useState('');
    const [showUniversityDropdown, setShowUniversityDropdown] = useState(false);
    const [filteredUniversities, setFilteredUniversities] = useState([]);
    const [customTexts, setCustomTexts] = useState({
        purpose: '',
        qualifications: '',
        motivation: '',
        goals: '',
        experience: '',
        achievements: '',
        languages: '',
        interests: ''
    });

    const resultRef = useRef(null);
    const formRef = useRef(null);
    const navigate = useNavigate();
    
    // French options - Normalized keys for consistent mapping
    const purposeOptions = [
        { value: 'candidature-emploi', text: 'Candidature à un emploi' },
        { value: 'admission-universite', text: 'Admission à l\'université' },
        { value: 'demande-bourse', text: 'Demande de bourse' },
        { value: 'stage', text: 'Candidature à un stage' },
        { value: 'benevolat', text: 'Poste de bénévole' },
        { value: 'objectif-personnel', text: 'Objectif personnel' },
        { value: 'formation', text: 'Demande de formation' },
        { value: 'promotion', text: 'Demande de promotion' },
        { value: 'changement-carriere', text: 'Changement de carrière' },
        { value: 'projet-specifique', text: 'Projet spécifique' },
        { value: 'autre', text: 'Autre' },
    ];

    const qualificationsOptions = [
        { value: 'diplome', text: 'Diplôme universitaire' },
        { value: 'experience_professionnelle', text: 'Expérience professionnelle' },
        { value: 'competences_techniques', text: 'Compétences techniques' },
        { value: 'competences_communication', text: 'Compétences en communication' },
        { value: 'leadership', text: 'Leadership' },
        { value: 'projets_reussis', text: 'Projets réussis' },
        { value: 'certification', text: 'Certifications' },
        { value: 'competences_linguistiques', text: 'Compétences linguistiques' },
        { value: 'gestion_equipe', text: 'Gestion d\'équipe' },
        { value: 'resolution_problemes', text: 'Résolution de problèmes' },
        { value: 'adaptabilite', text: 'Adaptabilité' },
        { value: 'creativite', text: 'Créativité' },
        { value: 'travail_equipe', text: 'Travail en équipe' },
        { value: 'autonomie', text: 'Autonomie' },
        { value: 'organisation', text: 'Organisation' },
    ];

    const motivationOptions = [
        { value: 'croissance_professionnelle', text: 'Croissance professionnelle' },
        { value: 'impact_positif', text: 'Impact positif' },
        { value: 'passion_domaine', text: 'Passion pour le domaine' },
        { value: 'valeurs_alignees', text: 'Valeurs alignées' },
        { value: 'defis_stimulants', text: 'Défis stimulants' },
        { value: 'apprentissage_continu', text: 'Apprentissage continu' },
        { value: 'innovation', text: 'Innovation' },
        { value: 'service_autres', text: 'Service aux autres' },
        { value: 'reconnaissance', text: 'Reconnaissance' },
        { value: 'equilibre_vie_travail', text: 'Équilibre vie-travail' },
        { value: 'developpement_personnel', text: 'Développement personnel' },
        { value: 'contribution_sociale', text: 'Contribution sociale' },
        { value: 'excellence', text: 'Excellence' },
        { value: 'collaboration', text: 'Collaboration' },
        { value: 'impact_environnemental', text: 'Impact environnemental' },
    ];

    const goalsOptions = [
        { value: 'developpement_carriere', text: 'Développement de carrière' },
        { value: 'expertise_domaine', text: 'Expertise dans le domaine' },
        { value: 'innovation', text: 'Innovation' },
        { value: 'leadership', text: 'Leadership' },
        { value: 'impact_social', text: 'Impact social' },
        { value: 'formation_equipe', text: 'Formation d\'équipe' },
        { value: 'gestion_projet', text: 'Gestion de projet' },
        { value: 'recherche_developpement', text: 'R&D' },
        { value: 'consultation', text: 'Consultation' },
        { value: 'enseignement', text: 'Enseignement' },
        { value: 'mentorat', text: 'Mentorat' },
        { value: 'creation_entreprise', text: 'Création d\'entreprise' },
        { value: 'specialisation_technique', text: 'Spécialisation technique' },
        { value: 'management', text: 'Management' },
        { value: 'international', text: 'International' },
        { value: 'durabilite', text: 'Durabilité' },
    ];

    // English options - Normalized keys
    const purposeOptionsEn = [
        { value: 'job-application', text: 'Job Application' },
        { value: 'university-admission', text: 'University Admission' },
        { value: 'scholarship-request', text: 'Scholarship Request' },
        { value: 'internship', text: 'Internship Application' },
        { value: 'volunteer', text: 'Volunteer Position' },
        { value: 'personal-goal', text: 'Personal Goal' },
        { value: 'training-request', text: 'Training Request' },
        { value: 'promotion-request', text: 'Promotion Request' },
        { value: 'career-change', text: 'Career Change' },
        { value: 'specific-project', text: 'Specific Project' },
        { value: 'other', text: 'Other' },
    ];

    const qualificationsOptionsEn = [
        { value: 'diplome', text: 'University Degree' },
        { value: 'experience_professionnelle', text: 'Professional Experience' },
        { value: 'competences_techniques', text: 'Technical Skills' },
        { value: 'competences_communication', text: 'Communication Skills' },
        { value: 'leadership', text: 'Leadership' },
        { value: 'projets_reussis', text: 'Successful Projects' },
        { value: 'certification', text: 'Certifications' },
        { value: 'competences_linguistiques', text: 'Language Skills' },
        { value: 'gestion_equipe', text: 'Team Management' },
        { value: 'resolution_problemes', text: 'Problem Solving' },
        { value: 'adaptabilite', text: 'Adaptability' },
        { value: 'creativite', text: 'Creativity' },
        { value: 'travail_equipe', text: 'Teamwork' },
        { value: 'autonomie', text: 'Autonomy' },
        { value: 'organisation', text: 'Organization' },
    ];

    const motivationOptionsEn = [
        { value: 'croissance_professionnelle', text: 'Professional Growth' },
        { value: 'impact_positif', text: 'Positive Impact' },
        { value: 'passion_domaine', text: 'Passion for the Field' },
        { value: 'valeurs_alignees', text: 'Aligned Values' },
        { value: 'defis_stimulants', text: 'Stimulating Challenges' },
        { value: 'apprentissage_continu', text: 'Continuous Learning' },
        { value: 'innovation', text: 'Innovation' },
        { value: 'service_autres', text: 'Service to Others' },
        { value: 'reconnaissance', text: 'Recognition' },
        { value: 'equilibre_vie_travail', text: 'Work-Life Balance' },
        { value: 'developpement_personnel', text: 'Personal Development' },
        { value: 'contribution_sociale', text: 'Social Contribution' },
        { value: 'excellence', text: 'Excellence' },
        { value: 'collaboration', text: 'Collaboration' },
        { value: 'impact_environnemental', text: 'Environmental Impact' },
    ];

    const goalsOptionsEn = [
        { value: 'developpement_carriere', text: 'Career Development' },
        { value: 'expertise_domaine', text: 'Domain Expertise' },
        { value: 'innovation', text: 'Innovation' },
        { value: 'leadership', text: 'Leadership' },
        { value: 'impact_social', text: 'Social Impact' },
        { value: 'formation_equipe', text: 'Team Building' },
        { value: 'gestion_projet', text: 'Project Management' },
        { value: 'recherche_developpement', text: 'R&D' },
        { value: 'consultation', text: 'Consulting' },
        { value: 'enseignement', text: 'Teaching' },
        { value: 'mentorat', text: 'Mentoring' },
        { value: 'creation_entreprise', text: 'Entrepreneurship' },
        { value: 'specialisation_technique', text: 'Technical Specialization' },
        { value: 'management', text: 'Management' },
        { value: 'international', text: 'International' },
        { value: 'durabilite', text: 'Sustainability' },
    ];

    // Language options - Normalized keys
    const languageOptions = [
        { value: 'francais', text: 'Français / French' },
        { value: 'anglais', text: 'Anglais / English' },
        { value: 'espagnol', text: 'Espagnol / Spanish' },
        { value: 'allemand', text: 'Allemand / German' },
        { value: 'italien', text: 'Italien / Italian' },
        { value: 'portugais', text: 'Portugais / Portuguese' },
        { value: 'arabe', text: 'Arabe / Arabic' },
        { value: 'turc', text: 'Turc / Turkish' },
        { value: 'chinois', text: 'Chinois / Chinese' },
        { value: 'japonais', text: 'Japonais / Japanese' },
        { value: 'russe', text: 'Russe / Russian' },
    ];

    // Interest options - Normalized keys
    const interestOptions = [
        { value: 'lecture', text: 'Lecture / Reading' },
        { value: 'voyage', text: 'Voyage / Traveling' },
        { value: 'sport', text: 'Sport / Sports' },
        { value: 'musique', text: 'Musique / Music' },
        { value: 'cinema', text: 'Cinéma / Cinema' },
        { value: 'cuisine', text: 'Cuisine / Cooking' },
        { value: 'photographie', text: 'Photographie / Photography' },
        { value: 'art', text: 'Art / Art' },
        { value: 'technologie', text: 'Technologie / Technology' },
        { value: 'nature', text: 'Nature / Nature' },
        { value: 'benevolat', text: 'Bénévolat / Volunteering' },
        { value: 'ecriture', text: 'Écriture / Writing' },
    ];

    // Experience options - Normalized keys
    const experienceOptions = [
        { value: 'stage', text: 'Stage / Internship' },
        { value: 'projet_personnel', text: 'Projet personnel / Personal project' },
        { value: 'travail_etudiant', text: 'Travail étudiant / Student work' },
        { value: 'benevolat', text: 'Bénévolat / Volunteer work' },
        { value: 'projet_academique', text: 'Projet académique / Academic project' },
        { value: 'competition', text: 'Compétition / Competition' },
        { value: 'formation', text: 'Formation / Training' },
        { value: 'aucune_experience', text: 'Aucune expérience / No experience' },
    ];

    // Achievement options - Normalized keys
    const achievementOptions = [
        { value: 'projet_reussi', text: 'Projet réussi / Successful project' },
        { value: 'prix_academique', text: 'Prix académique / Academic award' },
        { value: 'leadership', text: 'Leadership / Leadership' },
        { value: 'innovation', text: 'Innovation / Innovation' },
        { value: 'collaboration', text: 'Collaboration / Collaboration' },
        { value: 'resolution_problemes', text: 'Résolution de problèmes / Problem solving' },
        { value: 'communication', text: 'Communication / Communication' },
        { value: 'adaptabilite', text: 'Adaptabilité / Adaptability' },
        { value: 'projet_innovant', text: 'Projet innovant / Innovative project' },
        { value: 'certification_professionnelle', text: 'Certification professionnelle / Professional certification' },
    ];

    // Get current language options
    const getCurrentOptions = () => {
        if (language === 'en') {
            return {
                purpose: purposeOptionsEn,
                qualifications: qualificationsOptionsEn,
                motivation: motivationOptionsEn,
                goals: goalsOptionsEn,
                languages: languageOptions,
                interests: interestOptions,
                experience: experienceOptions,
                achievements: achievementOptions,
            };
        }
        return {
            purpose: purposeOptions,
            qualifications: qualificationsOptions,
            motivation: motivationOptions,
            goals: goalsOptions,
            languages: languageOptions,
            interests: interestOptions,
            experience: experienceOptions,
            achievements: achievementOptions,
        };
    };

    const currentOptions = getCurrentOptions();

    useEffect(() => {
        const storedLetters = JSON.parse(localStorage.getItem('savedLetters') || '[]');
        setSavedLetters(storedLetters);
    }, []);

    const toggleBubble = (field, value) => {
        setFormData(prev => {
            const currentValues = prev[field] ? prev[field].split(', ').filter(v => v) : [];
            const maxSelections = {
                purpose: 2,
                qualifications: 3,
                motivation: 3,
                goals: 3,
                experience: 3,
                achievements: 3,
                languages: 4,
                interests: 3
            };
            
            // Logique spéciale pour "Aucune expérience"
            if (field === 'experience') {
                const noExperienceValue = language === 'fr' ? 'Aucune expérience / No experience' : 'Aucune expérience / No experience';
                
                if (value === noExperienceValue) {
                    // Si on clique sur "Aucune expérience"
                    if (currentValues.includes(noExperienceValue)) {
                        // Désélectionner "Aucune expérience"
                        const newValues = currentValues.filter(v => v !== noExperienceValue);
                        return { ...prev, [field]: newValues.join(', ') };
                    } else {
                        // Sélectionner "Aucune expérience" et désélectionner tout le reste
                        setCustomTexts(prev => ({ ...prev, [field]: '' }));
                        return { ...prev, [field]: noExperienceValue };
                    }
                } else {
                    // Si on clique sur une autre expérience
                    if (currentValues.includes(noExperienceValue)) {
                        // Si "Aucune expérience" est sélectionnée, la désélectionner d'abord
                        const newValues = currentValues.filter(v => v !== noExperienceValue);
                        if (newValues.includes(value)) {
                            // Retirer si déjà sélectionnée
                            return { ...prev, [field]: newValues.filter(v => v !== value).join(', ') };
                        } else {
                            // Ajouter si pas à la limite
                            if (newValues.length < (maxSelections[field] || 5)) {
                                return { ...prev, [field]: [...newValues, value].join(', ') };
                            } else {
                                alert(language === 'fr' 
                                    ? `Maximum ${maxSelections[field]} sélections autorisées pour ce champ`
                                    : `Maximum ${maxSelections[field]} selections allowed for this field`
                                );
                                return prev;
                            }
                        }
                    } else {
                        // Logique normale si "Aucune expérience" n'est pas sélectionnée
                        if (currentValues.includes(value)) {
                            // Remove if already selected
                            const newValues = currentValues.filter(v => v !== value);
                            
                            // If removing "Autre", clear custom text
                            if (value.includes('Autre') || value.includes('Other')) {
                                setCustomTexts(prev => ({ ...prev, [field]: '' }));
                            }
                            
                            return { ...prev, [field]: newValues.join(', ') };
                        } else {
                            // Add if not at max limit
                            if (currentValues.length < (maxSelections[field] || 5)) {
                                const newValues = [...currentValues, value];
                                return { ...prev, [field]: newValues.join(', ') };
                            } else {
                                // Show alert for max limit
                                alert(language === 'fr' 
                                    ? `Maximum ${maxSelections[field]} sélections autorisées pour ce champ`
                                    : `Maximum ${maxSelections[field]} selections allowed for this field`
                                );
                                return prev;
                            }
                        }
                    }
                }
            } else {
                // Logique normale pour les autres champs
                if (currentValues.includes(value)) {
                    // Remove if already selected
                    const newValues = currentValues.filter(v => v !== value);
                    
                    // If removing "Autre", clear custom text
                    if (value.includes('Autre') || value.includes('Other')) {
                        setCustomTexts(prev => ({ ...prev, [field]: '' }));
                    }
                    
                    return { ...prev, [field]: newValues.join(', ') };
                } else {
                    // Add if not at max limit
                    if (currentValues.length < (maxSelections[field] || 5)) {
                        const newValues = [...currentValues, value];
                        return { ...prev, [field]: newValues.join(', ') };
                    } else {
                        // Show alert for max limit
                        alert(language === 'fr' 
                            ? `Maximum ${maxSelections[field]} sélections autorisées pour ce champ`
                            : `Maximum ${maxSelections[field]} selections allowed for this field`
                        );
                        return prev;
                    }
                }
            }
        });
        setErrors((prev) => ({ ...prev, [field]: '' }));
    };

    // Function to handle custom text input
    const handleCustomTextChange = (field, value) => {
        setCustomTexts(prev => ({ ...prev, [field]: value }));
    };

    // Function to check if "Autre" is selected
    const hasAutreSelection = (field) => {
        const values = formData[field] ? formData[field].split(', ').filter(v => v) : [];
        return values.some(v => v.includes('Autre') || v.includes('Other'));
    };

    // Function to check if "No experience" is selected
    const hasNoExperience = (field) => {
        const values = formData[field] ? formData[field].split(', ').filter(v => v) : [];
        return values.some(v => v.includes('Aucune expérience') || v.includes('No experience'));
    };

    // Fonction pour détecter les entrées absurdes ou spammy (moins stricte)
    function isSpammy(str) {
        const lower = str.trim().toLowerCase();
        if (
            lower === '' ||
            lower === 'non' ||
            lower === 'rien' ||
            lower === 'aucun' ||
            lower === 'no' ||
            lower === 'nothing' ||
            lower === 'none' ||
            lower.length < 3 ||
            /^([a-zA-Z])\1{2,}$/.test(lower) || // 3 lettres identiques ou plus
            /^[0-9]{3,}$/.test(lower)
        ) {
            return true;
        }
        return false;
    }

    // Fonction pour nettoyer et valider les entrées utilisateur
    const sanitizeInput = (input, field) => {
        if (!input || input.trim() === '') return '';
        let sanitized = input.trim()
            .replace(/[<>]/g, '')
            .replace(/javascript:/gi, '')
            .substring(0, 500);

        if (field === 'target' || field === 'additional') {
            if (isSpammy(sanitized)) return '';
        }
        return sanitized;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        // Permettre la saisie normale, ne pas nettoyer pendant la frappe
        setFormData((prev) => ({ ...prev, [name]: value }));
        setErrors((prev) => ({ ...prev, [name]: validateInput(name, value) }));
    };

    const validateInput = (name, value) => {
        if (name === 'age') {
            if (!value || value < 16 || value > 100) {
                return language === 'fr' 
                    ? 'Veuillez entrer un âge valide (16-100 ans)'
                    : 'Please enter a valid age (16-100 years)';
            }
            return '';
        }
        if (name === 'university') {
            if (!value || value.trim() === '') {
                return language === 'fr'
                    ? 'Veuillez sélectionner une université'
                    : 'Please select a university';
            }
            return '';
        }
        if (name === 'fieldOfStudy') {
            if (!value || value.trim() === '') {
                return language === 'fr'
                    ? 'Veuillez sélectionner un domaine d\'études'
                    : 'Please select a field of study';
            }
            return '';
        }
        if (name === 'experience') {
            if (!value || value.trim() === '') {
                return language === 'fr'
                    ? 'Veuillez sélectionner au moins une expérience'
                    : 'Please select at least one experience';
            }
            return '';
        }
        if (name === 'achievements') {
            if (!value || value.trim() === '') {
                return language === 'fr'
                    ? 'Veuillez sélectionner au moins une réalisation'
                    : 'Please select at least one achievement';
            }
            return '';
        }
        if (name === 'languages') {
            if (!value || value.trim() === '') {
                return language === 'fr'
                    ? 'Veuillez sélectionner au moins une langue'
                    : 'Please select at least one language';
            }
            return '';
        }
        if (name === 'interests') {
            if (!value || value.trim() === '') {
                return language === 'fr'
                    ? 'Veuillez sélectionner au moins un centre d\'intérêt'
                    : 'Please select at least one interest';
            }
            return '';
        }
        if (name === 'target') {
            if (!value || value.length < 3) {
                return language === 'fr'
                    ? 'Veuillez entrer un intitulé de poste ou programme valide (au moins 3 caractères)'
                    : 'Please enter a valid job title or program (at least 3 characters)';
            }
            if (isSpammy(value)) {
                return language === 'fr'
                    ? 'Veuillez entrer un intitulé de poste ou programme pertinent'
                    : 'Please enter a relevant job title or program';
            }
            return '';
        }
        const validations = {
            name: /^[a-zA-ZÀ-ÿ\s]{2,}$/,
            target: /^[a-zA-ZÀ-ÿ0-9\s\-.,!?()]{3,}$/,
        };
        if (validations[name] && !validations[name].test(value)) {
            return {
                name: language === 'fr' 
                    ? 'Veuillez entrer un nom valide (lettres et espaces uniquement)'
                    : 'Please enter a valid name (letters and spaces only)',
                target: language === 'fr'
                    ? 'Veuillez entrer un objectif valide (lettres, chiffres, espaces)'
                    : 'Please enter a valid objective (letters, numbers, spaces)',
            }[name];
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validation des champs requis
        const requiredFields = {
            name: language === 'fr' ? 'Le nom est requis' : 'Name is required',
            target: language === 'fr' ? 'L\'objectif est requis' : 'Objective is required',
            purpose: language === 'fr' ? 'Veuillez sélectionner un type de candidature' : 'Please select an application type',
            qualifications: language === 'fr' ? 'Veuillez sélectionner des qualifications' : 'Please select qualifications',
            motivation: language === 'fr' ? 'Veuillez sélectionner des motivations' : 'Please select motivations',
            goals: language === 'fr' ? 'Veuillez sélectionner des objectifs' : 'Please select goals',
            age: language === 'fr' ? 'L\'âge est requis' : 'Age is required',
            university: language === 'fr' ? 'L\'université est requise' : 'University is required',
            fieldOfStudy: language === 'fr' ? 'Le domaine d\'études est requis' : 'Field of study is required',
            experience: language === 'fr' ? 'L\'expérience est requise' : 'Experience is required',
            achievements: language === 'fr' ? 'Les réalisations sont requises' : 'Achievements are required',
            languages: language === 'fr' ? 'Les langues sont requises' : 'Languages are required',
            interests: language === 'fr' ? 'Les centres d\'intérêt sont requis' : 'Interests are required',
        };
        Object.keys(requiredFields).forEach(field => {
            const value = formData[field];
            if (!value || (Array.isArray(value) && value.length === 0) || (typeof value === 'string' && value.trim() === '')) {
                newErrors[field] = requiredFields[field];
            } else {
                const validationError = validateInput(field, value);
                if (validationError) {
                    newErrors[field] = validationError;
                }
            }
        });

const newErrors = {
        name: '',
        target: '',
        purpose: '',
        qualifications: '',
        motivation: '',
        goals: '',
        age: '',
        university: '',
        fieldOfStudy: '',
        experience: '',
        achievements: '',
        languages: '',
        interests: ''
    };

    // Validation des champs
    let hasErrors = false;
    
    Object.keys(requiredFields).forEach(field => {
        const value = formData[field];
        if (!value || (typeof value === 'string' && value.trim() === '')) {
            newErrors[field] = requiredFields[field];
            hasErrors = true;
        } else {
            const validationError = validateInput(field, value);
            if (validationError) {
                newErrors[field] = validationError;
                hasErrors = true;
            }
        }
    });

    if (hasErrors) {
        setErrors(newErrors);
        return;
    }


        setStep(2);
        setIsLoading(true);
        setShowFacts(true);
        setCurrentLetterData(formData);

        // Générer la lettre immédiatement mais attendre 20 secondes avant de l'afficher
        const generatedLetter = useAI 
            ? await generateWithAI(formData, apiKey, language, gender, customTexts) 
            : generateLocalLetter(formData, language, gender, customTexts);
        
        // Attendre 20 secondes avant d'afficher la lettre
        setTimeout(() => {
            setLetter(generatedLetter);
            setIsLoading(false);
            setShowFacts(false);
            setStep(3);
            if (resultRef.current) {
                resultRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }, 20000); // 20 secondes
    };

    const copyLetter = () => {
        copyToClipboard(letter);
    };

    const exportPDF = async () => {
        await exportToPDF(letter, formData.name);
    };

    const saveLetter = () => {
        const newLetter = {
            id: Date.now(),
            name: formData.name,
            target: formData.target,
            letter: letter,
            date: new Date().toLocaleDateString(),
            language: language,
            gender: gender,
        };
        const updatedLetters = [newLetter, ...savedLetters];
        setSavedLetters(updatedLetters);
        localStorage.setItem('savedLetters', JSON.stringify(updatedLetters));
    };

    const loadLetter = (id) => {
        const letterToLoad = savedLetters.find((l) => l.id === id);
        if (letterToLoad) {
            setFormData({
                name: letterToLoad.name,
                target: letterToLoad.target,
                purpose: '',
                qualifications: '',
                motivation: '',
                goals: '',
                age: '',
                university: '',
                fieldOfStudy: '',
                experience: '',
                achievements: '',
                languages: '',
                interests: '',
            });
            setLetter(letterToLoad.letter);
            setLanguage(letterToLoad.language || 'fr');
            setGender(letterToLoad.gender || '');
            setUniversitySearch('');
            setShowUniversityDropdown(false);
            setStep(3);
        }
    };

    const deleteLetter = (id) => {
        const updatedLetters = savedLetters.filter((l) => l.id !== id);
        setSavedLetters(updatedLetters);
        localStorage.setItem('savedLetters', JSON.stringify(updatedLetters));
    };

    const resetForm = () => {
        setFormData({
            name: '',
            purpose: '',
            target: '',
            qualifications: '',
            motivation: '',
            goals: '',
            age: '',
            university: '',
            fieldOfStudy: '',
            experience: '',
            achievements: '',
            languages: '',
            interests: '',
        });

    // Réinitialisez errors avec toutes les clés
    setErrors({
        name: '',
        target: '',
        purpose: '',
        qualifications: '',
        motivation: '',
        goals: '',
        age: '',
        university: '',
        fieldOfStudy: '',
        experience: '',
        achievements: '',
        languages: '',
        interests: ''
    });
    
 
        setLetter('');
        setStep(1);
        setGender('');
        setUniversitySearch('');
        setShowUniversityDropdown(false);
        setCustomTexts({
            purpose: '',
            qualifications: '',
            motivation: '',
            goals: '',
            experience: '',
            achievements: '',
            languages: '',
            interests: ''
        });
    };

    // University search functionality
    const handleUniversitySearch = (searchTerm) => {
        setUniversitySearch(searchTerm);
        if (searchTerm.length > 0) {
            const filtered = algerianUniversities.filter(uni =>
                uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                uni.city.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredUniversities(filtered.slice(0, 10)); // Limit to 10 results
            setShowUniversityDropdown(true);
        } else {
            setFilteredUniversities([]);
            setShowUniversityDropdown(false);
        }
    };

    const selectUniversity = (university) => {
        setFormData(prev => ({ ...prev, university: university.name }));
        setUniversitySearch(university.name);
        setShowUniversityDropdown(false);
    };

    // Algerian Universities Data
    const algerianUniversities = [
        { name: 'Université d\'Alger 1 - Benyoucef Benkhedda', city: 'Alger' },
        { name: 'Université d\'Alger 2 - Abou El Kacem Saâdallah', city: 'Alger' },
        { name: 'Université d\'Alger 3 - Brahim Soltane Chaibout', city: 'Alger' },
        { name: 'École Nationale Polytechnique d\'Alger', city: 'Alger' },
        { name: 'École Nationale Supérieure d\'Informatique', city: 'Alger' },
        { name: 'Université de Constantine 1 - Frères Mentouri', city: 'Constantine' },
        { name: 'Université de Constantine 2 - Abdelhamid Mehri', city: 'Constantine' },
        { name: 'Université de Constantine 3 - Salah Boubnider', city: 'Constantine' },
        { name: 'Université d\'Oran 1 - Ahmed Ben Bella', city: 'Oran' },
        { name: 'Université d\'Oran 2 - Mohamed Ben Ahmed', city: 'Oran' },
        { name: 'Université d\'Oran 3 - Senia', city: 'Oran' },
        { name: 'Université de Sétif 1 - Ferhat Abbas', city: 'Sétif' },
        { name: 'Université de Sétif 2 - Mohamed Lamine Debaghine', city: 'Sétif' },
        { name: 'Université de Batna 1 - Hadj Lakhdar', city: 'Batna' },
        { name: 'Université de Batna 2 - Mostefa Ben Boulaid', city: 'Batna' },
        { name: 'Université de Annaba - Badji Mokhtar', city: 'Annaba' },
        { name: 'Université de Blida 1 - Saad Dahlab', city: 'Blida' },
        { name: 'Université de Blida 2 - Lounici Ali', city: 'Blida' },
        { name: 'Université de Tlemcen - Abou Bekr Belkaid', city: 'Tlemcen' },
        { name: 'Université de Béjaïa - Abderrahmane Mira', city: 'Béjaïa' },
        { name: 'Université de Tizi Ouzou - Mouloud Mammeri', city: 'Tizi Ouzou' },
        { name: 'Université de Ghardaïa', city: 'Ghardaïa' },
        { name: 'Université de Ouargla - Kasdi Merbah', city: 'Ouargla' },
        { name: 'Université de Biskra - Mohamed Khider', city: 'Biskra' },
        { name: 'Université de Tiaret - Ibn Khaldoun', city: 'Tiaret' },
        { name: 'Université de Djelfa - Ziane Achour', city: 'Djelfa' },
        { name: 'Université de M\'Sila - Mohamed Boudiaf', city: 'M\'Sila' },
        { name: 'Université de Laghouat - Amar Telidji', city: 'Laghouat' },
        { name: 'Université de Khenchela - Abbas Laghrour', city: 'Khenchela' },
        { name: 'Université de Souk Ahras - Mohamed Cherif Messaadia', city: 'Souk Ahras' },
        { name: 'Université de Guelma - 8 Mai 1945', city: 'Guelma' },
        { name: 'Université de Skikda - 20 Août 1955', city: 'Skikda' },
        { name: 'Université de Jijel - Mohamed Seddik Ben Yahia', city: 'Jijel' },
        { name: 'Université de Mascara - Mustapha Stambouli', city: 'Mascara' },
        { name: 'Université de Relizane - Tahar Moulay', city: 'Relizane' },
        { name: 'Université de Saïda - Tahar Moulay', city: 'Saïda' },
        { name: 'Université de Mostaganem - Abdelhamid Ibn Badis', city: 'Mostaganem' },
        { name: 'Université de Chlef - Hassiba Ben Bouali', city: 'Chlef' },
        { name: 'Université de Médéa - Yahia Fares', city: 'Médéa' },
        { name: 'Université de Boumerdès - M\'Hamed Bougara', city: 'Boumerdès' },
        { name: 'Université de Tipaza', city: 'Tipaza' },
        { name: 'Université de Aïn Defla - Djilali Bounaama', city: 'Aïn Defla' },
        { name: 'Université de Tissemsilt', city: 'Tissemsilt' },
        { name: 'Université de El Oued - Hamma Lakhdar', city: 'El Oued' },
        { name: 'Université de El Tarf - Chadli Bendjedid', city: 'El Tarf' },
        { name: 'Université de Illizi', city: 'Illizi' },
        { name: 'Université de Tamanrasset', city: 'Tamanrasset' },
        { name: 'Université de Adrar - Ahmed Draia', city: 'Adrar' },
        { name: 'Université de Béchar - Tahar Moulay', city: 'Béchar' },
        { name: 'Université de Naâma', city: 'Naâma' },
        { name: 'Université de El Bayadh - 1er Novembre 1954', city: 'El Bayadh' },
        { name: 'Université de Tindouf', city: 'Tindouf' },
        { name: 'Université de Timimoun', city: 'Timimoun' },
        { name: 'Université de In Salah', city: 'In Salah' },
        { name: 'Université de In Guezzam', city: 'In Guezzam' },
        { name: 'Université de Bordj Badji Mokhtar', city: 'Bordj Badji Mokhtar' },
        { name: 'Université de Ouled Djellal', city: 'Ouled Djellal' },
        { name: 'Université de Béni Abbès', city: 'Béni Abbès' },
        { name: 'Université de Touggourt', city: 'Touggourt' },
        { name: 'Université de Djanet', city: 'Djanet' },
        { name: 'Université de In Amenas', city: 'In Amenas' },
        { name: 'Université de Aïn Salah', city: 'Aïn Salah' },
        { name: 'Université de Hassi Messaoud', city: 'Hassi Messaoud' },
        { name: 'Université de Hassi R\'Mel', city: 'Hassi R\'Mel' },
        { name: 'Université de Reggane', city: 'Reggane' },
        { name: 'Université de Timiaouine', city: 'Timiaouine' },
        { name: 'Université de Bordj Omar Driss', city: 'Bordj Omar Driss' },
        { name: 'Université de In Guezzam', city: 'In Guezzam' },
        { name: 'Université de Bordj Badji Mokhtar', city: 'Bordj Badji Mokhtar' },
        { name: 'Université de Ouled Djellal', city: 'Ouled Djellal' },
        { name: 'Université de Béni Abbès', city: 'Béni Abbès' },
        { name: 'Université de Touggourt', city: 'Touggourt' },
        { name: 'Université de Djanet', city: 'Djanet' },
        { name: 'Université de In Amenas', city: 'In Amenas' },
        { name: 'Université de Aïn Salah', city: 'Aïn Salah' },
        { name: 'Université de Hassi Messaoud', city: 'Hassi Messaoud' },
        { name: 'Université de Hassi R\'Mel', city: 'Hassi R\'Mel' },
        { name: 'Université de Reggane', city: 'Reggane' },
        { name: 'Université de Timiaouine', city: 'Timiaouine' },
        { name: 'Université de Bordj Omar Driss', city: 'Bordj Omar Driss' },
    ];

    // Fields of Study Options
    const fieldsOfStudy = [
        'Informatique / Computer Science',
        'Génie Civil / Civil Engineering',
        'Génie Électrique / Electrical Engineering',
        'Génie Mécanique / Mechanical Engineering',
        'Médecine / Medicine',
        'Pharmacie / Pharmacy',
        'Droit / Law',
        'Économie / Economics',
        'Gestion / Management',
        'Marketing',
        'Finance',
        'Comptabilité / Accounting',
        'Langues / Languages',
        'Littérature / Literature',
        'Histoire / History',
        'Géographie / Geography',
        'Mathématiques / Mathematics',
        'Physique / Physics',
        'Chimie / Chemistry',
        'Biologie / Biology',
        'Architecture',
        'Arts / Arts',
        'Journalisme / Journalism',
        'Psychologie / Psychology',
        'Sociologie / Sociology',
        'Sciences Politiques / Political Science',
        'Relations Internationales / International Relations',
        'Tourisme / Tourism',
        'Hôtellerie / Hospitality',
        'Agriculture / Agriculture',
        'Vétérinaire / Veterinary',
        'Dentisterie / Dentistry',
        'Sciences Infirmières / Nursing',
        'Kinésithérapie / Physiotherapy',
        'Autre / Other'
    ];


    return (
        <div className="min-h-screen bg-gray-200 cover-letter">
            {/* Header */}
            <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="text-2xl font-light tracking-tight text-black">
                            {language === 'fr' ? 'Générateur de Lettres de Motivation' : 'Motivation Letter Generator'}
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => navigate('/dashboard')}
                            className="neumorphic bg-black text-white hover:bg-black hover:text-white border border-black"
                        >
                            {language === 'fr' ? 'Retour au Tableau de Bord' : 'Back to Dashboard'}
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="section-padding">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-black mb-4 fade-in-up">
                            {language === 'fr' ? 'Générateur de Lettres de Motivation' : 'Motivation Letter Generator'}
                        </h1>
                        <p className="text-xl font-light text-gray-600 fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {language === 'fr'
                                ? 'Créez des lettres de motivation professionnelles et persuasives en quelques minutes'
                                : 'Create professional and persuasive motivation letters in minutes'}
                        </p>
                    </div>

                    {/* Language and Gender Controls */}
                    <Card className="p-6 glass bg-white/95 border border-gray-200 mb-6">
                        <div className="controls-section">
                            <div className="controls-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="control-group">
                                    <Label className="font-light text-black">{language === 'fr' ? 'Langue' : 'Language'}</Label>
                                    <div className="controls-buttons flex gap-2 mt-2">
                                        <Button
                                            type="button"
                                            onClick={() => setLanguage('fr')}
                                            className={`control-btn w-full font-light ${language === 'fr' ? 'active bg-black text-white' : 'bg-gray-200 text-black border border-black'}`}
                                        >
                                            🇫🇷 Français
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={() => setLanguage('en')}
                                            className={`control-btn w-full font-light ${language === 'en' ? 'active bg-black text-white' : 'bg-gray-200 text-black border border-black'}`}
                                        >
                                            🇬🇧 English
                                        </Button>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <Label className="font-light text-black">{language === 'fr' ? 'Genre' : 'Gender'}</Label>
                                    <div className="controls-buttons flex gap-2 mt-2">
                                        <Button
                                            type="button"
                                            onClick={() => setGender('male')}
                                            className={`control-btn w-full font-light ${gender === 'male' ? 'active bg-black text-white' : 'bg-gray-200 text-black border border-black'}`}
                                        >
                                            {language === 'fr' ? '👨 Masculin' : '👨 Male'}
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={() => setGender('female')}
                                            className={`control-btn w-full font-light ${gender === 'female' ? 'active bg-black text-white' : 'bg-gray-200 text-black border border-black'}`}
                                        >
                                            {language === 'fr' ? '👩 Féminin' : '👩 Female'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>

                    {/* Step 1: Form */}
                    {step === 1 && (
                        <Card className="p-6 glass bg-white/95 border border-gray-200 fade-in-up" ref={formRef}>
                            <h2 className="form-title text-2xl font-light text-black mb-6">
                                {language === 'fr' ? 'Informations Personnelles' : 'Personal Information'}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="form-group">
                                        <Label htmlFor="name" className="font-light text-black">
                                            {language === 'fr' ? 'Nom Complet' : 'Full Name'}
                                        </Label>
                                        <Input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`form-input bg-gray-200 border border-black mt-2 ${errors.name ? 'error border-red-500' : 'border-gray-200'}`}
                                            placeholder={language === 'fr' ? 'Votre nom complet' : 'Your full name'}
                                        />
                                        {errors.name && <div className="error-message text-red-500 text-sm mt-1">{errors.name}</div>}
                                    </div>

                                    <div className="form-group">
                                        <Label htmlFor="target" className="font-light text-black">
                                            {language === 'fr' ? 'Objectif' : 'Objective'}
                                        </Label>
                                        <Input
                                            type="text"
                                            id="target"
                                            name="target"
                                            value={formData.target}
                                            onChange={handleInputChange}
                                            className={`form-input bg-gray-200 border border-black mt-2 ${errors.target ? 'error border-red-500' : 'border-gray-200'}`}
                                            placeholder={language === 'fr' ? 'Poste ou programme visé' : 'Target position or program'}
                                        />
                                        {errors.target && <div className="error-message text-red-500 text-sm mt-1">{errors.target}</div>}
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Type de Candidature' : 'Application Type'}
                                            <span className="selection-counter">
                                                {formData.purpose ? formData.purpose.split(', ').filter(v => v).length : 0}/2
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {currentOptions.purpose.map((option) => (
                                                    <Bubble
                                                        key={option.value}
                                                        text={option.text}
                                                        selected={formData.purpose.includes(option.value)}
                                                        onClick={() => toggleBubble('purpose', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('purpose') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez votre type de candidature...' : 'Specify your application type...'}
                                                        value={customTexts.purpose}
                                                        onChange={(e) => handleCustomTextChange('purpose', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.purpose && <div className="error-message text-red-500 text-sm mt-1">{errors.purpose}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Qualifications' : 'Qualifications'}
                                            <span className="selection-counter">
                                                {formData.qualifications ? formData.qualifications.split(', ').filter(v => v).length : 0}/3
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {currentOptions.qualifications.map((option) => (
                                                    <Bubble
                                                        key={option.value}
                                                        text={option.text}
                                                        selected={formData.qualifications.includes(option.value)}
                                                        onClick={() => toggleBubble('qualifications', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('qualifications') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez vos qualifications...' : 'Specify your qualifications...'}
                                                        value={customTexts.qualifications}
                                                        onChange={(e) => handleCustomTextChange('qualifications', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.qualifications && <div className="error-message text-red-500 text-sm mt-1">{errors.qualifications}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Motivation' : 'Motivation'}
                                            <span className="selection-counter">
                                                {formData.motivation ? formData.motivation.split(', ').filter(v => v).length : 0}/3
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {currentOptions.motivation.map((option) => (
                                                    <Bubble
                                                        key={option.value}
                                                        text={option.text}
                                                        selected={formData.motivation.includes(option.value)}
                                                        onClick={() => toggleBubble('motivation', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('motivation') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez votre motivation...' : 'Specify your motivation...'}
                                                        value={customTexts.motivation}
                                                        onChange={(e) => handleCustomTextChange('motivation', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.motivation && <div className="error-message text-red-500 text-sm mt-1">{errors.motivation}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Objectifs' : 'Goals'}
                                            <span className="selection-counter">
                                                {formData.goals ? formData.goals.split(', ').filter(v => v).length : 0}/3
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {currentOptions.goals.map((option) => (
                                                    <Bubble
                                                        key={option.value}
                                                        text={option.text}
                                                        selected={formData.goals.includes(option.value)}
                                                        onClick={() => toggleBubble('goals', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('goals') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez vos objectifs...' : 'Specify your goals...'}
                                                        value={customTexts.goals}
                                                        onChange={(e) => handleCustomTextChange('goals', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.goals && <div className="error-message text-red-500 text-sm mt-1">{errors.goals}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group full-width col-span-1 md:col-span-2">
                                      <Label htmlFor="age" className="font-light text-black">
                                        {language === 'fr' ? 'Âge' : 'Age'}
                                      </Label>
                                      <Input
                                        type="number"
                                        id="age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        className={`form-input bg-gray-200 text-black border mt-2 ${
                                          errors.age ? 'border-red-500' : 'border-gray-200'
                                        }`}
                                        placeholder={language === 'fr' ? 'Votre âge' : 'Your age'}
                                        min="16"
                                        max="100"
                                      />
                                      {errors.age && (
                                        <div className="error-message text-red-500 text-sm mt-1">
                                          {errors.age}
                                        </div>
                                      )}
                                    </div>


                                    <div className="form-group full-width col-span-1 md:col-span-2">
                                      <Label htmlFor="university" className="font-light text-black">
                                        {language === 'fr' ? "Établissement d'études" : 'Educational Institution'}
                                      </Label>
                                      <div className="university-search-container relative">
                                        <Input
                                          type="text"
                                          id="university"
                                          name="university"
                                          value={universitySearch}
                                          onChange={(e) => handleUniversitySearch(e.target.value)}
                                          className={`form-input bg-gray-200 text-black border mt-2 ${
                                            errors.university ? 'border-red-500' : 'border-gray-200'
                                          }`}
                                          placeholder={
                                            language === 'fr'
                                              ? 'Tapez pour rechercher une université...'
                                              : 'Type to search for a university...'
                                          }
                                          autoComplete="off"
                                        />
                                        
                                        {showUniversityDropdown && filteredUniversities.length > 0 && (
                                          <div className="university-dropdown absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
                                            {filteredUniversities.map((university, index) => (
                                              <div
                                                key={index}
                                                className="university-option px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                                onClick={() => selectUniversity(university)}
                                              >
                                                <div className="university-name font-medium text-black">
                                                  {university.name}
                                                </div>
                                                <div className="university-city text-sm text-gray-600">
                                                  {university.city}
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </div>

                                      {errors.university && (
                                        <div className="error-message text-red-500 text-sm mt-1">
                                          {errors.university}
                                        </div>
                                      )}
                                    </div>


                                    <div className="form-group">
                                      <Label htmlFor="fieldOfStudy" className="font-light text-gray-800">
                                        {language === 'fr' ? "Domaine d'études" : 'Field of Study'}
                                      </Label>
                                      <Select
                                        value={formData.fieldOfStudy}
                                        onValueChange={(value) =>
                                          handleInputChange({ target: { name: 'fieldOfStudy', value } })
                                        }
                                      >
                                        <SelectTrigger
                                          className={`form-input bg-gray-100 text-gray-800 placeholder-gray-600 border mt-2 ${
                                            errors.fieldOfStudy ? 'border-red-500' : 'border-gray-300'
                                          }`}
                                        >
                                          <SelectValue
                                            placeholder={
                                              language === 'fr' ? 'Sélectionnez un domaine' : 'Select a field'
                                            }
                                          />
                                        </SelectTrigger >
                                        <SelectContent className="border border-gray-300 rounded-md shadow-md bg-white">
                                          {fieldsOfStudy.map((field, index) => (
                                            <SelectItem
                                              key={index}
                                              value={field}
                                              className="text-gray-800 bg-white hover:bg-gray-200 focus:bg-gray-200 aria-selected:bg-gray-200"
                                            >
                                              {language === 'fr'
                                                ? field.split(' / ')[0]
                                                : field.split(' / ')[1]}
                                            </SelectItem>
                                          ))}
                                        </SelectContent>
                                      </Select>
                                      {errors.fieldOfStudy && (
                                        <div className="text-red-500 bg-gray-100 text-sm mt-1">
                                          {errors.fieldOfStudy}
                                        </div>
                                      )}
                                    </div>




                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Expérience' : 'Experience'}
                                            <span className="selection-counter">
                                                {formData.experience ? formData.experience.split(', ').filter(v => v).length : 0}/3
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {experienceOptions.map((option, index) => {
                                                    const isNoExperience = option.value.includes('Aucune expérience') || option.value.includes('No experience');
                                                    const noExperienceSelected = hasNoExperience('experience');
                                                    const isDisabled = noExperienceSelected && !isNoExperience;

                                                    return (
                                                        <Bubble
                                                            key={index}
                                                            text={language === 'fr' ? option.text.split(' / ')[0] : option.text.split(' / ')[1]}
                                                            selected={formData.experience.includes(option.value)}
                                                            onClick={() => !isDisabled && toggleBubble('experience', option.value)}
                                                            className={isDisabled ? 'disabled' : ''}
                                                        />
                                                    );
                                                })}
                                            </div>
                                            {hasAutreSelection('experience') && !hasNoExperience('experience') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez votre expérience...' : 'Specify your experience...'}
                                                        value={customTexts.experience}
                                                        onChange={(e) => handleCustomTextChange('experience', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.experience && <div className="error-message text-red-500 text-sm mt-1">{errors.experience}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Réalisations' : 'Achievements'}
                                            <span className="selection-counter">
                                                {formData.achievements ? formData.achievements.split(', ').filter(v => v).length : 0}/3
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {achievementOptions.map((option, index) => (
                                                    <Bubble
                                                        key={index}
                                                        text={language === 'fr' ? option.text.split(' / ')[0] : option.text.split(' / ')[1]}
                                                        selected={formData.achievements.includes(option.value)}
                                                        onClick={() => toggleBubble('achievements', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('achievements') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez vos réalisations...' : 'Specify your achievements...'}
                                                        value={customTexts.achievements}
                                                        onChange={(e) => handleCustomTextChange('achievements', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.achievements && <div className="error-message text-red-500 text-sm mt-1">{errors.achievements}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Langues' : 'Languages'}
                                            <span className="selection-counter">
                                                {formData.languages ? formData.languages.split(', ').filter(v => v).length : 0}/4
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {languageOptions.map((option, index) => (
                                                    <Bubble
                                                        key={index}
                                                        text={language === 'fr' ? option.text.split(' / ')[0] : option.text.split(' / ')[1]}
                                                        selected={formData.languages.includes(option.value)}
                                                        onClick={() => toggleBubble('languages', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('languages') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez vos langues...' : 'Specify your languages...'}
                                                        value={customTexts.languages}
                                                        onChange={(e) => handleCustomTextChange('languages', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.languages && <div className="error-message text-red-500 text-sm mt-1">{errors.languages}</div>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <Label className="font-light text-black flex items-center justify-between">
                                            {language === 'fr' ? 'Centres d\'intérêt' : 'Interests'}
                                            <span className="selection-counter">
                                                {formData.interests ? formData.interests.split(', ').filter(v => v).length : 0}/3
                                            </span>
                                        </Label>
                                        <div className="bubble-section mt-2">
                                            <div className="bubble-container text-black">
                                                {interestOptions.map((option, index) => (
                                                    <Bubble
                                                        key={index}
                                                        text={language === 'fr' ? option.text.split(' / ')[0] : option.text.split(' / ')[1]}
                                                        selected={formData.interests.includes(option.value)}
                                                        onClick={() => toggleBubble('interests', option.value)}
                                                    />
                                                ))}
                                            </div>
                                            {hasAutreSelection('interests') && (
                                                <div className="custom-text-container">
                                                    <Input
                                                        type="text"
                                                        placeholder={language === 'fr' ? 'Précisez vos centres d\'intérêt...' : 'Specify your interests...'}
                                                        value={customTexts.interests}
                                                        onChange={(e) => handleCustomTextChange('interests', e.target.value)}
                                                        className="custom-text-input mt-2"
                                                    />
                                                </div>
                                            )}
                                            {errors.interests && <div className="error-message text-red-500 text-sm mt-1">{errors.interests}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="submit-section mt-8 pt-8 border-t border-gray-200">
                                    <Button type="submit" className="submit-btn w-full font-light">
                                        {language === 'fr' ? 'Générer ma Lettre' : 'Generate my Letter'}
                                    </Button>
                                </div>
                            </form>
                        </Card>
                    )}

                    {/* Step 2: Loading */}
                    {step === 2 && showFacts && (
                        <Card className="p-6 glass bg-white/95 border border-gray-200 fade-in-up">
                            <h2 className="loading-title text-2xl font-light text-black mb-4">
                                {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
                            </h2>
                            <p className="loading-subtitle text-gray-600 font-light mb-6">
                                {language === 'fr'
                                    ? 'Notre IA analyse vos informations et crée une lettre personnalisée'
                                    : 'Our AI is analyzing your information and creating a personalized letter'}
                            </p>
                            <FactsAnimation language={language} />
                        </Card>
                    )}

                    {/* Step 3: Result */}
                    {step === 3 && letter && (
                        <Card className="p-6 glass bg-white/95 border border-gray-200 fade-in-up" ref={resultRef}>
                            <div className="result-header flex flex-col md:flex-row justify-between items-center mb-6">
                                <h2 className="result-title text-2xl font-light text-black">
                                    {language === 'fr' ? 'Votre Lettre de Motivation' : 'Your Motivation Letter'}
                                </h2>
                                <div className="result-actions flex flex-wrap gap-2 mt-4 md:mt-0">
                                    <Button onClick={copyLetter} className="action-btn text-black font-light">
                                        📋 {language === 'fr' ? 'Copier' : 'Copy'}
                                    </Button>
                                    <Button onClick={exportPDF} className="action-btn text-black font-light">
                                        📄 {language === 'fr' ? 'Exporter PDF' : 'Export PDF'}
                                    </Button>
                                    <Button onClick={saveLetter} className="action-btn text-black primary font-light">
                                        💾 {language === 'fr' ? 'Sauvegarder' : 'Save'}
                                    </Button>
                                    <Button onClick={resetForm} className="action-btn text-black font-light">
                                        🔄 {language === 'fr' ? 'Nouvelle Lettre' : 'New Letter'}
                                    </Button>
                                </div>
                            </div>
                            <div className="letter-content">
                                {letter}
                            </div>
                        </Card>
                    )}

                    {/* Saved Letters */}
                    {savedLetters.length > 0 && (
                        <Card className="p-6 glass bg-white/95 border border-gray-200 fade-in-up">
                            <h3 className="saved-title text-xl font-light text-black mb-4 text-center">
                                {language === 'fr' ? 'Lettres Sauvegardées' : 'Saved Letters'}
                            </h3>
                            <div className="saved-list grid gap-4">
                                {savedLetters.map((savedLetter) => (
                                    <div key={savedLetter.id} className="saved-item">
                                        <div className="saved-item-header flex justify-between items-center mb-2">
                                            <div>
                                                <div className="saved-item-title font-light text-black">{savedLetter.name}</div>
                                                <div className="saved-item-date text-gray-600 text-sm">{savedLetter.date}</div>
                                            </div>
                                        </div>
                                        <div className="saved-item-target text-gray-600 text-sm">{savedLetter.target}</div>
                                        <div className="saved-item-actions flex gap-2 mt-2">
                                            <Button
                                                onClick={() => loadLetter(savedLetter.id)}
                                                className="saved-action-btn load font-light"
                                            >
                                                {language === 'fr' ? 'Charger' : 'Load'}
                                            </Button>
                                            <Button
                                                onClick={() => deleteLetter(savedLetter.id)}
                                                className="saved-action-btn text-black font-light"
                                            >
                                                {language === 'fr' ? 'Supprimer' : 'Delete'}
                                            </Button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}
                </div>
            </main>
        </div>
    );
};

export default CoverLetter;
