import healthcare from "@/assets/healthcare.png";
import chatbot from "@/assets/chatbot.png";
import youtube from "@/assets/youtube.png";
import career from "@/assets/career.png";

export const resumeData = {
  name: "Chandana Lingala",
  title: "AI/ML Engineer",
  location: "Corpus Christi, TX",
  phone: "(361)-510-5276",
  email: "chandanalingala04@gmail.com",
  linkedin: "https://www.linkedin.com/in/lingalachandana23/",
  github: "https://github.com/clingala",
  resumeUrl: "/resume.pdf",

  summary: [
    "AI/ML Engineer with hands-on experience in building and integrating machine learning and Generative AI solutions using Python and FastAPI to support real-time prediction and intelligent workflows.",
    "Skilled in developing large language models-powered and RAG-based systems using semantic search and vector databases to improve response accuracy. Strong in NLP, feature engineering, and ML pipeline development, enabling scalable data processing and reliable inference systems.",
    "Experienced in delivering data-driven AI solutions that improve automation and support business decision-making.",
  ],

  stats: [
    { label: "AI/ML Projects", value: 10 },
    { label: "Model Accuracy", value: 95 },
    { label: "Efficiency Gain", value: 40 },
  ],

  experience: [
    {
      company: "BCG (Virtual Job Simulation)",
      role: "GenAI Consultant",
      dates: "Apr 2026",
      bullets: [
        "Built a Generative AI-powered financial chatbot using LLM-based processing and NLP techniques with Python and Pandas to extract and interpret data from 10-K and 10-Q filings, improving financial insight accessibility for business users.",
        "Processed and standardized financial datasets using Pandas and NumPy for data preprocessing and feature engineering, reducing data inconsistencies by 30% and improving downstream analytics reliability.",
        "Designed response generation workflows using prompt engineering and LLM-aligned NLP pipelines, enabling accurate summarization of financial metrics such as revenue trends and risk factors.",
        "Integrated retrieval-based data pipelines (RAG-aligned) and chatbot logic using Python, supporting automated financial analysis and reducing manual effort by 40% in consulting workflows.",
        "Applied Natural Language Processing (NLP), text extraction, and entity recognition techniques to identify key financial disclosures, improving response relevance and interpretability.",
        "Evaluated chatbot outputs and refined logic using TensorFlow/PyTorch-based model evaluation and performance optimization techniques, improving response accuracy by 20% across multiple query scenarios.",
      ],
      tech: ["Python", "Pandas", "LLMs", "RAG", "NLP", "TensorFlow", "PyTorch"],
    },
    {
      company: "Tata Group (Virtual Job Simulation)",
      role: "Generative AI Specialist",
      dates: "Apr 2026",
      bullets: [
        "Conducted exploratory data analysis using Python, Pandas, and NumPy to assess financial datasets, uncovering delinquency risk indicators and improving data quality consistency by 25%.",
        "Transformed raw customer transaction data through feature engineering and preprocessing techniques, enabling structured inputs for delinquency risk assessment models.",
        "Formulated a predictive framework leveraging Generative AI-assisted logic design and statistical analysis, reducing model development time.",
        "Spearheaded the design of an AI-driven collections strategy using data segmentation and rule-based automation, improving recovery prioritization efficiency by 20%.",
        "Generated business-ready insights using NLP, LLM-assisted summarization, and Tableau/Power BI dashboards, reducing manual reporting effort by 30%.",
        "Assessed model performance and calibrated risk thresholds using Python-based validation techniques, improving delinquency classification accuracy by 18%.",
      ],
      tech: ["Python", "Pandas", "NumPy", "NLP", "LLMs", "Tableau", "Power BI"],
    },
    {
      company: "Augur Talentcare Private Limited | Client: ADNOC",
      role: "AI/ML Engineer",
      dates: "May 2022 - Jun 2024",
      bullets: [
        "Built data preprocessing pipelines using Python, Pandas, and NumPy to prepare industrial sensor and equipment datasets for machine learning model training, reducing preprocessing time by 25%.",
        "Processed large-scale industrial equipment and operational datasets using SQL and Python, enabling structured inputs for predictive maintenance and asset monitoring models, improving data consistency by over 30%.",
        "Performed data validation and cleansing on structured and unstructured data, achieving ~95% accuracy in model training datasets and improving overall model performance.",
        "Prepared labeled datasets for computer vision and NLP models on equipment inspection and operational logs, improving anomaly detection accuracy by 20% in asset monitoring workflows.",
        "Collaborated with data science teams to refine feature engineering and model input requirements, reducing model retraining cycles by 15% and improving training efficiency.",
        "Standardized data transformation workflows using Python and supported CI/CD pipelines with Docker and Kubernetes for model deployment, reducing dataset turnaround time by 20-25% and improving release consistency.",
        "Integrated processed datasets into ML pipelines and deployed model inference systems, enabling real-time predictions for equipment health monitoring and operational decision-making.",
        "Monitored pipeline performance and resolved inconsistencies using validation and logging, improving pipeline stability and reducing data errors by 18% in production AI systems.",
      ],
      tech: ["Python", "Pandas", "SQL", "Docker", "Kubernetes", "ML Pipelines", "Computer Vision", "NLP"],
    },
  ],

  projects: [
    {
      title: "Microservices-Based Healthcare Monitoring System",
      image: healthcare,
      description: [
        "Developed a healthcare monitoring system using FastAPI and Docker-based microservices, enabling modular services for vitals tracking, alerts, and reporting across distributed workflows.",
        "Applied real-time data processing with MongoDB and REST APIs to handle continuous patient data streams, improving data availability and supporting timely monitoring operations.",
        "Implemented alert mechanisms for abnormal vitals, reducing response time for critical conditions by 30% and enabling faster intervention in monitoring workflows.",
      ],
      tech: ["FastAPI", "Docker", "MongoDB", "REST APIs", "Microservices"],
    },
    {
      title: "AI Chatbot Application",
      image: chatbot,
      description: [
        "Built a conversational AI system using Python, FastAPI, Flask, and NLP techniques, enabling context-aware query handling for document-driven user interactions.",
        "Implemented retrieval-based AI systems architecture using FAISS and ChromaDB to retrieve relevant context, improving answer accuracy by 35% and reducing irrelevant responses.",
        "Enhanced response quality through semantic search and contextual retrieval, enabling more reliable outputs across multi-query conversational scenarios.",
      ],
      tech: ["Python", "FastAPI", "FAISS", "ChromaDB", "NLP"],
    },
    {
      title: "YouTube Video Summarizer",
      image: youtube,
      description: [
        "Built a transcript-driven video summarization system using Python and FastAPI with OpenAI API–based NLP pipelines, reducing manual review effort for long-form video content by ~40%.",
        "Implemented chunk-based transcript segmentation and REST API processing workflows using FastAPI and Axios integration, improving large-transcript handling reliability and reducing token-limit failures by ~30%.",
        "Developed a React-based frontend with secure environment configuration and CORS-enabled API communication workflows, improving response stability across multi-request summarization interactions.",
      ],
      tech: ["Python", "FastAPI", "OpenAI API", "React", "Axios"],
    },
    {
      title: "Career Assist - AI-Based Career Guidance Platform",
      image: career,
      description: [
        "Built a career recommendation platform using Python and machine learning techniques, enabling personalized suggestions based on user skills and preferences.",
        "Applied resume parsing and feature extraction to evaluate candidate profiles, improving job-role matching accuracy by 20% and supporting better recommendations.",
        "Developed backend services and database integrations to manage user data, enabling scalable recommendation workflows and consistent user experience.",
      ],
      tech: ["Python", "Machine Learning", "NLP", "Feature Extraction"],
    },
  ],

  skills: {
    "Programming & Querying": ["Python", "SQL", "Java"],
    "Machine Learning & Deep Learning": [
      "Machine Learning", "Deep Learning", "Feature Engineering", "Model Evaluation",
      "Model Optimization", "Model Inference", "Prediction Systems",
    ],
    "Generative AI & LLMs": [
      "Large Language Models (LLMs)", "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering", "Contextual Retrieval", "Semantic Search",
    ],
    "NLP & Text Processing": [
      "Natural Language Processing (NLP)", "Text Embedding", "Tokenization",
      "Text Similarity", "Entity Recognition",
    ],
    "Frameworks & Libraries": ["PyTorch", "TensorFlow", "Scikit-learn", "Hugging Face Transformers"],
    "LLM & Vector Infrastructure": ["FAISS", "ChromaDB", "Vector Search", "Embedding Models"],
    "Backend & API Development": ["FastAPI", "Flask", "Spring Boot", "REST API Development", "API Integration"],
    "Cloud, MLOps & Deployment": [
      "AWS (EC2, S3)", "Docker", "Kubernetes", "CI/CD Pipelines",
      "Model Deployment", "Scalable AI Systems", "Production AI Systems",
    ],
    "Data Processing & Pipelines": [
      "Data Preprocessing", "Data Validation", "Data Pipelines",
      "Real-Time Data Processing", "Feature Engineering",
    ],
    "Visualization & Reporting": ["Tableau", "Power BI"],
    "Tools & Version Control": ["Git", "GitHub"],
  },

  certifications: [
    "Machine Learning Crash Course - Google",
    "Machine Learning Specialization - DeepLearning.AI",
    "BCG - GenAI Job Simulation",
    "Tata Group - Data Analytics Job Simulation",
    "Generative AI with Large Language Models - Coursera",
    "Natural Language Processing Specialization - Coursera",
  ],

  education: [
    {
      degree: "Masters in Computer Science",
      institution: "Texas A&M University - Corpus Christi",
    },
    {
      degree: "Bachelor of Technology in Electronics & Communication Engineering",
      institution: "Anurag University",
    },
  ],
};
