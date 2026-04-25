import elearningChatbot from "@/assets/elearning_chatbot.png";
import ecommerceRecommendation from "@/assets/ecommerce_recommendation.png";
import imageRecognition from "@/assets/youtube.png";

export const resumeData = {
  name: "SUBRAHAMANYAM POLA",
  title: "AI and ML Engineer",
  location: "Dublin, Ireland",
  phone: "+3 53874786869",
  email: "subramanyampola05@gmail.com",
  linkedin: "https://www.linkedin.com/in/subrahamanyam-pola-9b3012233/",
  github: "https://github.com/SubrahamanyamPola",
  resumeUrl: "/resume.pdf",

  summary: [
    "Artificial Intelligence and Machine Learning Engineer with 3+ years of experience supporting data processing pipelines, dataset validation workflows, and machine learning–ready analytics environments across financial and healthcare platforms.",
    "Experienced in building NLP pipelines, recommendation systems, and convolutional neural network models using Python, TensorFlow, PyTorch, Scikit-learn, and Hugging Face Transformers. Strong background in SQL-based dataset engineering, ETL workflow validation, feature preprocessing, and structured data pipeline reliability across distributed application environments on AWS and Google Cloud Platform.",
    "Proven ability to prepare analytics-ready datasets and support supervised learning experimentation across enterprise-scale application systems."
  ],

  stats: [
    { label: "Years Experience", value: 3 },
    { label: "AI/ML Projects", value: 15 },
    { label: "Cloud Platforms", value: 2 },
  ],

  experience: [
    {
      company: "Broadridge Financial Solutions | Bangalore, India",
      role: "Data Scientist",
      dates: "Jun 2021 - Dec 2023",
      bullets: [
        "Developed Python-based data processing workflows supporting structured preparation of financial transaction datasets for downstream analytics-ready processing across distributed application environments.",
        "Constructed SQL-driven dataset validation pipelines using MySQL, PostgreSQL, and MongoDB ensuring consistency of enterprise-scale transaction-processing datasets across integrated service modules.",
        "Engineered feature-aligned preprocessing routines supporting structured dataset preparation across billing and account-processing analytics workflows.",
        "Executed distributed dataset validation across AWS-hosted microservice-based environments supporting stability of enterprise analytics pipeline behaviour across release lifecycle stages.",
        "Integrated workflow automation routines within CI/CD pipelines supporting repeatable dataset verification across coordinated analytics-ready data pipeline environments.",
        "Verified relational and NoSQL backend dataset integrity using Excel and Power BI reporting-layer validation outputs supporting management-level financial analytics readiness workflows.",
        "Collaborated with development and platform engineering teams to investigate dataset inconsistencies improving reliability across enterprise-scale financial analytics workflows.",
        "Supported traceability between requirement-level specifications and backend dataset structures improving transparency across analytics-ready financial data preparation pipelines."
      ],
      tech: ["Python", "SQL", "MySQL", "PostgreSQL", "MongoDB", "AWS", "CI/CD", "Power BI", "Excel"]
    },
    {
      company: "IBM | Bangalore, India",
      role: "Data Engineer",
      dates: "Jan 2021 - May 2021",
      bullets: [
        "Analysed structured enterprise application datasets using SQL validation routines supporting consistency verification across Electronic Medical Record data-processing workflows.",
        "Designed dataset traceability mappings aligning requirement-level specifications with relational schemas supporting ETL workflow validation across application-layer data pipelines.",
        "Constructed structured dataset validation scenarios improving integrity verification coverage across multi-module enterprise healthcare data-processing environments.",
        "Executed relational dataset verification workflows using Oracle SQL supporting stable backend processing across integrated enterprise service components.",
        "Prepared requirement-to-dataset mapping artefacts supporting transparency across enterprise data integration workflows during sprint delivery cycles.",
        "Collaborated with engineering teams to investigate dataset inconsistencies improving reliability across healthcare analytics-ready platform workflows.",
        "Maintained dataset validation documentation supporting traceable enterprise data-processing readiness across regulated platform deployment environments.",
        "Coordinated regression-level dataset validation workflows supporting consistent enterprise application data integrity across iterative analytics pipeline updates."
      ],
      tech: ["SQL", "Oracle SQL", "ETL", "Data Pipelines", "Data Validation", "Data Engineering"]
    },
    {
      company: "LOTUS Hospital | Bangalore, India",
      role: "ML Engineer",
      dates: "Sep 2020 - Dec 2020",
      bullets: [
        "Designed neonatal ICU dashboard dataset validation workflows supporting preparation of patient-monitoring datasets for downstream supervised learning experimentation.",
        "Prepared structured healthcare dataset consistency checks using SQL verification routines improving reliability of neonatal patient-record analytics workflows.",
        "Developed feature-aligned preprocessing support workflows using Python data-handling routines enabling structured dataset preparation across healthcare analytics environments.",
        "Collaborated with clinical stakeholders to translate neonatal monitoring requirements into structured dataset validation scenarios supporting healthcare workflow intelligence readiness.",
        "Validated cross-platform clinical dashboard behaviour supporting stable delivery of structured healthcare data visualisation interfaces.",
        "Constructed dataset mapping logic aligning dashboard interface attributes with backend healthcare record schemas supporting traceability across neonatal monitoring pipelines.",
        "Supported preparation of neonatal workflow datasets enabling downstream model evaluation readiness across supervised analytics experimentation workflows.",
        "Documented dataset validation workflows supporting transparency across dashboard-driven clinical reporting pipelines used within neonatal ICU monitoring systems."
      ],
      tech: ["Python", "SQL", "Data Validation", "Feature Engineering", "Data Handling", "Machine Learning"]
    },
    {
      company: "Edureka Learning Platform | India (Remote)",
      role: "Full Stack Web Development Intern",
      dates: "May 2020 - Sep 2020",
      bullets: [
        "Implemented responsive frontend interfaces using HTML, CSS, and JavaScript supporting structured user-interaction workflows across learning-platform application modules, improving usability of dataset-driven training-content navigation features.",
        "Developed REST API-based backend connectivity using Flask and Django enabling structured dataset exchange between interface components and database-backed services supporting reliable training-platform workflows.",
        "Configured relational database interaction workflows supporting structured user-profile dataset management and persistence across training-platform application components enabling stable backend data access operations.",
        "Collaborated with mentoring engineers supporting modular feature development across integrated frontend and backend learning-platform environments improving coordination across application workflow delivery stages.",
        "Validated integrated frontend–backend execution behaviour across application modules supporting stable interaction between interface components and backend dataset-processing services.",
        "Maintained structured development updates within shared Git-based repositories supporting version-controlled collaboration across distributed learning-platform feature delivery workflows."
      ],
      tech: ["HTML", "CSS", "JavaScript", "Flask", "Django", "REST APIs", "Git", "SQL"]
    }
  ],

  projects: [
    {
      title: "AI-Driven E-Learning Personalization Chatbot",
      image: elearningChatbot,
      description: [
        "Implemented conversational AI chatbot workflows using Dialogflow integrated with Python NLP pipelines enabling automated learner-query classification across structured interaction datasets.",
        "Configured transformer-based intent recognition pipelines using Hugging Face models improving contextual classification accuracy across multi-topic conversational scenarios.",
        "Structured dialogue-routing logic supporting adaptive learning content recommendation workflows across personalised interaction pipelines."
      ],
      tech: ["Python", "Dialogflow", "NLP", "Hugging Face Transformers", "Conversational AI"]
    },
    {
      title: "E-Commerce Recommendation System",
      image: ecommerceRecommendation,
      description: [
        "Developed hybrid recommendation engine using collaborative filtering and content-based modelling with Scikit-learn improving personalised ranking relevance across behavioural datasets.",
        "Engineered dataset preprocessing workflows using Pandas and NumPy supporting exploratory data analysis across similarity-scoring pipelines.",
        "Evaluated recommendation performance outputs using ranking-based similarity metrics improving reliability of personalised discovery workflows."
      ],
      tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Recommendation Systems"]
    },
    {
      title: "Image Recognition System for Object Classification",
      image: imageRecognition,
      description: [
        "Implemented convolutional neural network classification pipelines using TensorFlow and Keras improving recognition accuracy across structured image datasets.",
        "Applied transfer-learning techniques using pretrained VGG16 and ResNet architectures improving classification stability across limited labelled training datasets.",
        "Optimised dataset augmentation workflows using Python-based preprocessing techniques improving model generalisation performance and classification stability across multi-category image recognition inputs."
      ],
      tech: ["Python", "TensorFlow", "Keras", "CNN", "Transfer Learning", "VGG16", "ResNet"]
    }
  ],

  skills: {
    "AI & ML": ["Machine Learning Pipelines", "Supervised Learning", "Feature Engineering Support", "Dataset Preprocessing", "Model Evaluation Preparation", "Recommendation Systems", "CNN Architectures", "Transfer Learning", "Natural Language Processing Pipelines", "Transformers (Hugging Face)", "Conversational AI Workflows"],
    "Programming": ["Python", "SQL", "Java", "JavaScript", "Bash"],
    "Deep Learning Frameworks": ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    "Natural Language Processing": ["spaCy", "NLTK", "Transformer-based Intent Classification"],
    "Data Engineering & Analytics": ["Pandas", "NumPy", "Exploratory Data Analysis", "Data Processing Pipelines", "Data Validation Workflows", "ETL Workflow Validation", "Dataset Traceability Mapping", "Excel Analytics", "Power BI Reporting Validation"],
    "Databases": ["MySQL", "PostgreSQL", "MongoDB", "Oracle SQL"],
    "Cloud AI Platforms": ["AWS (Compute, Storage, Distributed Application Data Workflows)", "Google Cloud Platform (Data Engineering Exposure)"],
    "AI Pipeline Engineering Workflows": ["Dataset Preparation", "Feature Alignment Support", "Structured Data Integrity Validation", "Analytics-Ready Dataset Construction"],
    "Version Control & Collaboration": ["Git", "GitHub", "GitLab", "Agile (Scrum)", "Jira", "Confluence"]
  },

  certifications: [
    "AWS Certified Machine Learning - Specialty - Amazon Web Services",
    "Google Cloud Professional Data Engineer - Google Cloud",
    "Deep Learning Specialization - Coursera",
    "ISTQB Certified Tester - Foundation Level - ISTQB",
    "Data Science and Artificial Intelligence Program - UpGrad Campus",
    "Full Stack Web Development Internship Program - Edureka"
  ],

  education: [
    {
      degree: "Master of Science in Artificial Intelligence",
      institution: "National College of Ireland | Dublin, Ireland",
    },
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "Sathyabama Institute of Science and Technology | Tamil Nadu, India",
    },
  ],
};
