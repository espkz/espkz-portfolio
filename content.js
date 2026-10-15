/*
 * Portfolio content lives here. To add an item, copy a nearby object and
 * update its fields. Keep experience and publications newest-first.
 */
window.portfolioContent = {
  profile: {
    name: "Ellie Paek",
    introLabel: "Software engineer · AI researcher",
    intro: "I work across language, dialogue, and interactive systems — bringing research ideas into useful, human-centered tools.",
    contact: [
      { label: "Email", text: "ellie.s.paek@gmail.com", href: "mailto:ellie.s.paek@gmail.com" },
      { label: "LinkedIn", text: "LinkedIn", href: "https://www.linkedin.com/in/elliepaek" },
      { label: "GitHub", text: "GitHub", href: "https://github.com/espkz" }
    ]
  },

  highlights: [
    { value: "100+", label: "users in a speech-enabled AI roleplay study" },
    { value: "91%", label: "feature accuracy for dialect-aware chatbots" },
    { value: "90%", label: "less manual evaluation for a dialogue system" }
  ],

  experience: [
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
      accent: "coral",
      link: ""
    },
    {
      name: "POVTales",
      period: "",
      summary: "A retrieval-augmented chatbot for conversations with literary characters, grounded in story canon and each character’s perspective.",
      details: "Includes timeline-aware retrieval, character knowledge modeling, and automated evaluation pipelines to improve response consistency and quality.",
      technologies: ["Python", "Streamlit", "OpenAI API", "RAG"],
      accent: "blue",
      link: ""
    }
  ],

  publications: [
    {
      title: "Finding A Voice: Evaluating African American Dialect Generation for Chatbot Technology",
      venue: "ACL",
      year: "2025",
      link: ""
    },
    {
      title: "Reference-Aligned Retrieval-Augmented Question Answering over Heterogeneous Proprietary Documents",
      venue: "CIKM · Applied Research Track",
      year: "2025",
      link: ""
    },
    {
      title: "Enhancing Task-Oriented Dialogue Systems through Synchronous Multi-Party Interaction",
      venue: "Information",
      year: "2024",
      link: ""
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
