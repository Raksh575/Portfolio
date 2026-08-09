export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  date: string;
  location: string;
  type: string; // "On-site" | "Remote" | "Hybrid"
  description: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  certificateUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Markdown or text content for the individual article view
  category: string;
  date: string;
  readTime: string;
  imageUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "vanet-misbehavior",
    title: "Hybrid CNN–BiLSTM Framework for VANET Misbehavior Detection",
    description: "A machine learning and deep learning based framework designed to detect misbehavior in Vehicular Ad Hoc Networks, with a focus on position falsification attacks. The approach combines CNN and BiLSTM for feature learning and sequential pattern analysis while using SMOTE to address class imbalance.",
    tags: ["Python", "Machine Learning", "Deep Learning", "CNN", "BiLSTM", "SMOTE", "VeReMi Dataset"],
    githubUrl: "", // Placeholder
    liveUrl: "", // No live link yet
    featured: true,
  },
  {
    id: "movie-recommender",
    title: "Movie Recommendation System",
    description: "A personalized movie recommendation system that suggests movies based on user preferences using content-based and collaborative filtering techniques.",
    tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    githubUrl: "", // Placeholder
    liveUrl: "",
    featured: false,
  },
  {
    id: "student-management",
    title: "Student Information Management System",
    description: "A desktop-based application for managing student information, including student records, data storage, and database operations through a Java Swing interface.",
    tags: ["Java", "Swing", "MySQL", "JDBC"],
    githubUrl: "", // Placeholder
    liveUrl: "",
    featured: false,
  },
  {
    id: "automation-testing",
    title: "Automation Testing System",
    description: "An automated testing project that uses Selenium WebDriver to automate browser interactions, execute test scenarios, and improve the efficiency of software testing.",
    tags: ["Python", "Selenium", "WebDriver"],
    githubUrl: "", // Placeholder
    liveUrl: "",
    featured: false,
  }
];

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    title: "Artificial Intelligence Intern",
    company: "Sri Nandha Infotech",
    date: "June 2025 · 1 month",
    location: "Coimbatore, Tamil Nadu, India",
    type: "On-site",
    description: "Developed and trained machine learning models for classification and predictive analysis tasks.",
    skills: ["Python", "Machine Learning", "n8n", "Generative AI"]
  },
  {
    id: "exp-2",
    title: "Python Developer Intern",
    company: "Internz Learn",
    date: "February 2025 – May 2025 · 4 months",
    location: "Bengaluru, Karnataka, India",
    type: "Remote",
    description: "Built a file management system in Python to automate tasks such as renaming, sorting, and archiving files.",
    skills: ["Python", "File Operations", "Automation", "Scripting"]
  }
];

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    title: "TCS iON National Qualifier Test (NQT) - IT",
    issuer: "TCS iON",
    date: "July 2026",
    certificateUrl: ""
  },
  {
    id: "cert-2",
    title: "Prompt Engineering",
    issuer: "Infosys Springboard",
    date: "2026",
    certificateUrl: ""
  },
  {
    id: "cert-3",
    title: "Introduction to Deep Learning",
    issuer: "Infosys Springboard",
    date: "2026",
    certificateUrl: ""
  },
  {
    id: "cert-4",
    title: "Introduction to Natural Language Processing (NLP)",
    issuer: "Infosys Springboard",
    date: "2026",
    certificateUrl: ""
  },
  {
    id: "cert-5",
    title: "Managing Project Stakeholders",
    issuer: "LinkedIn Learning",
    date: "2026",
    certificateUrl: ""
  },
  {
    id: "cert-6",
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    date: "2026",
    certificateUrl: ""
  },
  {
    id: "cert-7",
    title: "Communication Skills",
    issuer: "TCS iON",
    date: "2025",
    certificateUrl: ""
  },
  {
    id: "cert-8",
    title: "Presentation Skills",
    issuer: "TCS iON",
    date: "2025",
    certificateUrl: ""
  },
  {
    id: "cert-9",
    title: "Environmental Impact Assessment",
    issuer: "NPTEL (ELITE)",
    date: "2025",
    certificateUrl: ""
  },
  {
    id: "cert-10",
    title: "Introduction to Industry 4.0 and Industrial Internet of Things",
    issuer: "NPTEL (ELITE)",
    date: "2025",
    certificateUrl: ""
  }
];

export const achievementsData: Achievement[] = [
  {
    id: "ach-1",
    title: "Tata CodeVita",
    subtitle: "Global Rank: 6234",
    description: "Secured a Global Rank of 6234 in the Tata CodeVita competitive programming contest."
  },
  {
    id: "ach-2",
    title: "NPTEL ELITE Certification",
    subtitle: "Elite Status Achieved",
    description: "Qualified with ELITE category honors in the following specialized technical certifications: 'Environmental Impact Assessment' and 'Introduction to Industry 4.0 and Industrial Internet of Things'."
  }
];

export const blogData: BlogPost[] = [
  {
    id: "understanding-vanets",
    title: "Securing the Future of Connected Transit: A Deep Dive into VANET Security",
    excerpt: "An introduction to Vehicular Ad Hoc Networks (VANETs), their role in autonomous transport, and how deep learning models protect against location spoofing attacks.",
    category: "AI & ML",
    date: "August 2026",
    readTime: "5 min read",
    featured: true,
    content: `### Introduction to VANETs

Vehicular Ad Hoc Networks (VANETs) are emerging as a core component of intelligent transportation systems (ITS). By enabling vehicles to communicate with each other (V2V) and with roadside infrastructure (V2I), VANETs aim to improve road safety, traffic efficiency, and driver convenience.

However, because these networks rely heavily on self-reported spatial coordinates to broadcast critical traffic alerts, they are highly vulnerable to malicious activities. The most dangerous of these is **Position Falsification Attacks**, where a vehicle broadcasts incorrect location coordinates to cause gridlocks, reroute traffic, or simulate ghost crashes.

### Detection via Deep Learning

Traditional signature-based security struggles to keep up with dynamic attackers. This is where our final-year research project, the **Hybrid CNN–BiLSTM Framework for VANET Misbehavior Detection**, comes in.

1. **CNN for Spatial Features**: Convolutional Neural Networks analyze snapshots of spatial distributions to learn patterns of coordinate distributions.
2. **BiLSTM for Temporal Context**: Bidirectional Long Short-Term Memory networks evaluate these patterns in sequence, noting changes in speed, acceleration, and historical transit trajectories.
3. **Imbalance Mitigation with SMOTE**: Since attacks are relatively rare events, the dataset suffers from extreme class imbalance. Applying Synthetic Minority Over-sampling Technique (SMOTE) ensures the model doesn't overfit to benign behaviors.

*Note: This article is currently a placeholder showcasing the structure of my technical writeups. I will add more technical posts here soon.*`
  },
  {
    id: "ml-for-beginners",
    title: "Getting Started with Classification Models in Python",
    excerpt: "A beginner-friendly guide summarizing fundamental concepts in classification, feature engineering, and model validation using Scikit-Learn.",
    category: "Software Development",
    date: "July 2026",
    readTime: "4 min read",
    featured: false,
    content: `### Classification Fundamentals

In machine learning, classification is a supervised learning task where the model learns to predict categorical labels of unseen data points based on training history.

During my internship at **Sri Nandha Infotech**, I applied these core classification workflows:
- **Data Exploration**: Reviewing correlation matrices, histograms, and identifying missing values using Pandas and Seaborn.
- **Preprocessing**: Scaling numeric values with \`StandardScaler\` and encoding categorical attributes with \`OneHotEncoder\`.
- **Model Choice**: Implementing Decision Trees, Random Forests, and Support Vector Machines (SVMs).
- **Validation**: Relying on metrics like precision, recall, F1-score, and ROC-AUC curves rather than pure accuracy.

Building practical solutions using simple models is often the most stable starting point for any corporate AI application. More complex articles on Generative AI and process automation integrations will follow!`
  },
  {
    id: "automation-with-selenium",
    title: "Automating Browser Interactions with Selenium WebDriver",
    excerpt: "Learn how to write clean, maintainable UI automation test scripts in Python to streamline software verification and regression test suites.",
    category: "Automation",
    date: "May 2026",
    readTime: "3 min read",
    featured: false,
    content: `### The Importance of Automated Testing

Testing forms the backbone of stable software releases. Manual browser checking is error-prone, tedious, and non-scalable. Selenium WebDriver provides a powerful API to control browsers programmatically.

In my automation testing project, I developed scripts that:
1. **Initialize WebDrivers** securely using context managers.
2. **Locate elements** using XPath and CSS Selectors robustly, avoiding flaky dependencies on auto-generated indices.
3. **Implement Explicit Waits** (\`WebDriverWait\`) to synchronize scripts with asynchronous web applications, reducing false positives.
4. **Log assertions** and generate detailed test results.

By automating repetitive workflows, teams can focus their energy on building rather than manual debugging.`
  }
];
