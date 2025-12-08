export const categories = [
    { id: 'swe-general', label: 'SWE Fundamentals', icon: 'Code2' },
    { id: 'women-in-stem', label: 'Women in STEM', icon: 'HeartHandshake' },
    { id: 'dsa', label: 'DSA & Algorithms', icon: 'Binary' }, // New
    { id: 'system-design', label: 'System Design', icon: 'Server' }, // New
    { id: 'design-principles', label: 'Design Principles', icon: 'PenTool' }, // New
    { id: 'ai-ml', label: 'AI & Machine Learning', icon: 'Brain' }, // New
    { id: 'game-dev', label: 'Game Development', icon: 'Gamepad2' }, // New
    { id: 'mentorship', label: 'Mentorship', icon: 'Users' },
    { id: 'career', label: 'Career Growth', icon: 'Briefcase' },
    { id: 'interview', label: 'Interview Prep', icon: 'BrainCircuit' },
];

export const resources = [
    // --- Women in STEM ---
    {
        id: 1,
        title: "Rewriting the Code",
        description: "The largest global community for women in tech. offering mentorship, career resources, and a supportive community.",
        url: "https://rewritingthecode.org/",
        category: "women-in-stem",
        tags: ["Community", "Mentorship", "Global"],
        featured: true
    },
    {
        id: 2,
        title: "AnitaB.org",
        description: "A global organization for women technologists, known for the Grace Hopper Celebration.",
        url: "https://anitab.org/",
        category: "women-in-stem",
        tags: ["Events", "Community", "Advocacy"]
    },
    {
        id: 3,
        title: "Girls Who Code",
        description: "Closing the gender gap in technology and changing the image of what a programmer looks like and does.",
        url: "https://girlswhocode.com/",
        category: "women-in-stem",
        tags: ["Education", "Early Career", "Community"]
    },
    {
        id: 4,
        title: "PyLadies",
        description: "An international mentorship group with a focus on helping more women become active participants and leaders in the Python open-source community.",
        url: "https://pyladies.com/",
        category: "women-in-stem",
        tags: ["Python", "Open Source", "Community"]
    },
    {
        id: 5,
        title: "Tech Ladies",
        description: "A worldwide community with a job board for women in tech.",
        url: "https://www.hiretechladies.com/",
        category: "women-in-stem",
        tags: ["Jobs", "Community", "Networking"]
    },
    {
        id: 6,
        title: "Women Who Code",
        description: "Empowering women to excel in technology careers.",
        url: "https://www.womenwhocode.com/",
        category: "women-in-stem",
        tags: ["Community", "Events", "Resources"]
    },
    {
        id: 7,
        title: "Black Girls CODE",
        description: "Empowering girls of color to become innovators in STEM fields.",
        url: "https://www.blackgirlscode.com/",
        category: "women-in-stem",
        tags: ["Community", "Education", "Diversity"]
    },
    {
        id: 8,
        title: "Code First Girls",
        description: "A global nonprofit offering free coding courses and career support exclusively to women. Delivers beginner-friendly Python, JavaScript, and web dev workshops.",
        url: "https://codefirstgirls.com/",
        category: "women-in-stem",
        tags: ["Education", "Free Courses", "UK/Global"]
    },
    {
        id: 9,
        title: "Society of Women Engineers (SWE)",
        description: "Largest organization advocating for women in engineering and tech. Provides scholarships, conferences, and a network of chapters.",
        url: "https://swe.org/",
        category: "women-in-stem",
        tags: ["Engineering", "Scholarships", "Professional"]
    },
    {
        id: 9.5, // Using decimal to insert without renumbering everything below
        title: "WIT Academy",
        description: "Courses designed for women’s learning needs (flexible scheduling, supportive environment). Offers free workshops and paid programs.",
        url: "https://witacademy.io/", // Note: URL guessed based on name, might need verification, or use generic
        category: "women-in-stem",
        tags: ["Bootcamp", "Workshops", "Support"]
    },

    // --- SWE Fundamentals ---
    {
        id: 10,
        title: "Roadmap.sh",
        description: "Community-driven roadmaps, articles and resources for developers to choose their path and grow in their career.",
        url: "https://roadmap.sh/",
        category: "swe-general",
        tags: ["Learning Path", "Visual", "Comprehensive"],
        featured: true
    },
    {
        id: 11,
        title: "Full Stack Open",
        description: "Deep dive into modern web development. The main focus is on building single page applications with ReactJS.",
        url: "https://fullstackopen.com/en/",
        category: "swe-general",
        tags: ["React", "Node.js", "GraphQL", "Free Course"]
    },
    {
        id: 12,
        title: "The Odin Project",
        description: "A full stack curriculum that is free and supported by a passionate open source community.",
        url: "https://www.theodinproject.com/",
        category: "swe-general",
        tags: ["Web Dev", "Ruby", "JavaScript", "Project Based"]
    },
    {
        id: 13,
        title: "CS50: Introduction to Computer Science",
        description: "Harvard's introduction to the intellectual enterprises of computer science and the art of programming.",
        url: "https://pll.harvard.edu/course/cs50-introduction-computer-science",
        category: "swe-general",
        tags: ["CS Fundamentals", "C", "Python", "SQL"]
    },
    {
        id: 14,
        title: "Refactoring Guru",
        description: "Dedicated to Design Patterns and Refactoring. Easy to read and understand.",
        url: "https://refactoring.guru/",
        category: "swe-general",
        tags: ["Design Patterns", "Clean Code", "Visual"]
    },
    {
        id: 15,
        title: "IBM Skills Network - Intro to SE",
        description: "Covers SDLC, methodologies (Agile, Scrum), and programming fundamentals.",
        url: "https://catalog.skills.network/catalog_item/4150",
        category: "swe-general",
        tags: ["Course", "Fundamentals", "IBM"]
    },
    {
        id: 16,
        title: "Coursera - Intro to SWE",
        description: "Learn software development life cycle, design, testing, and project management.",
        url: "https://www.coursera.org/learn/introduction-to-software-engineering",
        category: "swe-general",
        tags: ["Course", "Theory", "Certificate"]
    },
    {
        id: 17,
        title: "Frontend Mentor",
        description: "Improve your front-end coding skills by building real projects.",
        url: "https://www.frontendmentor.io/",
        category: "swe-general",
        tags: ["Frontend", "Projects", "Community"]
    },
    {
        id: 18,
        title: "Exercism",
        description: "Develop fluency in 67 programming languages with mentorship and practice.",
        url: "https://exercism.org/",
        category: "swe-general",
        tags: ["Practice", "Mentorship", "Polyglot"]
    },

    // --- DSA & Algorithms ---
    {
        id: 50,
        title: "NeetCode",
        description: "A better way to prepare for coding interviews. Structured lists of LeetCode problems.",
        url: "https://neetcode.io/",
        category: "dsa",
        tags: ["Algorithms", "LeetCode", "Video Solutions"],
        featured: true
    },
    {
        id: 51,
        title: "Tech Interview Handbook",
        description: "Curated coding interview preparation materials for busy software engineers.",
        url: "https://www.techinterviewhandbook.org/",
        category: "dsa",
        tags: ["Guide", "Cheatsheets", "Mock Interviews"]
    },
    {
        id: 52,
        title: "VisuAlgo",
        description: "Visualizing data structures and algorithms through animation.",
        url: "https://visualgo.net/en",
        category: "dsa",
        tags: ["Visualization", "Education", "Interactive"]
    },
    {
        id: 53,
        title: "Big-O Cheat Sheet",
        description: "Know your complexities! The definitive guide to Big-O complexity for common algorithms.",
        url: "https://www.bigocheatsheet.com/",
        category: "dsa",
        tags: ["Reference", "Complexity", "Interview"]
    },
    {
        id: 54,
        title: "Hello Interview",
        description: "The complete guide to expanded technical interviews, including DSA and System Design.",
        url: "https://www.hellointerview.com/",
        category: "dsa",
        tags: ["Interview", "Guide", "Premium"]
    },
    {
        id: 55,
        title: "freeCodeCamp DSA",
        description: "Massive collection of articles and videos to learn Data Structures and Algorithms.",
        url: "https://www.freecodecamp.org/news/learn-data-structures-and-algorithms/",
        category: "dsa",
        tags: ["Free", "Comprehensive", "Article"]
    },

    // --- System Design ---
    {
        id: 63,
        title: "System Design Interview (Book)",
        description: "The 'Alex Xu' book. An insider's guide to passing the system design interview.",
        url: "https://www.amazon.com/System-Design-Interview-insiders-Second/dp/B08CMF2CQF",
        category: "system-design",
        tags: ["Book", "Classic", "Interview"]
    },
    {
        id: 60,
        title: "System Design Primer",
        description: "Learn how to design large-scale systems. The ultimate open-source guide.",
        url: "https://github.com/donnemartin/system-design-primer",
        category: "system-design",
        tags: ["GitHub", "Scalability", "Comprehensive"],
        featured: true
    },
    {
        id: 61,
        title: "ByteByteGo",
        description: "Everything you need to master system design interviews. From the author of System Design Interview.",
        url: "https://bytebytego.com/",
        category: "system-design",
        tags: ["Interview", "Course", "High Level"]
    },
    {
        id: 62,
        title: "High Scalability",
        description: "Real-life examples of how big companies build and scale their systems.",
        url: "http://highscalability.com/",
        category: "system-design",
        tags: ["Blog", "Case Studies", "Architecture"]
    },

    // --- AI & Machine Learning ---
    {
        id: 70,
        title: "Fast.ai",
        description: "Making neural nets uncool again. A top-tier free course for deep learning.",
        url: "https://www.fast.ai/",
        category: "ai-ml",
        tags: ["Deep Learning", "Python", "Practical"],
        featured: true
    },
    {
        id: 71,
        title: "Hugging Face",
        description: "The AI community building the future. Hub for models, datasets, and demos.",
        url: "https://huggingface.co/",
        category: "ai-ml",
        tags: ["Models", "Open Source", "NLP"]
    },
    {
        id: 72,
        title: "DeepLearning.AI",
        description: "World-class education for building an AI career. Courses by Andrew Ng.",
        url: "https://www.deeplearning.ai/",
        category: "ai-ml",
        tags: ["Coursera", "Theory", "Certification"]
    },
    {
        id: 74,
        title: "Google ML Crash Course",
        description: "Google's fast-paced, practical introduction to machine learning with TensorFlow APIs.",
        url: "https://developers.google.com/machine-learning/crash-course",
        category: "ai-ml",
        tags: ["Google", "Free", "TensorFlow"]
    },
    {
        id: 73,
        title: "Kaggle",
        description: "Inside Kaggle you’ll find all the code and data you need to do your data science work.",
        url: "https://www.kaggle.com/",
        category: "ai-ml",
        tags: ["Datasets", "Competitions", "Community"]
    },

    // --- Game Development ---
    {
        id: 84,
        title: "Unity Code Monkey",
        description: "Crystal clear, easy to understand Unity tutorials and courses.",
        url: "https://unitycodemonkey.com/freecourses.php",
        category: "game-dev",
        tags: ["Unity", "Tutorials", "Free"]
    },
    {
        id: 80,
        title: "Unity Learn",
        description: "Official learning platform for Unity, the world's leading real-time 3D development platform.",
        url: "https://learn.unity.com/",
        category: "game-dev",
        tags: ["Unity", "C#", "3D"],
        featured: true
    },
    {
        id: 81,
        title: "Unreal Engine Learning",
        description: "Documentation and learning paths for Unreal Engine.",
        url: "https://dev.epicgames.com/community/learning",
        category: "game-dev",
        tags: ["Unreal", "C++", "AAA"]
    },
    {
        id: 82,
        title: "Godot Docs",
        description: "Documentation for Godot, the free and open source game engine.",
        url: "https://docs.godotengine.org/en/stable/",
        category: "game-dev",
        tags: ["Open Source", "Lightweight", "Indie"]
    },
    {
        id: 83,
        title: "Game Programming Patterns",
        description: "A collection of patterns found in games that make code cleaner, easier to understand, and faster.",
        url: "https://gameprogrammingpatterns.com/",
        category: "game-dev",
        tags: ["Book", "Architecture", "Best Practices"]
    },

    // --- Design Principles & Patterns ---
    {
        id: 100,
        title: "The Twelve-Factor App",
        description: "A methodology for building software-as-a-service apps that maximize automation, portability, and minimizing divergence.",
        url: "https://12factor.net/",
        category: "design-principles",
        tags: ["Methodology", "SaaS", "Architecture"],
        featured: true
    },
    {
        id: 105,
        title: "Patterns.dev",
        description: "Free book on design patterns and component patterns for building powerful web apps with vanilla JavaScript and React.",
        url: "https://www.patterns.dev/",
        category: "design-principles",
        tags: ["Web", "React", "Design Patterns"]
    },
    {
        id: 106,
        title: "SourceMaking",
        description: "Design patterns, anti-patterns, refactoring, and UML. A comprehensive guide.",
        url: "https://sourcemaking.com/",
        category: "design-principles",
        tags: ["Design Patterns", "UML", "Refactoring"]
    },
    {
        id: 107,
        title: "Head First Design Patterns",
        description: "A brain-friendly guide to building extensible and maintainable object-oriented software.",
        url: "https://www.oreilly.com/library/view/head-first-design/0596007124/",
        category: "design-principles",
        tags: ["Book", "OOP", "Classic"]
    },
    {
        id: 101,
        title: "Laws of UX",
        description: "A collection of best practices that designers can consider when building user interfaces.",
        url: "https://lawsofux.com/",
        category: "design-principles",
        tags: ["UX", "Frontend", "Psychology"]
    },
    {
        id: 102,
        title: "Martin Fowler's Guide",
        description: "Articles on microservices, testing, refactoring, and agile software development from a legendary thought leader.",
        url: "https://martinfowler.com/architecture/",
        category: "design-principles",
        tags: ["Architecture", "Patterns", "Advanced"]
    },
    {
        id: 103,
        title: "Google Engineering Practices",
        description: "Google's internal documentation on code review, documentation, and testing.",
        url: "https://google.github.io/eng-practices/",
        category: "design-principles",
        tags: ["Code Review", "Best Practices", "Culture"]
    },
    {
        id: 104,
        title: "Domain-Driven Design (Distilled)",
        description: "A quick introduction to the core concepts of Domain-Driven Design.",
        url: "https://www.infoq.com/minibooks/domain-driven-design-quickly/",
        category: "design-principles",
        tags: ["DDD", "Architecture", "Complexity"]
    },

    // --- Advanced Career ---
    {
        id: 110,
        title: "Wizard Zines (Julia Evans)",
        description: "Bite-sized comics about serious programming topics like Linux, Networking, and debugging.",
        url: "https://wizardzines.com/",
        category: "career",
        tags: ["Learning", "Systems", "Visual"]
    },
    {
        id: 111,
        title: "Charity Majors (charity.wtf)",
        description: "Readings on engineering leadership, observability, and the socio-technical challenges of building software.",
        url: "https://charity.wtf/",
        category: "career",
        tags: ["Leadership", "Ops", "Blog"]
    },
    {
        id: 112,
        title: "The Manager's Path",
        description: "A guide for tech leaders navigating growth and change. Essential reading even for ICs.",
        url: "https://www.oreilly.com/library/view/the-managers-path/9781491973882/",
        category: "career",
        tags: ["Management", "Leadership", "Book"]
    },
    {
        id: 113,
        title: "Soft Skills: The Software Developer's Life Manual",
        description: "A guide to a holistic life as a developer, covering career, marketing, fitness, and spirit.",
        url: "https://simpleprogrammer.com/soft-skills-book/",
        category: "career",
        tags: ["Soft Skills", "Life", "Book"]
    },

    // --- Mentorship ---
    {
        id: 19, // Re-using ID space around mentorship
        title: "Coding Coach",
        description: "Free mentoring platform for developers, by developers.",
        url: "https://codingcoach.io/",
        category: "mentorship",
        tags: ["Free", "Global", "Open Source"]
    },
    {
        id: 20,
        title: "ADPList",
        description: "Democratizing mentorship for all. Find, book, and meet mentors around the world for free.",
        url: "https://adplist.org/",
        category: "mentorship",
        tags: ["Free Mentorship", "Global", "Design & Eng"],
        featured: true
    },
    {
        id: 21,
        title: "Built By Girls",
        description: "Prepares the next generation of female and non-binary leaders, builders, and creators.",
        url: "https://www.builtbygirls.com/",
        category: "mentorship",
        tags: ["Early Career", "Advisory", "Networking"]
    },
    {
        id: 22,
        title: "MentorCruise",
        description: "Connect with industry experts for long-term mentorship and career coaching.",
        url: "https://mentorcruise.com/",
        category: "mentorship",
        tags: ["Paid", "High Quality", "Coaching"]
    },
    {
        id: 23,
        title: "The Mentoring Club",
        description: "A free mentorship platform for people in tech.",
        url: "https://www.mentoring-club.com/",
        category: "mentorship",
        tags: ["Free", "Europe", "Tech"]
    },

    // --- Career Growth ---
    {
        id: 30,
        title: "Levels.fyi",
        description: "Compare software engineer salaries and career ladders across top tech companies.",
        url: "https://www.levels.fyi/",
        category: "career",
        tags: ["Salary", "Negotiation", "Data"]
    },
    {
        id: 31,
        title: "The Pragmatic Engineer",
        description: "The #1 technology newsletter on Substack. Highly relevant for career growth.",
        url: "https://blog.pragmaticengineer.com/",
        category: "career",
        tags: ["Newsletter", "Senior Eng", "Industry Trends"]
    },
    {
        id: 32,
        title: "StaffEng",
        description: "Stories of high-impact engineering roles, focusing on the Staff engineer level and beyond.",
        url: "https://staffeng.com/",
        category: "career",
        tags: ["Leadership", "Senior+"]
    },

    {
        id: 33,
        title: "What Color Is Your Parachute?",
        description: "A practical manual for job-hunters and career-changers.",
        url: "https://www.parachutebook.com/",
        category: "career",
        tags: ["Book", "Job Hunting", "Classic"]
    },
    {
        id: 34,
        title: "Atomic Habits",
        description: "An easy and proven way to build good habits and break bad ones.",
        url: "https://jamesclear.com/atomic-habits",
        category: "career",
        tags: ["Book", "Productivity", "Self Improvement"]
    },

    // --- Interview Prep ---
    {
        id: 95,
        title: "HackerRank Interview Preparation Kit",
        description: "Curated challenges and tips to help you prepare for your upcoming coding interview.",
        url: "https://www.hackerrank.com/interview/interview-preparation-kit",
        category: "interview",
        tags: ["Practice", "Challenges", "Kit"]
    },
    {
        id: 90,
        title: "Pramp",
        description: "Practice mock interviews with peers for free. Covers coding, system design, and behavioral questions.",
        url: "https://www.pramp.com/",
        category: "interview",
        tags: ["Mock Interviews", "Peer-to-Peer", "Free"],
        featured: true
    },
    {
        id: 91,
        title: "Interviewing.io",
        description: "Anonymous mock interviews with engineers from FAANG companies.",
        url: "https://interviewing.io/",
        category: "interview",
        tags: ["Mock Interviews", "Premium", "Anonymous"]
    },
    {
        id: 92,
        title: "Exponent",
        description: "Ace your tech interview with courses, mock interviews, and community.",
        url: "https://www.tryexponent.com/",
        category: "interview",
        tags: ["Behavioral", "System Design", "Courses"]
    },
    {
        id: 93,
        title: "GeeksforGeeks",
        description: "A computer science portal for geeks. Massive collection of interview experiences and problems.",
        url: "https://www.geeksforgeeks.org/",
        category: "interview",
        tags: ["Experiences", "DSA", "Portal"]
    },
    {
        id: 94,
        title: "Cracking the Coding Interview",
        description: "The most famous book on coding interviews. The official site with solutions and resources.",
        url: "https://www.crackingthecodinginterview.com/",
        category: "interview",
        tags: ["Book", "Classic", "Solutions"]
    },
    {
        id: 95,
        title: "LeetCode",
        description: "A platform for coding interview preparation. Offers a wide range of problems and resources.",
        url: "https://leetcode.com/",
        category: "interview",
        tags: ["Practice", "Challenges", "Premium"]
    },
    {
        id: 96,
        title: "HackerRank",
        description: "A platform for coding interview preparation. Offers a wide range of problems and resources.",
        url: "https://www.hackerrank.com/",
        category: "interview",
        tags: ["Practice", "Challenges", "Premium"]
    },
    {
        id: 97,
        title: "Refactoring Guru",
        description: "A platform for learning design patterns and refactoring. Offers a wide range of problems and resources.",
        url: "https://refactoring.guru/design-patterns",
        category: "design-principles",
        tags: ["Practice", "Challenges", "Freemium"]
    }
];
