export const profiles = [
    {
        id: 1,
        name: "Ada Lovelace",
        role: "The First Programmer",
        bio: "An English mathematician and writer, chiefly known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine. She was the first to recognize that the machine had applications beyond pure calculation.",
        quote: "That brain of mine is something more than merely mortal; as time will show.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg"
    },
    {
        id: 2,
        name: "Grace Hopper",
        role: "Rear Admiral & Computer Scientist",
        bio: "A pioneer of computer programming who invented one of the first linkers. She was the first to devise the theory of machine-independent programming languages, and the FLOW-MATIC language she created was later extended to create COBOL.",
        quote: "A ship in port is safe, but that's not what ships are built for.",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg"
    },
    {
        id: 3,
        name: "Margaret Hamilton",
        role: "Director of SE Division, MIT Logic",
        bio: "Headed the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for the Apollo space program. She coined the term 'software engineering'.",
        quote: "Looking back, we were the luckiest people in the world; there was no choice but to be pioneers.",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/db/Margaret_Hamilton_-_restoration.jpg"
    },
    {
        id: 4,
        name: "Katherine Johnson",
        role: "Mathematician & NASA Calculator",
        bio: "Her calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.",
        quote: "Like what you do, and then you will do your best.",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Katherine_Johnson_1983.jpg"
    },
    {
        id: 5,
        name: "Radia Perlman",
        role: "Mother of the Internet",
        bio: "An American computer programmer and network engineer. She is most famous for her invention of the Spanning Tree Protocol (STP), which is fundamental to the operation of network bridges.",
        quote: "The world would be a better place if more engineers, like me, hated technology. The stuff I design, if I'm successful, nobody will ever notice.",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Radia_Perlman.jpg"
    },
    {
        id: 6,
        name: "Hedy Lamarr",
        role: "Inventor of Frequency Hopping",
        bio: "An actress and inventor who pioneered the technology that would one day form the basis for today's WiFi, GPS, and Bluetooth communication systems.",
        quote: "Films have a certain place in a certain time period. Technology is forever.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg/440px-Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg"
    },
    {
        id: 7,
        name: "Carol Shaw",
        role: "First Female Game Designer",
        bio: "One of the first female game designers and programmers in the video game industry. She is best known for creating River Raid at Activision.",
        quote: "I just wanted to do what I liked to do, which was programming.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Carol_Shaw_2017_GDC.jpg/440px-Carol_Shaw_2017_GDC.jpg"
    },
    {
        id: 8,
        name: "Annie Easley",
        role: "NASA Rocket Scientist",
        bio: "A computer scientist, mathematician, and rocket scientist. She was a leading member of the team which developed software for the Centaur rocket stage.",
        quote: "You're never too old, and if you want something, you can find a way to make it happen.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Annie_Easley.jpg/440px-Annie_Easley.jpg"
    },
    {
        id: 9,
        name: "Reshma Saujani",
        role: "Founder, Girls Who Code",
        bio: "Author and activist who founded Girls Who Code to close the gender gap in technology.",
        quote: "Brave, not perfect.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Reshma_Saujani_2018.jpg/440px-Reshma_Saujani_2018.jpg"
    },
    {
        id: 10,
        name: "Fei-Fei Li",
        role: "Godmother of AI",
        bio: "Professor of Computer Science at Stanford University. She is known for establishing ImageNet, the dataset that enabled the rapid advances in computer vision and deep learning.",
        quote: "If we want AI to correspond with our values, we have to curate the data that teaches it.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Fei-Fei_Li_2024_%28cropped%29.jpg"
    },
    {
        id: 11,
        name: "Gladys West",
        role: "Mathematician & GPS Pioneer",
        bio: "Her work on the mathematical modeling of the shape of the Earth was instrumental in the development of the Global Positioning System (GPS).",
        quote: "I always did things to be the best I could be.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Gladys_West_%28cropped%29.jpg"
    },
    {
        id: 12,
        name: "Karen Spärck Jones",
        role: "Pioneer of Information Retrieval",
        bio: "A British computer scientist responsible for the concept of inverse document frequency (IDF), a technology that underlies most modern search engines.",
        quote: "Computing is too important to be left to men.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Karen_Sparck_Jones.jpg/440px-Karen_Sparck_Jones.jpg"
    },
    {
        id: 13,
        name: "Sister Mary Kenneth Keller",
        role: "First PhD in CS (USA)",
        bio: "The first woman to earn a PhD in computer science in the United States and a developer of the BASIC programming language.",
        quote: "We're having an information explosion, and it's certainly obvious that information is of no use unless it's available.",
        image: "https://upload.wikimedia.org/wikipedia/en/e/e0/Mary_Kenneth_Keller.jpg"
    },
    {
        id: 14,
        name: "Sophie Wilson",
        role: "Architect of ARM",
        bio: "Designed the Acorn Micro-Computer and the instruction set of the ARM processor, which is used in most of the world's smartphones today.",
        quote: "We just designed the processor we wanted to use.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Sophie_Wilson_2012.jpg/440px-Sophie_Wilson_2012.jpg"
    }
];

export const projects = [
    {
        id: 1,
        title: "Telescope",
        author: "Seneca College (Led by female maintainers)",
        description: "An open source web server that aggregates blog posts by the students and faculty of Seneca College's School of Software Design and Data Science.",
        tech: ["Javascript", "Gatsby", "Microservices"],
        link: "https://github.com/Seneca-CDOT/telescope"
    },
    {
        id: 2,
        title: "Use The Keyboard",
        author: "Tania Rascia",
        description: "A collection of keyboard shortcuts for Mac apps, Windows programs, and CLI tools.",
        tech: ["React", "JSON", "Open Source"],
        link: "https://usethekeyboard.com/"
    },
    {
        id: 3,
        title: "GirlScript App",
        author: "GirlScript Foundation",
        description: "Helping beginners to get started with open source development. A massive community-led project.",
        tech: ["Android", "Java", "Firebase"],
        link: "https://github.com/smaranjitghose/GirlScriptApp"
    },
    {
        id: 4,
        title: "AnimeGANv2",
        author: "Asya K.",
        description: "A fun AI project that turns photos into anime style images using Generative Adversarial Networks.",
        tech: ["Python", "PyTorch", "GAN"],
        link: "https://github.com/TachibanaYoshino/AnimeGANv2"
    },
    {
        id: 5,
        title: "Self-Defined",
        author: "Tatiana Mac",
        description: "A modern dictionary about us. We define our words, but they don't define us.",
        tech: ["11ty", "Netlify", "Inclusive Design"],
        link: "https://selfdefined.app/"
    },
    {
        id: 6,
        title: "PyLadies Website",
        author: "PyLadies Community",
        description: "The official website for PyLadies, an international mentorship group for women in Python.",
        tech: ["Python", "Django", "Open Source"],
        link: "https://github.com/pyladies/pyladies-kit"
    },
    {
        id: 7,
        title: "Women Who Code Mobile",
        author: "Women Who Code",
        description: "The official mobile application for the Women Who Code community.",
        tech: ["React Native", "Redux", "Mobile"],
        link: "https://github.com/WomenWhoCode/womenwhocode-mobile"
    },
    {
        id: 8,
        title: "Virtual Event Platform",
        author: "AnitaB.org Open Source",
        description: "Platform to host virtual events for the community.",
        tech: ["Python", "Flask", "React"],
        link: "https://github.com/anitab-org/contest-platform"
    },
    {
        id: 9,
        title: "Mentorship System",
        author: "Systers",
        description: "A mentorship workflow management system for the Systers community (AnitaB.org).",
        tech: ["Python", "Django", "PostgreSQL"],
        link: "https://github.com/systers/mentorship-system"
    }
];
