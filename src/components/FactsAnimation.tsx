import React, { useState, useEffect, useRef } from 'react';

const FactsAnimation = ({ language = 'fr' }) => {
    const [currentTip, setCurrentTip] = useState(0);

    const recruitmentTips = language === 'fr' ? [
        {
            title: "💼 Première impression",
            content: "Votre lettre de motivation doit captiver dès les premières lignes. Commencez par une accroche forte qui montre votre passion."
        },
        {
            title: "🎯 Personnalisation",
            content: "Adaptez chaque lettre à l'entreprise et au poste. Mentionnez des projets ou valeurs spécifiques de l'organisation."
        },
        {
            title: "📊 Chiffres et résultats",
            content: "Quantifiez vos réalisations : 'J'ai augmenté les ventes de 25%' plutôt que 'J'ai amélioré les performances'."
        },
        {
            title: "🔗 Réseautage",
            content: "Utilisez LinkedIn pour vous connecter avec des employés de l'entreprise avant de postuler. Cela peut faire la différence."
        },
        {
            title: "📝 Structure claire",
            content: "Organisez votre lettre en 3 parties : accroche, argumentation, conclusion avec appel à l'action."
        },
        {
            title: "🎨 Originalité",
            content: "Soyez authentique et montrez votre personnalité. Les recruteurs apprécient les candidats qui sortent du lot."
        },
        {
            title: "📞 Suivi",
            content: "Relancez poliment après 1-2 semaines si vous n'avez pas de réponse. Cela montre votre motivation."
        },
        {
            title: "🌐 Présence en ligne",
            content: "Assurez-vous que votre profil LinkedIn et vos réseaux sociaux reflètent votre professionnalisme."
        },
        {
            title: "🎓 Formation continue",
            content: "Mentionnez vos formations récentes et certifications. Cela montre votre engagement dans l'apprentissage."
        },
        {
            title: "🤝 Soft skills",
            content: "Mettez en avant vos compétences relationnelles : travail d'équipe, communication, adaptabilité."
        },
        {
            title: "📈 Évolution",
            content: "Expliquez votre parcours et vos objectifs de carrière. Montrez une vision claire de votre avenir professionnel."
        },
        {
            title: "💡 Innovation",
            content: "Partagez des idées ou projets innovants que vous pourriez apporter à l'entreprise."
        },
        {
            title: "🌍 Culture d'entreprise",
            content: "Renseignez-vous sur la culture de l'entreprise et montrez comment vous vous y intégrerez."
        },
        {
            title: "📱 Préparation entretien",
            content: "Préparez des questions pertinentes sur l'entreprise et le poste pour l'entretien."
        },
        {
            title: "✨ Confiance",
            content: "Croyez en votre valeur ajoutée. La confiance en soi se ressent dans une lettre de motivation."
        }
    ] : [
        {
            title: "💼 First Impression",
            content: "Your cover letter must captivate from the first lines. Start with a strong hook that shows your passion."
        },
        {
            title: "🎯 Personalization",
            content: "Adapt each letter to the company and position. Mention specific projects or values of the organization."
        },
        {
            title: "📊 Numbers and Results",
            content: "Quantify your achievements: 'I increased sales by 25%' rather than 'I improved performance'."
        },
        {
            title: "🔗 Networking",
            content: "Use LinkedIn to connect with company employees before applying. This can make the difference."
        },
        {
            title: "📝 Clear Structure",
            content: "Organize your letter in 3 parts: hook, argumentation, conclusion with call to action."
        },
        {
            title: "🎨 Originality",
            content: "Be authentic and show your personality. Recruiters appreciate candidates who stand out."
        },
        {
            title: "📞 Follow-up",
            content: "Follow up politely after 1-2 weeks if you haven't received a response. This shows your motivation."
        },
        {
            title: "🌐 Online Presence",
            content: "Ensure your LinkedIn profile and social networks reflect your professionalism."
        },
        {
            title: "🎓 Continuous Learning",
            content: "Mention your recent training and certifications. This shows your commitment to learning."
        },
        {
            title: "🤝 Soft Skills",
            content: "Highlight your interpersonal skills: teamwork, communication, adaptability."
        },
        {
            title: "📈 Career Growth",
            content: "Explain your career path and goals. Show a clear vision of your professional future."
        },
        {
            title: "💡 Innovation",
            content: "Share innovative ideas or projects you could bring to the company."
        },
        {
            title: "🌍 Company Culture",
            content: "Research the company culture and show how you would fit in."
        },
        {
            title: "📱 Interview Preparation",
            content: "Prepare relevant questions about the company and position for the interview."
        },
        {
            title: "✨ Confidence",
            content: "Believe in your added value. Self-confidence is felt in a cover letter."
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTip((prev) => (prev + 1) % recruitmentTips.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [recruitmentTips.length]);

    return (
        <div className="facts-container">
            <div className="facts-header">
                <h3>
                    {language === 'fr' 
                        ? '💡 Conseils pour réussir votre candidature' 
                        : '💡 Tips to succeed in your application'
                    }
                </h3>
                <p>
                    {language === 'fr'
                        ? 'Pendant que nous générons votre lettre, voici quelques conseils précieux...'
                        : 'While we generate your letter, here are some valuable tips...'
                    }
                </p>
            </div>
            
            <div className="fact-card">
                <div className="fact-number">
                    {currentTip + 1} / {recruitmentTips.length}
                </div>
                <div className="fact-content">
                    <h4 className="fact-title">{recruitmentTips[currentTip].title}</h4>
                    <p className="fact-text">{recruitmentTips[currentTip].content}</p>
                </div>
            </div>
            
            <div className="loading-indicator">
                <div className="loading-dots">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
                <p className="loading-text">
                    {language === 'fr' 
                        ? 'Génération de votre lettre en cours...' 
                        : 'Generating your letter...'
                    }
                </p>
            </div>
        </div>
    );
};

export default FactsAnimation; 