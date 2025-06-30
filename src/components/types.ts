import { Question } from '../+types/root';

export const questions: Record<string, Question[]> = {
  beginner: [
    {
      id: 'b_html_1',
      question: 'Would you like to upload a photo for your CV? (Optional)',
      category: 'Personal Information',
      tips: 'Photos can personalize your CV but are optional unless required by the employer.',
    },
    {
      id: 'b_html_2',
      question: 'What is your full name?',
      category: 'Personal Information',
      tips: 'Use the full name you’d use professionally on job applications and LinkedIn.',
    },
    {
      id: 'b_html_3',
      question: 'Which city do you live in?',
      category: 'Personal Information',
      tips: 'Include your current city or the one you are applying in for relevance.',
    },
    {
      id: 'b_html_4',
      question: 'What is your phone number?',
      category: 'Personal Information',
      tips: 'Double-check for accuracy so employers can reach you easily.',
    },
    {
      id: 'b_html_5',
      question: 'What is your email address?',
      category: 'Personal Information',
      tips: 'Use a professional email, ideally your first and last name.',
    },
    {
      id: 'b_html_6',
      question: 'Would you like to add a personal website? (Optional)',
      category: 'Personal Information',
      tips: 'Include a portfolio or blog if it showcases your work or skills.',
    },
    {
      id: 'b_html_7',
      question: 'Would you like to add a LinkedIn profile? (Optional)',
      category: 'Personal Information',
      tips: 'A complete LinkedIn profile can boost your credibility with recruiters.',
    },
    {
      id: 'b_css_1',
      question: 'Write a short summary about yourself.',
      category: 'Profile',
      tips: 'Briefly highlight your key skills, experience, and career goals in 2–3 lines.\n\n(e.g.) Passionate Computer Science student with a strong foundation in web development and cybersecurity. Seeking internship opportunities to apply technical skills and grow professionally in a dynamic tech environment.',
    },
    {
      id: 'b_js_1',
      question: 'List your educational background. For each include degree - school - location - and year — (separated by commas).',
      category: 'Education',
      tips: 'List your most relevant or highest education credentials. \n\n (e.g.) BSc in Computer Science - USTHB - Algiers - 2023 , Master Cybersecurity - USTHB - Algiers - 2025',
    },
    {
      id: 'b_react_1',
      question: 'Describe your most relevant work or project experience. Include job titles, roles, or achievements (comma-separated).',
      category: 'Experience',
      tips: 'Describe your work or internship experiences. Mention the role, company, duration, and key achievements or responsibilities.\n\n(e.g.) Frontend Developer, TechCorp, 2022–2024\n- Developed user-friendly UI with React\n- Improved page speed by 40%\n\n Cybersecurity Intern, SecureIT, Summer 2023\n- Monitored network traffic for suspicious activity\n- Conducted vulnerability assessments and wrote reports\n\n Freelance Web Developer, 2021–2022\n- Built websites for small businesses using HTML/CSS/JS\n- Integrated contact forms and SEO best practices',
    },
    {
      id: 'b_gen_1',
      question: 'List your top skills (comma-separated).',
      category: 'Skills',
      tips: 'Include hard skills relevant to the job, like programming languages or tools.\n\n (e.g.) JavaScript, Python, React, Problem Solving, Teamwork, Communication',
    },
    {
      id: 'b_gen_2',
      question: 'Which languages do you speak?',
      category: 'Languages',
      tips: 'Mention both spoken and written proficiency if relevant to your work. \n\n (e.g.) English - fluent, French - intermediate, Arabic - native',
    },
    {
      id: 'b_gen_3',
      question: 'List your interests (comma-separated).',
      category: 'Interests',
      tips: 'Add hobbies that reflect your personality or support your professional image.\n\n (e.g.) Coding, Reading, Traveling, Gaming, Cooking',
    },
    {
      id: 'b_gen_4',
      question: 'Would you like to add any of the following: Internships, Extracurriculars, Certificates, Qualities, or References? Please type the one you\'d like to add (e.g., Internships), or click Skip to continue without adding any.',
      category: 'Additional Info',
      tips: 'Optional sections help showcase additional strengths and experiences.',
    },
  ],
};

export const optionalCategoryOptions = [
  "Internships",
  "Extracurriculars",
  "Certificates",
  "Qualities",
  "References"
];

export const followUpQuestionsMap: Record<string, string> = {
  Internships: "Please mention your Internships.",
  Extracurriculars: "Please describe your Extracurricular activities.",
  Certificates: "Please list your relevant Certificates.",
  Qualities: "Mention a few personal or professional Qualities you’re proud of.",
  References: "Add any References you’d like to include.",
};
