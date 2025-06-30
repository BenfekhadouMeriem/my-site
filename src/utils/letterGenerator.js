const formatList = (items, isLastOxford = false) => {
    const list = items.split(', ').filter((item) => item);
    if (list.length === 0) return '';
    if (list.length === 1) return list[0].toLowerCase();
    if (list.length === 2) return `${list[0].toLowerCase()} and ${list[1].toLowerCase()}`;
    if (isLastOxford) {
        return `${list.slice(0, -1).map((item) => item.toLowerCase()).join(', ')} and ${list[list.length - 1].toLowerCase()}`;
    }
    return list.map((item) => item.toLowerCase()).join(', ');
};

// Templates de lettres en français
const frenchTemplates = [
    `29 juin 2025

À l'attention du recruteur
Entreprise cible

Objet : Candidature pour le poste de {target}

Madame, Monsieur,

Je me permets de vous présenter ma candidature pour le poste de {target} au sein de votre entreprise. En tant que {name}, je suis convaincu(e) que mon profil correspond parfaitement à vos attentes.

{additional}

Mon parcours m'a permis de développer {qualifications}, des compétences qui s'alignent parfaitement avec les exigences de ce poste. Ma motivation principale réside dans {motivation}, et je suis particulièrement attiré(e) par l'opportunité de {goals}.

Je serais ravi(e) d'échanger avec vous pour vous présenter plus en détail ma candidature et discuter de la manière dont je pourrais contribuer à votre équipe.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{name}`,

    `29 juin 2025

Service des ressources humaines
Entreprise cible

Objet : Lettre de motivation - {target}

Madame, Monsieur,

Suite à votre annonce concernant le poste de {target}, je souhaite vous présenter ma candidature. {name} est mon nom, et je suis passionné(e) par l'opportunité de rejoindre votre équipe.

{additional}

Mes qualifications incluent {qualifications}, ce qui me positionne idéalement pour ce rôle. Ce qui me motive particulièrement, c'est {motivation}. Mon objectif est de {goals}, et je suis convaincu(e) que votre entreprise offre l'environnement idéal pour atteindre ces objectifs.

Je reste à votre disposition pour un entretien afin de vous exposer plus en détail mes motivations et compétences.

Veuillez agréer, Madame, Monsieur, l'expression de ma considération distinguée.

{name}`,

    `29 juin 2025

Direction des ressources humaines
Entreprise cible

Objet : Candidature spontanée - {target}

Madame, Monsieur,

Je me présente : {name}, et je souhaite vous faire part de mon intérêt pour le poste de {target} au sein de votre organisation.

{additional}

Mon expérience dans {qualifications} constitue un atout majeur pour ce poste. Ce qui m'anime particulièrement, c'est {motivation}. Je souhaite {goals}, et je suis persuadé(e) que votre entreprise peut m'offrir cette opportunité.

Je serais honoré(e) de pouvoir vous rencontrer pour discuter de ma candidature et de la valeur que je pourrais apporter à votre équipe.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations respectueuses.

{name}`,

    `29 juin 2025

À l'attention du responsable recrutement
Entreprise cible

Objet : Candidature pour {target}

Madame, Monsieur,

Permettez-moi de vous présenter ma candidature pour le poste de {target}. Je me nomme {name} et je suis enthousiaste à l'idée de rejoindre votre équipe.

{additional}

Mon profil se caractérise par {qualifications}, des compétences qui correspondent parfaitement aux exigences de ce poste. Ma motivation principale est {motivation}, et je souhaite {goals} dans le cadre de ce nouveau défi professionnel.

Je serais ravi(e) de vous rencontrer pour échanger sur ma candidature et vous démontrer ma motivation à contribuer au succès de votre entreprise.

Veuillez agréer, Madame, Monsieur, l'expression de ma considération distinguée.

{name}`,

    `29 juin 2025

Service recrutement
Entreprise cible

Objet : Lettre de motivation - {target}

Madame, Monsieur,

Je me permets de vous adresser ma candidature pour le poste de {target}. En tant que {name}, je suis convaincu(e) de pouvoir apporter une réelle valeur ajoutée à votre équipe.

{additional}

Mon parcours professionnel m'a permis d'acquérir {qualifications}, des compétences essentielles pour ce poste. Ce qui me motive particulièrement, c'est {motivation}. Mon ambition est de {goals}, et je suis persuadé(e) que votre entreprise peut m'accompagner dans cette démarche.

Je reste à votre entière disposition pour un entretien afin de vous présenter plus en détail ma candidature.

Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

{name}`
];

// Templates de lettres en anglais
const englishTemplates = [
    `June 29, 2025

To the Hiring Manager
Target Company

Subject: Application for {target} Position

Dear Hiring Manager,

I am writing to express my interest in the {target} position at your company. As {name}, I am confident that my profile aligns perfectly with your requirements.

{additional}

My background has enabled me to develop {qualifications}, skills that align perfectly with the requirements of this position. My primary motivation lies in {motivation}, and I am particularly attracted to the opportunity to {goals}.

I would be delighted to discuss my application with you in more detail and explore how I could contribute to your team.

Thank you for considering my application. I look forward to hearing from you.

Sincerely,
{name}`,

    `June 29, 2025

Human Resources Department
Target Company

Subject: Cover Letter - {target}

Dear Hiring Manager,

Following your announcement regarding the {target} position, I would like to submit my application. My name is {name}, and I am passionate about the opportunity to join your team.

{additional}

My qualifications include {qualifications}, which ideally positions me for this role. What particularly motivates me is {motivation}. My goal is to {goals}, and I am confident that your company offers the ideal environment to achieve these objectives.

I remain available for an interview to discuss my motivations and skills in more detail.

Thank you for your consideration.

Best regards,
{name}`,

    `June 29, 2025

Human Resources Director
Target Company

Subject: Spontaneous Application - {target}

Dear Hiring Manager,

Let me introduce myself: {name}, and I would like to express my interest in the {target} position within your organization.

{additional}

My experience in {qualifications} constitutes a major asset for this position. What particularly drives me is {motivation}. I wish to {goals}, and I am convinced that your company can offer me this opportunity.

I would be honored to meet with you to discuss my application and the value I could bring to your team.

Thank you for your consideration.

Sincerely,
{name}`,

    `June 29, 2025

To the Recruitment Manager
Target Company

Subject: Application for {target}

Dear Hiring Manager,

Allow me to submit my application for the {target} position. My name is {name} and I am enthusiastic about this opportunity.

{additional}

My skills include {qualifications}, which favorably positions me for this role. My primary motivation lies in {motivation}, and I wish to {goals} within the framework of this new professional challenge.

I would be honored to meet with you to discuss my application and demonstrate my motivation to contribute to your company's success.

Thank you for your consideration.

Best regards,
{name}`,

    `June 29, 2025

Human Resources Department
Target Company

Subject: Cover Letter - {target}

Dear Hiring Manager,

I am writing to submit my application for the {target} position. As {name}, I am confident that I can bring real added value to your team.

{additional}

My professional background has enabled me to acquire {qualifications}, essential skills for this position. What particularly motivates me is {motivation}. My ambition is to {goals}, and I am convinced that your company can support me in this approach.

I remain entirely at your disposal for an interview to present my application in more detail.

Thank you for your consideration.

Sincerely,
{name}`
];

// Fonction pour nettoyer et valider les entrées utilisateur
const sanitizeInput = (input) => {
    if (!input || input.trim() === '') return '';
    
    // Supprimer les caractères dangereux et limiter la longueur
    let sanitized = input.trim()
        .replace(/[<>]/g, '') // Supprimer les balises HTML
        .replace(/javascript:/gi, '') // Supprimer les scripts
        .substring(0, 500); // Limiter à 500 caractères
    
    return sanitized;
};

// Fonction pour adapter le genre dans les phrases françaises
const adaptGender = (text, gender) => {
    if (gender === 'male') {
        return text
            .replace(/\(e\)/g, '')
            .replace(/convaincu\(e\)/g, 'convaincu')
            .replace(/ravi\(e\)/g, 'ravi')
            .replace(/honoré\(e\)/g, 'honoré')
            .replace(/passionné\(e\)/g, 'passionné')
            .replace(/attiré\(e\)/g, 'attiré')
            .replace(/candidat\(e\)/g, 'candidat')
            .replace(/professionnel\(le\)/g, 'professionnel')
            .replace(/idéal\(e\)/g, 'idéal');
    } else if (gender === 'female') {
        return text
            .replace(/\(e\)/g, 'e')
            .replace(/convaincu\(e\)/g, 'convaincue')
            .replace(/ravi\(e\)/g, 'ravie')
            .replace(/honoré\(e\)/g, 'honorée')
            .replace(/passionné\(e\)/g, 'passionnée')
            .replace(/attiré\(e\)/g, 'attirée')
            .replace(/candidat\(e\)/g, 'candidate')
            .replace(/professionnel\(le\)/g, 'professionnelle')
            .replace(/idéal\(e\)/g, 'idéale');
    }
    // Si pas de genre spécifié, garder le format inclusif (e)
    return text;
};

// Fonction pour adapter le genre dans les phrases anglaises
const adaptGenderEn = (text, gender) => {
    // En anglais, pas de différence de genre grammaticale
    // Mais on peut adapter le ton selon le contexte
    return text;
};

// Utilitaires avancés pour la langue française
const frenchUtils = {
  // Gestion des apostrophes avec plus de cas
  withApostrophe: (article, word) => {
    if (!word) return article + ' ';
    const vowels = ['a', 'e', 'i', 'o', 'u', 'h'];
    const firstLetter = word.toLowerCase().charAt(0);
    
    if (vowels.includes(firstLetter)) {
      if (article === 'le' || article === 'la') return "l'";
      if (article === 'de' || article === 'du' || article === 'de la') return "de l'";
      if (article === 'à' || article === 'au' || article === 'à la') return "à l'";
      if (article === 'ce' || article === 'cette') return "cet" + (article === 'cette' ? 'te' : '') + ' ';
    }
    return article + ' ';
  },

  // Accord de genre amélioré
  genderAgreement: (adjective, gender, plural = false) => {
    const agreements = {
      'passionné': { m: 'passionné', f: 'passionnée', mp: 'passionnés', fp: 'passionnées' },
      'motivé': { m: 'motivé', f: 'motivée', mp: 'motivés', fp: 'motivées' },
      'expérimenté': { m: 'expérimenté', f: 'expérimentée', mp: 'expérimentés', fp: 'expérimentées' },
      'qualifié': { m: 'qualifié', f: 'qualifiée', mp: 'qualifiés', fp: 'qualifiées' },
      'diplômé': { m: 'diplômé', f: 'diplômée', mp: 'diplômés', fp: 'diplômées' },
      'spécialisé': { m: 'spécialisé', f: 'spécialisée', mp: 'spécialisés', fp: 'spécialisées' },
      'convaincu': { m: 'convaincu', f: 'convaincue', mp: 'convaincus', fp: 'convaincues' },
      'ravi': { m: 'ravi', f: 'ravie', mp: 'ravis', fp: 'ravies' },
      'prêt': { m: 'prêt', f: 'prête', mp: 'prêts', fp: 'prêtes' },
      'étudiant': { m: 'étudiant', f: 'étudiante', mp: 'étudiants', fp: 'étudiantes' },
      'candidat': { m: 'candidat', f: 'candidate', mp: 'candidats', fp: 'candidates' },
      'professionnel': { m: 'professionnel', f: 'professionnelle', mp: 'professionnels', fp: 'professionnelles' },
      'déterminé': { m: 'déterminé', f: 'déterminée', mp: 'déterminés', fp: 'déterminées' },
      'enthousiaste': { m: 'enthousiaste', f: 'enthousiaste', mp: 'enthousiastes', fp: 'enthousiastes' },
      'compétent': { m: 'compétent', f: 'compétente', mp: 'compétents', fp: 'compétentes' },
      'créatif': { m: 'créatif', f: 'créative', mp: 'créatifs', fp: 'créatives' },
      'innovant': { m: 'innovant', f: 'innovante', mp: 'innovants', fp: 'innovantes' },
      'dynamique': { m: 'dynamique', f: 'dynamique', mp: 'dynamiques', fp: 'dynamiques' },
      'ambitieux': { m: 'ambitieux', f: 'ambitieuse', mp: 'ambitieux', fp: 'ambitieuses' },
      'persévérant': { m: 'persévérant', f: 'persévérante', mp: 'persévérants', fp: 'persévérantes' },
      'organisé': { m: 'organisé', f: 'organisée', mp: 'organisés', fp: 'organisées' },
      'autonome': { m: 'autonome', f: 'autonome', mp: 'autonomes', fp: 'autonomes' },
      'adaptable': { m: 'adaptable', f: 'adaptable', mp: 'adaptables', fp: 'adaptables' },
      'responsable': { m: 'responsable', f: 'responsable', mp: 'responsables', fp: 'responsables' },
      'riche': { m: 'riche', f: 'riche', mp: 'riches', fp: 'riches' },
      'fier': { m: 'fier', f: 'fière', mp: 'fiers', fp: 'fières' }
    };
    
    const key = plural ? (gender === 'f' ? 'fp' : 'mp') : gender;
    return agreements[adjective] ? agreements[adjective][key] : adjective;
  },

  // Formatage naturel des listes avec connecteurs appropriés
  formatNaturalList: (items, connector = 'et') => {
    if (!items || items.length === 0) return '';
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} ${connector} ${items[1]}`;
    
    const lastItem = items[items.length - 1];
    const otherItems = items.slice(0, -1);
    return `${otherItems.join(', ')} ${connector} ${lastItem}`;
  },

  // Déterminant approprié selon le genre et le nombre
  getArticle: (word, gender, definite = true, plural = false) => {
    if (plural) {
      return definite ? 'les ' : 'des ';
    }
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'h'];
    const firstLetter = word.toLowerCase().charAt(0);
    
    if (vowels.includes(firstLetter)) {
      return definite ? "l'" : "d'";
    }
    
    if (definite) {
      return gender === 'f' ? 'la ' : 'le ';
    } else {
      return gender === 'f' ? 'une ' : 'un ';
    }
  },

  // Conjugaison de participes passés
  pastParticiple: (verb, gender) => {
    const participles = {
      'acquérir': { m: 'acquis', f: 'acquise' },
      'développer': { m: 'développé', f: 'développée' },
      'obtenir': { m: 'obtenu', f: 'obtenue' },
      'réaliser': { m: 'réalisé', f: 'réalisée' },
      'permettre': { m: 'permis', f: 'permise' },
      'préparer': { m: 'préparé', f: 'préparée' }
    };
    
    return participles[verb] ? participles[verb][gender] : verb;
  },

  // Conjugaison des verbes au présent
  conjugatePresent: (verb, person = 'je') => {
    const conjugations = {
      'avoir': { je: 'ai', vous: 'avez', nous: 'avons' },
      'être': { je: 'suis', vous: 'êtes', nous: 'sommes' },
      'pouvoir': { je: 'peux', vous: 'pouvez', nous: 'pouvons' },
      'vouloir': { je: 'veux', vous: 'voulez', nous: 'voulons' },
      'développer': { je: 'développe', vous: 'développez', nous: 'développons' },
      'préparer': { je: 'prépare', vous: 'préparez', nous: 'préparons' }
    };
    
    return conjugations[verb] ? conjugations[verb][person] : verb;
  },

  // Appliquer les apostrophes à un texte complet
  addApostrophes: (text) => {
    if (!text) return text;
    
    // Règles pour les apostrophes
    const apostropheRules = [
      { pattern: /\bla\s+([aeiouhAEIOUH])/g, replacement: "l'$1" },
      { pattern: /\ble\s+([aeiouhAEIOUH])/g, replacement: "l'$1" },
      { pattern: /\bde\s+([aeiouhAEIOUH])/g, replacement: "d'$1" },
      { pattern: /\bdu\s+([aeiouhAEIOUH])/g, replacement: "d'$1" },
      { pattern: /\bce\s+([aeiouhAEIOUH])/g, replacement: "c'$1" },
      { pattern: /\bne\s+([aeiouhAEIOUH])/g, replacement: "n'$1" },
      { pattern: /\bse\s+([aeiouhAEIOUH])/g, replacement: "s'$1" },
      { pattern: /\bque\s+([aeiouhAEIOUH])/g, replacement: "qu'$1" },
      { pattern: /\bjusqu'à\s+([aeiouhAEIOUH])/g, replacement: "jusqu'$1" },
      { pattern: /\bpuisqu'[aeiouhAEIOUH]/g, replacement: "puisqu'$1" },
    ];
    
    let result = text;
    apostropheRules.forEach(rule => {
      result = result.replace(rule.pattern, rule.replacement);
    });
    
    return result;
  },

  // Appliquer les accords de genre à un texte complet
  applyGenderAgreements: (text, gender) => {
    if (!text || gender === '') return text;
    
    const agreements = {
      male: {
        'passionnée': 'passionné',
        'étudiante': 'étudiant',
        'candidate': 'candidat',
        'professionnelle': 'professionnel',
        'motivée': 'motivé',
        'qualifiée': 'qualifié',
        'expérimentée': 'expérimenté',
        'déterminée': 'déterminé',
        'compétente': 'compétent',
        'créative': 'créatif',
        'innovante': 'innovant',
        'ambitieuse': 'ambitieux',
        'persévérante': 'persévérant',
        'organisée': 'organisé',
        'convaincue': 'convaincu',
        'ravie': 'ravi',
        'prête': 'prêt',
        'fière': 'fier'
      },
      female: {
        'passionné': 'passionnée',
        'étudiant': 'étudiante',
        'candidat': 'candidate',
        'professionnel': 'professionnelle',
        'motivé': 'motivée',
        'qualifié': 'qualifiée',
        'expérimenté': 'expérimentée',
        'déterminé': 'déterminée',
        'compétent': 'compétente',
        'créatif': 'créative',
        'innovant': 'innovante',
        'ambitieux': 'ambitieuse',
        'persévérant': 'persévérante',
        'organisé': 'organisée',
        'convaincu': 'convaincue',
        'ravi': 'ravie',
        'prêt': 'prête',
        'fier': 'fière'
      }
    };
    
    let result = text;
    const genderAgreements = agreements[gender] || {};
    
    Object.entries(genderAgreements).forEach(([maleForm, femaleForm]) => {
      if (gender === 'male') {
        result = result.replace(new RegExp(femaleForm, 'gi'), maleForm);
      } else if (gender === 'female') {
        result = result.replace(new RegExp(maleForm, 'gi'), femaleForm);
      }
    });
    
    return result;
  }
};

// Fonction pour créer des phrases naturelles à partir des listes
const createNaturalPhrase = (items, context, language, customTexts = {}) => {
    if (!items || items.trim() === '') return '';
    
    const itemList = items.split(', ').filter(item => item.trim());
    if (itemList.length === 0) return '';
    
    // Remplacer les valeurs "Autre" par le texte personnalisé
    const processedItems = itemList.map(item => {
        if (item.includes('Autre') || item.includes('Other')) {
            const field = context.toLowerCase();
            return customTexts[field] || item;
        }
        return item;
    });
    
    // Extraire le texte français ou anglais selon la langue
    const languageItems = processedItems.map(item => {
        if (item.includes(' / ')) {
            return language === 'fr' ? item.split(' / ')[0] : item.split(' / ')[1];
        }
        return item;
    });
    
    if (languageItems.length === 1) {
        return languageItems[0];
    } else if (languageItems.length === 2) {
        return language === 'fr' 
            ? `${languageItems[0]} et ${languageItems[1]}`
            : `${languageItems[0]} and ${languageItems[1]}`;
    } else {
        const lastItem = languageItems.pop();
        const firstItems = languageItems.join(language === 'fr' ? ', ' : ', ');
        return language === 'fr'
            ? `${firstItems} et ${lastItem}`
            : `${firstItems}, and ${lastItem}`;
    }
};

// Fonction pour créer des phrases contextuelles selon le type de contenu
const createContextualPhrase = (items, context, language, customTexts = {}) => {
    const naturalList = createNaturalPhrase(items, context, language, customTexts);
    
    if (!naturalList) return '';
    
    const contextualTemplates = {
        purpose: {
            fr: `une candidature pour ${naturalList}`,
            en: `an application for ${naturalList}`
        },
        qualifications: {
            fr: `mes ${naturalList}`,
            en: `my ${naturalList}`
        },
        motivation: {
            fr: `ma passion pour ${naturalList}`,
            en: `my passion for ${naturalList}`
        },
        goals: {
            fr: `mon objectif de ${naturalList}`,
            en: `my goal of ${naturalList}`
        },
        experience: {
            fr: `mon expérience en ${naturalList}`,
            en: `my experience in ${naturalList}`
        },
        achievements: {
            fr: `mes réalisations en ${naturalList}`,
            en: `my achievements in ${naturalList}`
        },
        languages: {
            fr: `ma maîtrise de ${naturalList}`,
            en: `my mastery of ${naturalList}`
        },
        interests: {
            fr: `mon intérêt pour ${naturalList}`,
            en: `my interest in ${naturalList}`
        }
    };
    
    return contextualTemplates[context]?.[language] || naturalList;
};

// Templates améliorés pour la génération de lettres
const letterTemplates = {
    // En-tête professionnel
    generateHeader: (personalInfo) => {
        const today = new Date();
        const dateStr = today.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        });
        
        return `${personalInfo.name}
[Votre adresse]
[Code postal] [Ville]
[Votre email]
[Votre téléphone]

${personalInfo.company}
Service des Ressources Humaines
[Adresse de l'entreprise]

Le ${dateStr}

Objet : candidature pour le poste de ${personalInfo.position}`;
    },

    // Introduction dynamique
    generateIntro: (personalInfo, hasExperience) => {
        const introTemplates = [
            `Je me permets de vous adresser ma candidature pour le poste de ${personalInfo.position} au sein de votre entreprise. ${frenchUtils.genderAgreement('Passionnée', personalInfo.gender)} par votre secteur d'activité et ${frenchUtils.genderAgreement('riche', personalInfo.gender)} de mon expérience, je suis ${frenchUtils.genderAgreement('convaincue', personalInfo.gender)} de pouvoir apporter une contribution significative à vos équipes.`,
            
            `Permettez-moi de vous présenter ma candidature pour le poste de ${personalInfo.position} dans votre organisation. Mon parcours et mes compétences correspondent parfaitement aux exigences de ce poste, et je suis ${frenchUtils.genderAgreement('enthousiaste', personalInfo.gender)} à l'idée de rejoindre votre équipe.`,
            
            `C'est avec un vif intérêt que je vous présente ma candidature pour le poste de ${personalInfo.position}. Votre entreprise et ses valeurs résonnent particulièrement avec mes aspirations professionnelles, et je suis ${frenchUtils.genderAgreement('convaincue', personalInfo.gender)} que mon profil correspond aux attentes de ce poste.`
        ];
        
        return introTemplates[Math.floor(Math.random() * introTemplates.length)];
    },

    // Section formation et expérience
    generateEducationAndExperience: (personalInfo, selectedExperience, selectedQualifications) => {
        let content = '';
        
        // Formation
        if (personalInfo.education && personalInfo.university) {
            content += `Mon parcours académique en tant que ${personalInfo.education} à ${personalInfo.university} m'a permis d'acquérir une solide base théorique et pratique. `;
        }
        
        // Expérience
        if (selectedExperience.length > 0 && !selectedExperience.includes('none')) {
            const experiencePhrases = [];
            
            if (selectedExperience.includes('internship')) {
                experiencePhrases.push('des stages enrichissants');
            }
            if (selectedExperience.includes('project')) {
                experiencePhrases.push('des projets académiques significatifs');
            }
            if (selectedExperience.includes('volunteer')) {
                experiencePhrases.push('une expérience bénévole');
            }
            if (selectedExperience.includes('parttime')) {
                experiencePhrases.push('des emplois étudiants');
            }
            if (selectedExperience.includes('freelance')) {
                experiencePhrases.push('des missions freelance');
            }
            if (selectedExperience.includes('fulltime')) {
                experiencePhrases.push('une expérience professionnelle');
            }
            
            if (experiencePhrases.length > 0) {
                content += `Mon parcours inclut ${frenchUtils.formatList(experiencePhrases)}, autant d'expériences qui m'ont permis de développer une vision pratique et une approche méthodique du travail en équipe et de la gestion de projets. `;
            }
        } else {
            content += `Mon parcours académique m'a permis de développer une approche méthodique et une capacité d'apprentissage rapide, qualités essentielles pour m'adapter rapidement aux exigences de ce poste. `;
        }
        
        return content;
    },

    // Section compétences et réalisations
    generateSkillsAndAchievements: (selectedQualifications, selectedAchievements, personalInfo) => {
        let content = '';
        
        // Compétences
        const skillPhrases = [];
        if (selectedQualifications.includes('leadership')) {
            skillPhrases.push('mes capacités de leadership');
        }
        if (selectedQualifications.includes('communication')) {
            skillPhrases.push('mes excellentes aptitudes communicationnelles');
        }
        if (selectedQualifications.includes('technical')) {
            skillPhrases.push('mes compétences techniques');
        }
        if (selectedQualifications.includes('languages')) {
            skillPhrases.push('mes compétences linguistiques');
        }
        
        if (skillPhrases.length > 0) {
            content += `Mes atouts principaux résident dans ${frenchUtils.formatList(skillPhrases)}. `;
        }
        
        // Réalisations
        const achievementPhrases = [];
        if (selectedAchievements.includes('publication')) {
            achievementPhrases.push('des travaux de recherche publiés');
        }
        if (selectedAchievements.includes('innovation')) {
            achievementPhrases.push('des projets innovants');
        }
        if (selectedAchievements.includes('academic')) {
            achievementPhrases.push('des résultats académiques remarquables');
        }
        if (selectedAchievements.includes('competition')) {
            achievementPhrases.push('des participations à des compétitions');
        }
        if (selectedAchievements.includes('team')) {
            achievementPhrases.push('des responsabilités d\'équipe');
        }
        
        if (achievementPhrases.length > 0) {
            content += `Je suis particulièrement ${frenchUtils.genderAgreement('fière', personalInfo.gender)} de ${frenchUtils.formatList(achievementPhrases)}, qui démontrent ma capacité à mener des projets à terme et à obtenir des résultats concrets. `;
        }
        
        return content;
    },

    // Section motivation
    generateMotivation: (selectedMotivations, personalInfo) => {
        const motivationPhrases = [];
        
        if (selectedMotivations.includes('impact')) {
            motivationPhrases.push('la possibilité d\'avoir un impact positif');
        }
        if (selectedMotivations.includes('growth')) {
            motivationPhrases.push('les opportunités de croissance');
        }
        if (selectedMotivations.includes('mission')) {
            motivationPhrases.push('la mission et les valeurs de votre organisation');
        }
        if (selectedMotivations.includes('innovation')) {
            motivationPhrases.push('l\'environnement innovant');
        }
        if (selectedMotivations.includes('team')) {
            motivationPhrases.push('l\'esprit de collaboration');
        }
        if (selectedMotivations.includes('challenge')) {
            motivationPhrases.push('les défis stimulants');
        }
        
        let content = '';
        if (motivationPhrases.length > 0) {
            content += `Ce qui m'attire particulièrement dans cette opportunité, c'est ${frenchUtils.formatList(motivationPhrases)}. `;
        }
        
        content += `Je suis ${frenchUtils.genderAgreement('convaincue', personalInfo.gender)} que votre environnement de travail correspondrait parfaitement à mes aspirations professionnelles et me permettrait de m'épanouir pleinement.`;
        
        return content;
    },

    // Conclusion
    generateClosing: (personalInfo) => {
        return `Je serais ${frenchUtils.genderAgreement('ravie', personalInfo.gender)} de pouvoir vous rencontrer lors d'un entretien afin de vous exposer plus en détail mes motivations et de découvrir les enjeux spécifiques du poste. Je vous remercie de l'attention que vous porterez à ma candidature et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.`;
    }
};

// Données enrichies avec des métadonnées pour la génération
const optionsData = {
  experience: [
    { id: 'none', label: 'Aucune expérience professionnelle', exclusive: true, text: 'débutant' },
    { id: 'internship', label: 'Stage / Internship', text: 'une expérience de stage' },
    { id: 'parttime', label: 'Travail à temps partiel', text: 'une expérience de travail à temps partiel' },
    { id: 'volunteer', label: 'Bénévolat', text: 'une expérience bénévole' },
    { id: 'project', label: 'Projets académiques', text: 'des projets académiques significatifs' },
    { id: 'freelance', label: 'Travail indépendant', text: 'une expérience en freelance' },
    { id: 'fulltime', label: 'Expérience professionnelle', text: 'une solide expérience professionnelle' }
  ],
  qualifications: [
    { id: 'degree', label: 'Diplôme universitaire', text: 'formation universitaire' },
    { id: 'certification', label: 'Certifications professionnelles', text: 'certifications spécialisées' },
    { id: 'technical', label: 'Compétences techniques', text: 'solides compétences techniques' },
    { id: 'languages', label: 'Maîtrise de langues', text: 'compétences linguistiques' },
    { id: 'leadership', label: 'Expérience de leadership', text: 'capacités de leadership' },
    { id: 'communication', label: 'Compétences en communication', text: 'excellentes aptitudes communicationnelles' }
  ],
  achievements: [
    { id: 'innovation', label: 'Projet innovant', text: 'projets innovants' },
    { id: 'academic', label: 'Excellence académique', text: 'résultats académiques remarquables' },
    { id: 'publication', label: 'Publications/Recherches', text: 'travaux de recherche publiés' },
    { id: 'competition', label: 'Concours/Compétitions', text: 'distinctions en compétitions' },
    { id: 'team', label: 'Gestion d\'équipe', text: 'expérience de management d\'équipe' }
  ],
  motivation: [
    { id: 'growth', label: 'Développement professionnel', text: 'opportunités de croissance' },
    { id: 'mission', label: 'Mission de l\'entreprise', text: 'la mission et les valeurs de votre organisation' },
    { id: 'innovation', label: 'Innovation et créativité', text: 'l\'environnement innovant' },
    { id: 'team', label: 'Travail d\'équipe', text: 'la collaboration en équipe' },
    { id: 'challenge', label: 'Défis techniques', text: 'les défis techniques stimulants' },
    { id: 'impact', label: 'Impact positif', text: 'la possibilité d\'avoir un impact positif' }
  ]
};

export const generateLocalLetter = (formData, language = 'fr', gender = '', customTexts = {}) => {
    // Utiliser toujours le nouveau système amélioré
    return generateImprovedLetter(formData, gender, { ...customTexts, language });
};

// Système complet de génération de lettres multilingue
const generateImprovedLetter = (formData, gender = '', customTexts = {}) => {
    const personalInfo = {
        name: formData.name || 'Candidat',
        age: formData.age || '',
        target: formData.target || 'ce poste',
        gender: gender || 'not-specified'
    };

    // Extract all user selections
    const selectedLanguages = formData.languages ? formData.languages.split(',').map(lang => lang.trim()).filter(Boolean) : [];
    const selectedInterests = formData.interests ? formData.interests.split(',').map(interest => interest.trim()).filter(Boolean) : [];
    const selectedGoals = formData.goals ? formData.goals.split(',').map(goal => goal.trim()).filter(Boolean) : [];
    const selectedMotivations = formData.motivation ? formData.motivation.split(',').map(mot => mot.trim()).filter(Boolean) : [];
    const selectedAchievements = formData.achievements ? formData.achievements.split(',').map(ach => ach.trim()).filter(Boolean) : [];
    const selectedExperience = formData.experience ? formData.experience.split(',').map(exp => exp.trim()).filter(Boolean) : [];
    const selectedQualifications = formData.qualifications ? formData.qualifications.split(',').map(qual => qual.trim()).filter(Boolean) : [];

    // Utiliser la langue demandée explicitement
    const currentLanguage = customTexts.language || formData.language || 'fr';

    const safeGenderAgreement = (adjective, gender) => {
        if (!gender || gender === 'not-specified') return adjective;
        const baseForm = adjective.replace(/\(e\)$/, '');
        if (gender === 'female') {
            return baseForm.endsWith('é') ? baseForm + 'e' : baseForm + 'e';
        }
        return baseForm;
    };

    // Fonctions utilitaires pour traduire et formater les sélections
    const translateAndFormat = (items, mapping, language) => {
        if (items.length === 0) return '';
        
        const translated = items.map(item => {
            const mappingItem = mapping[item.toLowerCase()];
            if (mappingItem) {
                return mappingItem[language];
            } else {
                // Fallback: utiliser la valeur telle quelle mais formatée
                return item.toLowerCase();
            }
        });
        
        if (language === 'fr') {
            if (translated.length === 1) return translated[0];
            if (translated.length === 2) return `${translated[0]} et ${translated[1]}`;
            return `${translated.slice(0, -1).join(', ')} et ${translated[translated.length - 1]}`;
        } else {
            if (translated.length === 1) return translated[0];
            if (translated.length === 2) return `${translated[0]} and ${translated[1]}`;
            return `${translated.slice(0, -1).join(', ')}, and ${translated[translated.length - 1]}`;
        }
    };

    // Language mappings
    const languageMapping = {
        'francais': { fr: 'français', en: 'French' },
        'anglais': { fr: 'anglais', en: 'English' },
        'espagnol': { fr: 'espagnol', en: 'Spanish' },
        'allemand': { fr: 'allemand', en: 'German' },
        'italien': { fr: 'italien', en: 'Italian' },
        'portugais': { fr: 'portugais', en: 'Portuguese' },
        'chinois': { fr: 'chinois', en: 'Chinese' },
        'japonais': { fr: 'japonais', en: 'Japanese' },
        'arabe': { fr: 'arabe', en: 'Arabic' },
        'russe': { fr: 'russe', en: 'Russian' },
        'turc': { fr: 'turc', en: 'Turkish' }
    };

    // Interest mappings
    const interestMapping = {
        'lecture': { fr: 'la lecture', en: 'reading' },
        'voyage': { fr: 'les voyages', en: 'traveling' },
        'sport': { fr: 'le sport', en: 'sports' },
        'musique': { fr: 'la musique', en: 'music' },
        'cinema': { fr: 'le cinéma', en: 'cinema' },
        'cuisine': { fr: 'la cuisine', en: 'cooking' },
        'photographie': { fr: 'la photographie', en: 'photography' },
        'art': { fr: 'l\'art', en: 'art' },
        'technologie': { fr: 'la technologie', en: 'technology' },
        'nature': { fr: 'la nature', en: 'nature' },
        'benevolat': { fr: 'le bénévolat', en: 'volunteering' },
        'ecriture': { fr: 'l\'écriture', en: 'writing' }
    };

    // Goal mappings
    const goalMapping = {
        'developpement_carriere': { fr: 'mon développement de carrière', en: 'my career development' },
        'expertise_domaine': { fr: 'mon expertise dans le domaine', en: 'my domain expertise' },
        'innovation': { fr: 'l\'innovation', en: 'innovation' },
        'leadership': { fr: 'développer mes compétences de leadership', en: 'developing my leadership skills' },
        'impact_social': { fr: 'avoir un impact social positif', en: 'having a positive social impact' },
        'formation_equipe': { fr: 'la formation d\'équipe', en: 'team building' },
        'gestion_projet': { fr: 'la gestion de projet', en: 'project management' },
        'recherche_developpement': { fr: 'la recherche et développement', en: 'research and development' },
        'consultation': { fr: 'la consultation', en: 'consulting' },
        'enseignement': { fr: 'l\'enseignement', en: 'teaching' },
        'mentorat': { fr: 'le mentorat', en: 'mentoring' },
        'creation_entreprise': { fr: 'la création d\'entreprise', en: 'entrepreneurship' },
        'specialisation_technique': { fr: 'ma spécialisation technique', en: 'my technical specialization' },
        'management': { fr: 'le management', en: 'management' },
        'international': { fr: 'l\'international', en: 'international work' },
        'durabilite': { fr: 'la durabilité', en: 'sustainability' },
        'développement professionnel': { fr: 'mon développement professionnel', en: 'my professional development' },
        'apprentissage continu': { fr: 'l\'apprentissage continu', en: 'continuous learning' },
        'contribution sociale': { fr: 'contribuer à la société', en: 'contributing to society' },
        'collaboration': { fr: 'travailler en équipe', en: 'working in teams' },
        'impact positif': { fr: 'avoir un impact positif', en: 'having a positive impact' }
    };

    // Motivation mappings
    const motivationMapping = {
        'croissance_professionnelle': { fr: 'la croissance professionnelle', en: 'professional growth' },
        'impact_positif': { fr: 'avoir un impact positif', en: 'having a positive impact' },
        'passion_domaine': { fr: 'ma passion pour le domaine', en: 'my passion for the field' },
        'valeurs_alignees': { fr: 'des valeurs alignées', en: 'aligned values' },
        'defis_stimulants': { fr: 'les défis stimulants', en: 'stimulating challenges' },
        'apprentissage_continu': { fr: 'l\'apprentissage continu', en: 'continuous learning' },
        'innovation': { fr: 'l\'innovation', en: 'innovation' },
        'service_autres': { fr: 'le service aux autres', en: 'service to others' },
        'reconnaissance': { fr: 'la reconnaissance', en: 'recognition' },
        'equilibre_vie_travail': { fr: 'l\'équilibre vie-travail', en: 'work-life balance' },
        'developpement_personnel': { fr: 'mon développement personnel', en: 'personal development' },
        'contribution_sociale': { fr: 'la contribution sociale', en: 'social contribution' },
        'excellence': { fr: 'l\'excellence', en: 'excellence' },
        'collaboration': { fr: 'la collaboration', en: 'collaboration' },
        'impact_environnemental': { fr: 'l\'impact environnemental', en: 'environmental impact' },
        'défis intellectuels': { fr: 'les défis intellectuels', en: 'intellectual challenges' },
        'travail d\'équipe': { fr: 'le travail d\'équipe', en: 'teamwork' },
        'impact social': { fr: 'avoir un impact social positif', en: 'having a positive social impact' }
    };

    // Achievement mappings
    const achievementMapping = {
        'projet_reussi': { fr: 'la réussite d\'un projet complexe', en: 'successfully completing a complex project' },
        'prix_academique': { fr: 'l\'obtention d\'un prix académique', en: 'receiving an academic award' },
        'leadership': { fr: 'l\'exercice de responsabilités de leadership', en: 'exercising leadership responsibilities' },
        'innovation': { fr: 'l\'innovation dans mon domaine', en: 'innovation in my field' },
        'collaboration': { fr: 'la collaboration efficace en équipe', en: 'effective team collaboration' },
        'resolution_problemes': { fr: 'la résolution de problèmes complexes', en: 'solving complex problems' },
        'communication': { fr: 'l\'amélioration de mes compétences de communication', en: 'improving my communication skills' },
        'adaptabilite': { fr: 'ma capacité d\'adaptation', en: 'my adaptability' },
        'projet_innovant': { fr: 'la réalisation d\'un projet innovant', en: 'completing an innovative project' },
        'certification_professionnelle': { fr: 'l\'obtention d\'une certification professionnelle', en: 'obtaining a professional certification' }
    };

    // Experience mappings
    const experienceMapping = {
        'stage': { fr: 'un stage', en: 'an internship' },
        'projet_personnel': { fr: 'un projet personnel', en: 'a personal project' },
        'travail_etudiant': { fr: 'un travail étudiant', en: 'student work' },
        'benevolat': { fr: 'du bénévolat', en: 'volunteer work' },
        'projet_academique': { fr: 'un projet académique', en: 'an academic project' },
        'competition': { fr: 'une compétition', en: 'a competition' },
        'formation': { fr: 'une formation', en: 'training' },
        'aucune_experience': { fr: 'aucune expérience professionnelle', en: 'no professional experience' }
    };

    // Qualification mappings
    const qualificationMapping = {
        'diplome': { fr: 'mon diplôme', en: 'my degree' },
        'experience_professionnelle': { fr: 'mon expérience professionnelle', en: 'my professional experience' },
        'competences_techniques': { fr: 'mes compétences techniques', en: 'my technical skills' },
        'competences_communication': { fr: 'mes compétences en communication', en: 'my communication skills' },
        'leadership': { fr: 'mes compétences de leadership', en: 'my leadership skills' },
        'projets_reussis': { fr: 'mes projets réussis', en: 'my successful projects' },
        'certification': { fr: 'ma certification', en: 'my certification' },
        'competences_linguistiques': { fr: 'mes compétences linguistiques', en: 'my language skills' },
        'gestion_equipe': { fr: 'ma gestion d\'équipe', en: 'my team management' },
        'resolution_problemes': { fr: 'ma résolution de problèmes', en: 'my problem solving' },
        'adaptabilite': { fr: 'mon adaptabilité', en: 'my adaptability' },
        'creativite': { fr: 'ma créativité', en: 'my creativity' },
        'travail_equipe': { fr: 'mon travail en équipe', en: 'my teamwork' },
        'autonomie': { fr: 'mon autonomie', en: 'my autonomy' },
        'organisation': { fr: 'mon organisation', en: 'my organization' },
        'compétences techniques': { fr: 'mes compétences techniques', en: 'my technical skills' },
        'soft skills': { fr: 'mes compétences relationnelles', en: 'my soft skills' },
        'langues': { fr: 'mes compétences linguistiques', en: 'my language skills' },
        'projets': { fr: 'mes projets', en: 'my projects' },
        'réseau': { fr: 'mon réseau professionnel', en: 'my professional network' },
        'passion': { fr: 'ma passion', en: 'my passion' }
    };

    // Traduire et formater toutes les sélections - Supprimé car maintenant utilisé directement dans chaque section
    // const formattedLanguages = translateAndFormat(selectedLanguages, languageMapping, currentLanguage);
    // const formattedInterests = translateAndFormat(selectedInterests, interestMapping, currentLanguage);
    // const formattedGoals = translateAndFormat(selectedGoals, goalMapping, currentLanguage);
    // const formattedMotivations = translateAndFormat(selectedMotivations, motivationMapping, currentLanguage);
    // const formattedAchievements = translateAndFormat(selectedAchievements, achievementMapping, currentLanguage);
    // const formattedExperience = translateAndFormat(selectedExperience, experienceMapping, currentLanguage);
    // const formattedQualifications = translateAndFormat(selectedQualifications, qualificationMapping, currentLanguage);

    // Sélectionner un template aléatoire selon la langue
    const getRandomTemplate = (language) => {
        if (language === 'fr') {
            const templates = [
                // Template 1: Style formel classique
                () => ({
                    header: `${personalInfo.name}\n${personalInfo.age ? `${personalInfo.age} ans` : ''}\n29 juin 2025`,
                    greeting: 'Madame, Monsieur,',
                    intro: `Étudiant${personalInfo.gender === 'female' ? 'e' : ''} ${safeGenderAgreement('passionné', personalInfo.gender)} et ${safeGenderAgreement('motivé', personalInfo.gender)}, je soumets ma candidature pour ${personalInfo.target}.`,
                    closing: `Je serais ${safeGenderAgreement('ravi', personalInfo.gender)} de pouvoir vous rencontrer lors d'un entretien afin de vous exposer plus en détail mes motivations et de découvrir les enjeux spécifiques du poste. Je vous remercie de l'attention que vous porterez à ma candidature et vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.\n\nCordialement,\n${personalInfo.name}`
                }),
                // Template 2: Style moderne
                () => ({
                    header: `${personalInfo.name}\n${personalInfo.age ? `${personalInfo.age} ans` : ''}\n29 juin 2025`,
                    greeting: 'Madame, Monsieur,',
                    intro: `Suite à votre annonce concernant le poste de ${personalInfo.target}, je souhaite vous présenter ma candidature. En tant que ${personalInfo.name}, je suis ${safeGenderAgreement('convaincu', personalInfo.gender)} de pouvoir apporter une réelle valeur ajoutée à votre équipe.`,
                    closing: `Je reste à votre disposition pour un entretien afin de vous présenter plus en détail ma candidature et de discuter de la manière dont je pourrais contribuer au succès de votre entreprise.\n\nVeuillez agréer, Madame, Monsieur, l'expression de ma considération distinguée.\n\n${personalInfo.name}`
                }),
                // Template 3: Style dynamique
                () => ({
                    header: `${personalInfo.name}\n${personalInfo.age ? `${personalInfo.age} ans` : ''}\n29 juin 2025`,
                    greeting: 'Madame, Monsieur,',
                    intro: `Permettez-moi de vous présenter ma candidature pour le poste de ${personalInfo.target}. Je me nomme ${personalInfo.name} et je suis ${safeGenderAgreement('enthousiaste', personalInfo.gender)} à l'idée de rejoindre votre équipe.`,
                    closing: `Je serais ${safeGenderAgreement('honoré', personalInfo.gender)} de pouvoir vous rencontrer pour discuter de ma candidature et de la valeur que je pourrais apporter à votre équipe.\n\nJe vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations respectueuses.\n\n${personalInfo.name}`
                })
            ];
            return templates[Math.floor(Math.random() * templates.length)]();
        } else {
            const templates = [
                // Template 1: Classic formal style
                () => ({
                    header: `${personalInfo.name}\n${personalInfo.age ? `${personalInfo.age} years old` : ''}\nJune 29, 2025`,
                    greeting: 'Dear Hiring Manager,',
                    intro: `As a passionate and motivated student, I am submitting my application for ${personalInfo.target}.`,
                    closing: `I would be delighted to meet with you for an interview to discuss my motivations in more detail and discover the specific challenges of the position. Thank you for the attention you will give to my application and I remain at your disposal.\n\nSincerely,\n${personalInfo.name}`
                }),
                // Template 2: Modern style
                () => ({
                    header: `${personalInfo.name}\n${personalInfo.age ? `${personalInfo.age} years old` : ''}\nJune 29, 2025`,
                    greeting: 'Dear Hiring Manager,',
                    intro: `Following your announcement regarding the ${personalInfo.target} position, I would like to submit my application. My name is ${personalInfo.name}, and I am passionate about the opportunity to join your team.`,
                    closing: `I remain available for an interview to discuss my motivations and skills in more detail.\n\nThank you for your consideration.\n\nBest regards,\n${personalInfo.name}`
                }),
                // Template 3: Dynamic style
                () => ({
                    header: `${personalInfo.name}\n${personalInfo.age ? `${personalInfo.age} years old` : ''}\nJune 29, 2025`,
                    greeting: 'Dear Hiring Manager,',
                    intro: `Allow me to submit my application for the ${personalInfo.target} position. My name is ${personalInfo.name} and I am enthusiastic about this opportunity.`,
                    closing: `I would be honored to meet with you to discuss my application and the value I could bring to your team.\n\nThank you for your consideration.\n\nSincerely,\n${personalInfo.name}`
                })
            ];
            return templates[Math.floor(Math.random() * templates.length)]();
        }
    };

    const template = getRandomTemplate(currentLanguage);

    // Générer les sections de contenu
    const generateLanguagesSection = () => {
        if (selectedLanguages.length === 0) return '';
        const languagesText = translateAndFormat(selectedLanguages, languageMapping, currentLanguage);
        if (currentLanguage === 'fr') {
            return `Ma maîtrise de ${languagesText} constitue un atout supplémentaire pour ce poste.`;
        } else {
            return `My proficiency in ${languagesText} constitutes an additional asset for this position.`;
        }
    };

    const generateInterestsSection = () => {
        if (selectedInterests.length === 0) return '';
        const interestsText = translateAndFormat(selectedInterests, interestMapping, currentLanguage);
        if (currentLanguage === 'fr') {
            return `Mes centres d'intérêt, notamment ${interestsText}, témoignent de ma curiosité intellectuelle et de ma capacité d'adaptation.`;
        } else {
            return `My interests, particularly ${interestsText}, demonstrate my intellectual curiosity and adaptability.`;
        }
    };

    const generateExperienceSection = () => {
        if (selectedExperience.length === 0) {
            if (currentLanguage === 'fr') {
                return `Je n'ai pas encore d'expérience professionnelle significative, mais mon parcours académique et mes projets personnels m'ont permis de développer des compétences précieuses.`;
            } else {
                return `Although I do not yet have significant professional experience, my academic background and personal projects have allowed me to develop valuable skills.`;
            }
        }
        
        const experienceText = translateAndFormat(selectedExperience, experienceMapping, currentLanguage);
        if (currentLanguage === 'fr') {
            return `Mon expérience inclut ${experienceText}, ce qui m'a permis de développer des compétences pratiques et une compréhension approfondie du domaine.`;
        } else {
            return `My experience includes ${experienceText}, which has allowed me to develop practical skills and a deep understanding of the field.`;
        }
    };

    const generateSkillsSection = () => {
        let section = '';
        
        if (selectedQualifications.length > 0) {
            const qualificationsText = translateAndFormat(selectedQualifications, qualificationMapping, currentLanguage);
            if (currentLanguage === 'fr') {
                section += `Mes principales qualifications incluent ${qualificationsText}. `;
            } else {
                section += `My main qualifications include ${qualificationsText}. `;
            }
        }
        
        if (selectedAchievements.length > 0) {
            const achievementsText = translateAndFormat(selectedAchievements, achievementMapping, currentLanguage);
            if (currentLanguage === 'fr') {
                section += `Je suis particulièrement fier${personalInfo.gender === 'female' ? 'e' : ''} de ${achievementsText}, qui démontrent ma capacité à mener des projets à terme et à obtenir des résultats concrets.`;
            } else {
                section += `I am particularly proud of ${achievementsText}, which demonstrate my ability to carry projects to completion and achieve concrete results.`;
            }
        }
        
        if (selectedGoals.length > 0) {
            const goalsText = translateAndFormat(selectedGoals, goalMapping, currentLanguage);
            if (currentLanguage === 'fr') {
                section += ` Mon objectif principal est de poursuivre ${goalsText} dans un environnement stimulant.`;
            } else {
                section += ` My main goal is to pursue ${goalsText} in a stimulating environment.`;
            }
        }
        
        if (!section) {
            if (currentLanguage === 'fr') {
                return 'Mes compétences et ma motivation constituent mes principaux atouts pour ce poste.';
            } else {
                return 'My skills and motivation constitute my main assets for this position.';
            }
        }
        return section;
    };

    const generateMotivationSection = () => {
        if (selectedMotivations.length === 0) {
            if (currentLanguage === 'fr') {
                return `Ce qui m'attire particulièrement dans cette opportunité, c'est la possibilité de contribuer au développement de votre entreprise tout en continuant à apprendre et à évoluer professionnellement.`;
            } else {
                return `What particularly attracts me to this opportunity is the possibility of contributing to your company's development while continuing to learn and grow professionally.`;
            }
        }
        
        const motivationsText = translateAndFormat(selectedMotivations, motivationMapping, currentLanguage);
        if (currentLanguage === 'fr') {
            const convinced = safeGenderAgreement('convaincu', personalInfo.gender);
            return `Ce qui m'attire particulièrement dans cette opportunité, c'est ${motivationsText}. Je suis ${convinced} que votre environnement de travail correspondrait parfaitement à mes aspirations professionnelles et me permettrait de m'épanouir pleinement.`;
        } else {
            return `What particularly attracts me to this opportunity is ${motivationsText}. I am convinced that your work environment would perfectly match my professional aspirations and allow me to flourish fully.`;
        }
    };

    // Assembler la lettre
    const sections = [
        template.header,
        '',
        template.greeting,
        '',
        template.intro,
        generateLanguagesSection(),
        generateInterestsSection(),
        '',
        generateExperienceSection(),
        '',
        generateSkillsSection(),
        '',
        generateMotivationSection(),
        '',
        template.closing
    ];

    return sections.filter(section => section !== '').join('\n');
};

export const generateWithAI = async (formData, apiKey, language = 'fr', gender = '') => {
    if (!apiKey) {
        return generateLocalLetter(formData, language, gender);
    }

    try {
        const genderContext = gender === 'male' ? 'male' : gender === 'female' ? 'female' : 'not specified';
        
        // Fonction pour formater les listes pour l'IA
        const formatForAI = (items) => {
            if (!items || items.trim() === '') return 'none specified';
            return items.split(', ').filter(item => item.trim()).join(', ');
        };

        // Adapter le contexte selon le type de candidature
        const getContextType = (purpose) => {
            const purposeLower = purpose.toLowerCase();
            if (purposeLower.includes('université') || purposeLower.includes('university')) return 'academic';
            if (purposeLower.includes('bourse') || purposeLower.includes('scholarship')) return 'scholarship';
            if (purposeLower.includes('stage') || purposeLower.includes('internship')) return 'internship';
            if (purposeLower.includes('bénévolat') || purposeLower.includes('volunteer')) return 'volunteer';
            if (purposeLower.includes('formation') || purposeLower.includes('training')) return 'training';
            if (purposeLower.includes('promotion') || purposeLower.includes('promotion')) return 'promotion';
            if (purposeLower.includes('changement') || purposeLower.includes('career-change')) return 'career-change';
            return 'professional';
        };

        const contextType = getContextType(formData.purpose);
        
        const systemPrompt = language === 'fr' 
            ? `Tu es un expert en rédaction de lettres de motivation. Crée une lettre professionnelle, structurée et persuasive en français, adaptée au contexte fourni. 

CONTEXTE: ${contextType === 'academic' ? 'Candidature académique' : contextType === 'scholarship' ? 'Demande de bourse' : contextType === 'internship' ? 'Candidature de stage' : contextType === 'volunteer' ? 'Poste de bénévole' : contextType === 'training' ? 'Demande de formation' : contextType === 'promotion' ? 'Demande de promotion' : contextType === 'career-change' ? 'Changement de carrière' : 'Candidature professionnelle'}

Utilise un ton formel mais engageant, avec une grammaire irréprochable. Évite les répétitions et intègre les sélections multiples de manière fluide et naturelle. Adapte le genre selon le contexte: ${genderContext}.

IMPORTANT: Utilise intelligemment toutes les qualifications, motivations et objectifs fournis pour créer une lettre cohérente et personnalisée.`
            : `You are an expert in writing cover letters. Create a professional, structured, and persuasive cover letter in English, adapted to the provided context.

CONTEXT: ${contextType === 'academic' ? 'Academic application' : contextType === 'scholarship' ? 'Scholarship request' : contextType === 'internship' ? 'Internship application' : contextType === 'volunteer' ? 'Volunteer position' : contextType === 'training' ? 'Training request' : contextType === 'promotion' ? 'Promotion request' : contextType === 'career-change' ? 'Career change' : 'Professional application'}

Use a formal but engaging tone with impeccable grammar. Avoid repetitions and integrate multiple selections fluently and naturally. Adapt the gender according to context: ${genderContext}.

IMPORTANT: Intelligently use all provided qualifications, motivations, and goals to create a coherent and personalized letter.`;

        const userPrompt = language === 'fr'
            ? `Crée une lettre pour ${formData.name} (${formData.age} ans) postulant pour ${formData.target}.

TYPE DE CANDIDATURE: ${formatForAI(formData.purpose)}
QUALIFICATIONS: ${formatForAI(formData.qualifications)}
MOTIVATIONS: ${formatForAI(formData.motivation)}
OBJECTIFS: ${formatForAI(formData.goals)}

INFORMATIONS ACADÉMIQUES:
- Établissement: ${formData.university || 'Non spécifié'}
- Domaine d'études: ${formData.fieldOfStudy || 'Non spécifié'}
- Expérience: ${formatForAI(formData.experience)}
- Réalisations: ${formatForAI(formData.achievements)}
- Langues: ${formatForAI(formData.languages)}
- Centres d'intérêt: ${formatForAI(formData.interests)}

GENRE: ${genderContext}

Format: Lettre formelle en français avec date (format: "29 juin 2025"), destinataire, contenu structuré et signature. Intègre naturellement toutes les informations fournies.`
            : `Create a cover letter for ${formData.name} (${formData.age} years old) applying for ${formData.target}.

APPLICATION TYPE: ${formatForAI(formData.purpose)}
QUALIFICATIONS: ${formatForAI(formData.qualifications)}
MOTIVATIONS: ${formatForAI(formData.motivation)}
GOALS: ${formatForAI(formData.goals)}

ACADEMIC INFORMATION:
- Institution: ${formData.university || 'Not specified'}
- Field of Study: ${formData.fieldOfStudy || 'Not specified'}
- Experience: ${formatForAI(formData.experience)}
- Achievements: ${formatForAI(formData.achievements)}
- Languages: ${formatForAI(formData.languages)}
- Interests: ${formatForAI(formData.interests)}

GENDER: ${genderContext}

Format: Formal letter in English with date (format: "June 29, 2025"), recipient, structured content and signature. Naturally integrate all provided information.`;

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [
                    {
                        role: 'system',
                        content: systemPrompt,
                    },
                    {
                        role: 'user',
                        content: userPrompt,
                    },
                ],
                max_tokens: 1000,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error('Erreur API OpenAI');
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } catch (error) {
        console.error('Erreur IA:', error);
        return generateLocalLetter(formData, language, gender);
    }
}; 