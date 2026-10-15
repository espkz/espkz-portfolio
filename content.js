/*
 * Portfolio content lives here. To add an item, copy a nearby object and
 * update its fields. Keep experience and publications newest-first.
 */
window.portfolioContent = {
  profile: {
    name: "Ellie Paek",
    introLabel: "Software engineer · AI researcher",
    intro: "I work on conversational AI, natural language processing, and interactive applications, with experience in both software engineering and research.",
    contact: [
      { label: "Email", text: "ellie.s.paek@gmail.com", href: "mailto:ellie.s.paek@gmail.com" },
      { label: "LinkedIn", text: "LinkedIn", href: "https://www.linkedin.com/in/elliepaek" },
      { label: "GitHub", text: "GitHub", href: "https://github.com/espkz" },
      { label: "Google Scholar", text: "Google Scholar", href: "https://scholar.google.com/citations?user=SEMB8uUAAAAJ" }
    ]
  },

  experience: [
    {
      organization: "Emory NLP Research Lab",
      role: "Software Engineer",
      period: "Sep 2026 – Current",
      location: "Remote",
      highlights: [
        "Building a speech-enabled AI roleplay agent with Python, LangChain, and OpenAI APIs, integrating speech recognition and text-to-speech for 100+ users.",
        "Developing a speech-based AI agent that documents and identifies dementia symptoms in patients."
      ]
    },
    {
      organization: "Emory University School of Nursing",
      role: "Software Engineer (Part-Time)",
      period: "Feb – Jul 2026",
      location: "Remote",
      highlights: [
        "Built a speech-enabled AI roleplay agent with Python, LangChain, and OpenAI APIs, integrating speech recognition and text-to-speech for 100+ users.",
        "Optimized real-time dialogue flows to improve turn-taking and response latency.",
        "Developed a Django platform to deploy and manage concurrent sessions."
      ]
    },
    {
      organization: "Emory NLP Research Lab",
      role: "AI Research Scientist",
      period: "Jul 2024 – Sep 2025",
      location: "Atlanta, GA",
      highlights: [
        "Fine-tuned multilingual encoders for retrieval-augmented generation systems, improving cross-lingual retrieval accuracy to 70%.",
        "Built and evaluated dialect-aware chatbots, achieving 91% feature accuracy.",
        "Designed evaluation workflows for multilingual model outputs."
      ]
    },
    {
      organization: "Emory NLP Research Lab",
      role: "Undergraduate Researcher",
      period: "May 2022 – May 2024",
      location: "Atlanta, GA",
      highlights: [
        "Developed a multi-party dialogue system with LLM-based evaluation, achieving 88% task completion and reducing manual evaluation by 90%."
      ]
    },
    {
      organization: "Emory University School of Medicine",
      role: "XR Developer (Intern)",
      period: "Oct 2022 – May 2024",
      location: "Atlanta, GA",
      highlights: [
        "Developed VR-based cognitive assessment simulations for epileptic patients with Unity and C#, designing immersive environments for neurological testing."
      ]
    }
  ],

  projects: [
    {
      name: "Musaic",
      period: "Jan – May 2023",
      summary: "A web app that turns natural-language prompts into Spotify playlists using the OpenAI API.",
      technologies: ["Python", "React.js", "OpenAI"],
      link: ""
    },
    {
      name: "POVTales",
      period: "",
      summary: "A retrieval-augmented chatbot for conversations with literary characters, grounded in story canon and each character’s perspective.",
      details: "Includes timeline-aware retrieval, character knowledge modeling, and automated evaluation pipelines to improve response consistency and quality.",
      technologies: ["Python", "Streamlit", "OpenAI API", "RAG"],
      link: ""
    }
  ],

  publications: [
    {
      title: "Why Are We Lonely? Leveraging LLMs to Measure and Understand Loneliness in Caregivers and Non-caregivers",
      venue: "HeaLing",
      year: "2026",
      link: "https://aclanthology.org/2026.healing-1.19/"
    },
    {
      title: "Finding A Voice: Exploring the Potential of African American Dialect and Voice Generation for Chatbots",
      venue: "ACL",
      year: "2025",
      link: "https://aclanthology.org/2025.acl-long.1252/"
    },
    {
      title: "Reference-Aligned Retrieval-Augmented Question Answering over Heterogeneous Proprietary Documents",
      venue: "CIKM · Applied Research Track",
      year: "2025",
      link: "https://dl.acm.org/doi/pdf/10.1145/3746252.3761566"
    },
    {
      title: "Enhancing Task-Oriented Dialogue Systems through Synchronous Multi-Party Interaction and Multi-Group Virtual Simulation",
      venue: "Information",
      year: "2024",
      link: "https://www.mdpi.com/2078-2489/15/9/580"
    },
    {
      title: "Novel Memory Assessment Methods in Minimally Invasive Epilepsy Surgery",
      venue: "Annual Review of Cybertherapy And Telemedicine",
      year: "2024",
      link: "https://www.researchgate.net/profile/Giuseppe-Riva-2/publication/387328695_ANNUAL_REVIEW_OF_CYBERTHERAPY_AND_TELEMEDICINE_2024/links/6780f78bfb021f2a47e59513/ANNUAL-REVIEW-OF-CYBERTHERAPY-AND-TELEMEDICINE-2024.pdf?field%5B%5D=author&criteria%5B%5D=Raquel+Torres-Luna#page=178"
    },
    {
      title: "Leveraging Large Language Models for Automated Dialogue Analysis",
      venue: "SIGDIAL",
      year: "2023",
      link: "https://aclanthology.org/2023.sigdial-1.20.pdf"
    }
  ],

  education: [
    {
      institution: "Emory University",
      period: "Aug 2021 – May 2024",
      location: "Atlanta, Georgia",
      degrees: [
        "B.S. in Mathematics and Computer Science, Highest Honors · GPA 3.95",
        "B.A. in Music, Vocal Performance"
      ],
      detail: "Relevant coursework: Data Structures & Algorithms, Systems Programming, Machine Learning. Thesis: Emora Assistant Bot: Revolutionizing Task Automation and Chatbot Evaluation."
    }
  ],

  skills: [
    { category: "Languages", items: ["Python", "TypeScript", "JavaScript", "C++", "Java", "C#", "SQL"] },
    { category: "Frameworks", items: ["Django", "Flask", "Next.js", "React", "Tailwind CSS", "Streamlit", "Unity"] },
    { category: "AI & machine learning", items: ["PyTorch", "Hugging Face", "scikit-learn", "LangChain", "FAISS", "RAG", "NLP", "LLM evaluation", "Conversational AI"] },
    { category: "Cloud & tools", items: ["AWS: S3, Lex, Bedrock", "Docker", "Git", "Linux"] }
  ]
};
