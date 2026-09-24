/* =========================================================
   PROJECT DETAIL DATA
   ---------------------------------------------------------
   One entry per existing "My Work & Certificate" card.
   The `id` here MUST match the `slug` used in js/projects.js
   on the main page, because that is what gets passed in the
   URL: project-details.html?project=<id>
   ========================================================= */

const PROJECT_DETAILS = {

    /* ---------------------------------------------------
       1. SIGN LANGUAGE INTERPRETING — photo-video-gallery
       --------------------------------------------------- */
    "sign-language-interpreting": {
        type: "photo-video-gallery",
        title: "Sign Language Interpreting",
        tagline: "Making Church Events Inclusive",
        tags: ["Sign Language", "Accessibility", "Community"],
        icon: "assets/icons/sign.png",
        heroImage: "assets/images/work/sign-language-interpreting.jpg",
        description:
            "A sign language support resource designed to help Deaf attendees fully participate in church events. The project provides key event information, signs for essential words and phrases, and visual guides to support clear communication.",
        overview: {
            description:
                "A sign language support resource designed to help Deaf attendees fully participate in church events by providing clear information, visual guides, and essential signs for key words and phrases.",
            technologies: ["ASL", "NSL", "Pockect Sign Language", "CRS"],
            featuresLabel: "Key Features",
            features: [
                "Event information",
                "Sign language guides",
                "Key phrase library",
                "Visual learning aids",
                "Responsive design"
            ]
        },
        media: [
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic2.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic3.jpg", alt: "Signing a key phrase to the congregation" },
            { type: "video", src: "assets/work-details/sign-language-interpreting/videos/video-1.mp4", poster: "assets/work-details/sign-language-interpreting/photos/photo-3.jpg", alt: "Clip from an interpreting session" },
            { type: "image", src: "assets/pag2/signlanguage/pic4.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic5.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic6.jpg", alt: "Visual guide handed out at the event" },
            { type: "video", src: "assets/work-details/sign-language-interpreting/videos/video-1.mp4", poster: "assets/work-details/sign-language-interpreting/photos/photo-3.jpg", alt: "Clip from an interpreting session" },
            { type: "image", src: "assets/pag2/signlanguage/pic7.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic8.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic10.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic11.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic12.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic13.jpg", alt: "Visual guide handed out at the event" },
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },
            { type: "image", src: "assets/pag2/signlanguage/pic1.jpg", alt: "Interpreting during a church service" },

            { type: "image", src: "assets/pag2/signlanguage/pic9.jpg", alt: "Working with attendees after the service" }
        ]
    },

    /* ---------------------------------------------------
       2. MYSELF AND MY PUPILS — photo-video-gallery
       --------------------------------------------------- */
    "myself-and-my-pupils": {
        type: "photo-video-gallery",
        title: "Myself and My Pupils",
        tagline: "Mentorship | Teaching | Growth",
        tags: ["Teaching", "Mentorship", "Special Education"],
        icon: "assets/icons/spe.png",
        heroImage: "assets/images/work/myself-and-my-pupils.jpg",
        description:
            "A collection of moments, experiences, and achievements from my journey as a teacher and mentor. This project showcases my dedication to teaching, supporting, and nurturing my pupils to reach their full potential.",
        overview: {
            description:
                "This project highlights my role as a teacher and mentor, showcasing my interactions with pupils, teaching sessions, and the positive impact of guidance and support in their learning journey.",
            technologies: ["Teaching Methods", "Communication Skills", "Special Education", "ASL", "Classroom Management", "Digital Tools"],
            featuresLabel: "Key Highlights",
            features: ["Student Growth", "Interactive Learning", "Support & Encouragement", "Positive Feedback"]
        },
        secondaryAction: { label: "View More", href: "#" },
        media: [
            { type: "image", src: "assets/pag2/my self photo/sch14.jpg", alt: "taking a nap" },
            { type: "image", src: "assets/pag2/my self photo/sch1.jpg", alt: "a self-shot after class" },
            { type: "image", src: "assets/pag2/my self photo/sch2.jpg", alt: "Practical work" },
            { type: "image", src: "assets/pag2/my self photo/sch3.jpg", alt: "Sport Time " },
            { type: "image", src: "assets/pag2/my self photo/sch4.jpg", alt: "Practical Work" },
            { type: "image", src: "assets/pag2/my self photo/sch1.jpg", alt: "Pupils taking their nap" },
            { type: "image", src: "assets/pag2/my self photo/sch5.jpg", alt: "Its sport time!" },
            { type: "video", src: "assets/work-details/sign-language-interpreting/videos/video-1.mp4", poster: "assets/work-details/sign-language-interpreting/photos/photo-3.jpg", alt: "Clip from an interpreting session" },
            { type: "image", src: "assets/pag2/my self photo/sch3.jpg", alt: "At school during summer class" },
            { type: "image", src: "assets/pag2/my self photo/sch7.jpg", alt: "At School after closing" },
            { type: "image", src: "assets/pag2/my self photo/sch8.jpg", alt: "Award ceremony" },
            { type: "image", src: "assets/pag2/my self photo/sch6.jpg", alt: "Practical activity" },
            { type: "image", src: "assets/pag2/my self photo/sch9.jpg", alt: "Graduation ceremony" },
            { type: "image", src: "assets/pag2/my self photo/sch10.jpg", alt: "Cultural event" },
            { type: "video", src: "assets/work-details/sign-language-interpreting/videos/video-1.mp4", poster: "assets/work-details/sign-language-interpreting/photos/photo-3.jpg", alt: "Clip from an interpreting session" },
            { type: "image", src: "assets/pag2/my self photo/sch11.jpg", alt: "Instructional aids" },
            { type: "image", src: "assets/pag2/my self photo/sch13.jpg", alt: "Recess sessionwith pupils" },
            { type: "image", src: "assets/pag2/my self photo/sch12.jpg", alt: "Graduation ceremony" },
            { type: "image", src: "assets/pag2/my self photo/sch15.jpg", alt: "Group photo after closing " },
            { type: "image", src: "assets/pag2/my self photo/sch16.jpg", alt: "leisure time with my pupils" },
            { type: "image", src: "assets/pag2/my self photo/sch17.jpg", alt: "working with pupils at their desks" }
        ]
    },

    /* ---------------------------------------------------
       3. MY CONTENT WRITE UP — content-grid
       --------------------------------------------------- */
    "content-write-up": {
        type: "content-grid",
        title: "My Content Writeup",
        tagline: "Ideas | Stories | Impact",
        tags: ["Content Writing", "Storytelling"],
        icon: "assets/icons/content.png",
        heroImage: "assets/images/work/content-write-up.jpg",
        description:
            "A collection of my written content, including articles, success stories, and insightful write-ups. This project showcases my ability to communicate clearly, share knowledge, and create valuable content for learners and the wider audience.",
        overview: {
            description:
                "This project showcases my written content, interviews stories, articles, and educational resources designed to inform, inspire, and support audience on their journey.",
            technologies: ["Content Writing", "Research & Analysis", "Digital Tools", "Editing & Proofreading"],
            featuresLabel: "Key Highlights",
            features: ["Clear & Simple Language", "Educational Focus", "Well-Structured Content", "Positive Impact"]
        },
        secondaryAction: { label: "Open in New Tab", href: "#" },
        items: [
            {
                title: "AI-Powered Education Analytics",
                description: "How AI analytics is changing teaching, learning and school decision-making.",
                image: "assets/pag2/cont screenshot/photo1.jpg",
                href: "https://instincthub.com/blog/revolutionizing-education-with-ai-powered-analytics-the-role-of-instincthub"
            },
            {
                title: "Collaboration & Teamwork at Work",
                description: "Why teamwork skills matter more than ever in today’s career landscape.",
                image: "assets/pag2/cont screenshot/photo2.jpg",
                href: "https://instincthub.com/blog/the-importance-of-collaboration-and-teamwork-in-current-career-landscape"
            },
            {
                title: "Virtual Reality vs Actual Reality",
                description: "A thoughtful look at which reality we should prefer — and why it matters.",
                image: "assets/pag2/cont screenshot/photo3.jpg",
                href: "https://instincthub.com/blog/which-reality-would-you-prefer-virtual-reality-or-actual-reality"
            },
            {
                title: "Digital Skills & Remote Careers",
                description: "Digital skill careers you can start and grow through remote work.",
                image: "assets/pag2/cont screenshot/photo4.jpg",
                href: "https://instincthub.com/blog/careers-in-digital-skills-you-can-dive-into-through-remote-work"
            },
            {
                title: "Women Who Shape Tech",
                description: "Success stories of prominent women in tech and their lasting impact.",
                image: "assets/pag2/cont screenshot/photo5.jpg",
                href: "https://instincthub.com/blog/investigating-the-success-stories-of-prominent-women-in-tech-industries-and-their-impact-on-the-tech"
            },
            {
                title: "Jumia & E-Commerce Growth",
                description: "How Jumia helps entrepreneurs build and scale online businesses.",
                image: "assets/pag2/cont screenshot/photo6.jpg",
                href: "https://instincthub.com/blog/e-commerce-evolution-how-jumia-empowers-entrepreneurs-to-succeed-online"
            },
            {
                title: "Ethics & Bias in AI",
                description: "Exploring bias and inequity in machine learning — and how to tackle them.",
                image: "assets/pag2/cont screenshot/photo7.jpg",
                href: "https://instincthub.com/blog/exploring-ethical-considerations-in-ai-tackling-bias-and-inequity-in-machine-learning-algorithms"
            },
            {
                title: "Data Analytics for Business",
                description: "Using data analytics to make smarter decisions and stay competitive.",
                image: "assets/pag2/cont screenshot/photo8.jpg",
                href: "https://instincthub.com/blog/leveraging-data-analytics-for-informed-business-decision-making-and-competitive-edge"
            },
            {
                title: "Overcoming “Tech Isn’t for Me”",
                description: "Breaking the fear of tech and learning to thrive in the digital world.",
                image: "assets/pag2/cont screenshot/photo9.jpg",
                href: "https://instincthub.com/blog/overcoming-the-tech-isnt-for-me-mindset-embracing-the-digital-world"
            },
            {
                title: "Biometric Authentication Today",
                description: "Finding the right balance with biometrics in our digital lives.",
                image: "assets/pag2/cont screenshot/photo10.jpg",
                href: "https://instincthub.com/blog/striking-a-balance-biometric-authentication-in-the-digital-era"
            },
            {
                title: "The Rise of 5G Technology",
                description: "How 5G is transforming connectivity, speed and everyday communication.",
                image: "assets/pag2/cont screenshot/photo11.jpg",
                href: "https://instincthub.com/blog/unveiling-the-reign-of-5g-technology-transforming-connectivity-and-communication"
            },
            {
                title: "Cyber Threats & Defense",
                description: "Emerging cyber threats and practical defense strategies for everyone.",
                image: "assets/pag2/cont screenshot/photo12.jpg",
                href: "https://instincthub.com/blog/rethink-emerging-trends-in-cyber-threats-and-defense-strategies-for-organizations-and-individuals"
            },
            {
                title: "Understanding Cyber Security",
                description: "A clear guide to cyber security and the malicious actors behind attacks.",
                image: "assets/pag2/cont screenshot/photo13.jpg",
                href: "https://instincthub.com/blog/understanding-cyber-security-and-malicious-actors"
            },
            {
                title: "Maximizing Remote Work",
                description: "Practical ways to use technology and stay productive while working remotely.",
                image: "assets/pag2/cont screenshot/photo14.jpg",
                href: "https://instincthub.com/blog/maximizing-remote-work-efficiency-leveraging-technology-for-success"
            },
            {
                title: "Embracing Failure in Tech",
                description: "Why failure is a necessary stepping stone to success in the tech industry.",
                image: "assets/pag2/cont screenshot/photo15.jpg",
                href: "https://instincthub.com/blog/embracing-failure-the-crucial-stepping-stone-to-success-in-the-tech-industry"
            },
            {
                title: "Navigating Career Transitions",
                description: "How to align your strengths and motivation when moving into tech roles.",
                image: "assets/pag2/cont screenshot/photo16.jpg",
                href: "https://instincthub.com/blog/navigating-career-transitions-aligning-strengths-with-motivation-in-the-tech-industry"
            },
            {
                title: "From Zero to Data Analyst",
                description: "An inspiring journey of switching careers and becoming a data analyst.",
                image: "assets/pag2/cont screenshot/photo17.jpg",
                href: "https://instincthub.com/blog/switching-careers-to-tech-the-inspiring-journey-of-a-data-analyst-from-scratch"
            },
            {
                title: "The Power of Upskilling",
                description: "How continuous learning helps you stay valuable and irreplaceable in tech.",
                image: "assets/pag2/cont screenshot/photo19.jpg",
                href: "https://instincthub.com/blog/the-power-of-up-skilling-becoming-irreplaceable-in-the-tech-industry"
            },
            {
                title: "Smartphones & Modern Work",
                description: "The transformative role of smartphones in today’s work culture.",
                image: "assets/pag2/cont screenshot/photo20.jpg",
                href: "https://instincthub.com/blog/the-transformative-role-of-smartphones-in-modern-work-culture"
            },
            {
                title: "Conquering Career Fears",
                description: "How to thrive in tech even when fear and adversity try to hold you back.",
                image: "assets/pag2/cont screenshot/photo21.jpg",
                href: "https://instincthub.com/blog/conquering-career-fears-thriving-in-the-tech-industry-despite-adversity"
            }
        ]


    },

    /* ---------------------------------------------------
       4. LESSON NOTE AND SLIDES — resources
       --------------------------------------------------- */
    "lesson-note-and-slides": {
        type: "resources",
        title: "Lesson Note and Slides",
        tagline: "Structured. Simple and Effective.",
        tags: [],
        icon: "assets/icons/folder.svg",
        heroImage: "assets/images/work/lesson-note-and-slides.jpg",
        description:
            "A collection of well-structured lesson notes and slides designed to support effective learning. The resources are organized, easy to navigate, and built to help students learn at their own pace.",
        overview: {
            description:
                "A collection of structured lesson notes and slides designed to support effective learning. The resources are organized, easy to navigate, and built to help students learn at their own pace.",
            technologies: ["ClaudeAI", "MSWord", "Canva", "ChatGPT", "PowerPoint",],
            featuresLabel: "Key Features",
            features: ["Structured lesson notes", "Slide presentations", "Easy navigation", "Downloadable resources", "Responsive design"]
        },
        resourceGroups: [
            {
                title: "Lesson Notes",
                description: "Download the complete lesson notes below.",
                items: [
                    {
                        title: "Basic Science Week 2 – Homework Practice Sheet",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Basic_Science_Week2_Homework_Practice_Sheet.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Basic Science Week 2 – Pupils Lesson Note",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Basic_Science_Week2_Pupils_Lesson_Note.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Basic Science Week 2 – Teachers Lesson Note",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Basic_Science_Week2_Teachers_Lesson_Note.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Class Activity Worksheet",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx", fileSrc: "assets/docs/Class_Activity_Worksheet.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "English Week 2 – Homework Practice Sheet",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/English_Week2_Homework_Practice_Sheet.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "English Week 2 – Teacher Lesson Note",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/English_Week2_Teacher_Lesson_Note.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Gentle Giant Classwork",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Gentle_Giant_Classwork_CORRECTED - Copy.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Homework Practice Sheet",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Homework_Practice_Sheet.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Pupils Note and Flashcards by Step",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Pupils_Note_and_Flashcards_by_Step.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Reading Vocabulary – Nouns & Adjectives",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Reading_Vocabulary_Nouns_Adjectives_LessonNote_REVISED (2).docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Real Curious Cat Assignment",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Real_Curious_Cat_Assignment.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Living and Non-Living Things Lesson",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/realnote_Living_and_Non-Living_Things_Lesson.docx",
                        buttonLabel: "Download DOCX"
                    },
                    {
                        title: "Teachers Lesson Note (Updated)",
                        description: "Download the complete lesson notes in DOCX format.",
                        fileType: "docx",
                        fileSrc: "assets/docs/Teachers_Lesson_Note_Updated.docx",
                        buttonLabel: "Download DOCX"
                    }
                ]
            },
            {
                title: "Slides",
                description: "Get the full presentation slides below.",
                items: [
                    {
                        title: "Cheerful Verb Train Station",
                        description: "Get the full presentation slides in PDF format.",
                        fileType: "pdf",
                        fileSrc: "assets/docs/slides/Cheerful Verb Train Station.pdf",
                        buttonLabel: "Download Slides"
                    },
                    {
                        title: "Gentle Giant Reading (Teachers copy)",
                        description: "Get the full presentation slides in PDF format.",
                        fileType: "pdf",
                        fileSrc: "assets/docs/slides/Gentle_Giant_Reading_Teachers_copy.pdf",
                        buttonLabel: "Download Slides"
                    },
                    {
                        title: "Grade 3 Math Pupils’ Class Note",
                        description: "Get the full presentation slides in PDF format.",
                        fileType: "pdf", fileSrc: "assets/docs/slides/Grade 3 Math Pupils’ Class Note real.pdf",
                        buttonLabel: "Download Slides"
                    },
                    {
                        title: "Living and Non-Living Things (Basic Science Primary 3)",
                        description: "Get the full presentation slides in PDF format.",
                        fileType: "pdf",
                        fileSrc: "assets/docs/slides/Real_pptx_Living and Non-Living Things Basic Science for Primary 3_2026.pdf",
                        buttonLabel: "Download Slides"
                    },
                    {
                        title: "What Plants Need to Grow",
                        description: "Get the full presentation slides in PDF format.",
                        fileType: "pdf",
                        fileSrc: "assets/docs/slides/What Plants Need to Grow.pdf",
                        buttonLabel: "Download Slides"
                    }
                ]
            }
        ]
    },

    /* ---------------------------------------------------
       5. PROJECT PORTFOLIO — uiux-gallery (Web Development)
       --------------------------------------------------- */
    "project-portfolio": {
        type: "uiux-gallery",
        title: "Project Portfolio",
        tagline: "Web Development",
        tags: ["HTML5", "CSS3", "Web Development"],
        icon: "assets/icons/code.png",
        heroImage: "assets/images/work/project-portfolio.jpg",
        description: "This project demonstrates a responsive and modern web design built with HTML5 and CSS3...",
        overview: {
            description: "A modern, responsive website built with HTML5 and CSS3...",
            technologies: ["HTML5", "CSS3", "ChatGPT , Groks, ClaudeAI", "React and Vite", "Responsive Design"],
            featuresLabel: "Key Features",
            features: ["Responsive layout", "Clean and semantic code", "Cross-browser compatible", "Mobile friendly", "Modern UI/UX design"]
        },

        /* ---- Gallery cards (rows & columns) ---- */
        galleries: [
            {
                title: "Solstice Event Check-in Kiosk (full web app)",
                codeUrl: "https://github.com/herthey22/solstice-checkin-frontend",
                liveDemo: "https://solstice-checkin-frontend-theta.vercel.app",
                images: [
                    { src: "assets/pag2/web photo/uiuxfulltech1.png", alt: "Scanning Screen", label: "Scanning Screen" },
                    { src: "assets/pag2/web photo/uiuxfulltech2.jpg", alt: "Loading Screen", label: "Loading Screen" },
                    { src: "assets/pag2/web photo/uiuxfulltech3.jpg", alt: "Failed Screen", label: "Failed Screen" },
                    { src: "assets/pag2/web photo/uiuxfulltech4.jpg", alt: "Success Screen", label: "Success Screen" },
                    { src: "assets/pag2/web photo/uiuxfulltech5.png", alt: "Logo", label: "Logo" }
                ]
            },
            {
                title: "My portfolio-recreate (personal portfolio website)",
                codeUrl: "https://github.com/herthey22/portfolio",
                liveDemo: "https://portfolio-eta-rouge-11.vercel.app",
                images: [
                    { src: "assets/pag2/web photo/proj2z.png", alt: "bg2", bg2: "bg2" },
                    { src: "assets/pag2/web photo/proj2y.png", alt: "bg1", bg1: "bg1" },
                    { src: "assets/pag2/web photo/proj2p.png", alt: "myself", myself: "myself" },
                    { src: "assets/pag2/web photo/proj2d.png", alt: "pages", pages: "pages" },
                    { src: "assets/pag2/web photo/proj2m.png", alt: "main page", pages: "main page" },
                    { src: "assets/pag2/web photo/proj2a.png", alt: "pages", label: "pages" },
                    { src: "assets/pag2/web photo/proj2b.png", alt: "pages", label: "pages" },
                    { src: "assets/pag2/web photo/proj2c.png", alt: "pages", label: "pages" }
                ]
            },
            {
                title: "Reflect Logistics Retail Website (react + tailwindcss)",
                codeUrl: "https://github.com/herthey22/reflex-app/tree/main/src",
                liveDemo: "https://reflex-app-three.vercel.app",
                images: [
                    { src: "assets/pag2/web photo/reactreflectcar.png", alt: "van", label: "Van" },
                    { src: "assets/pag2/web photo/reactreflectlogo.png", alt: "Logo", label: "Logo" },
                    { src: "assets/pag2/web photo/reactreflectuiux.png", alt: "UI/UX", label: "UI/UX" },
                    { src: "assets/pag2/web photo/reactreflectmock.png", alt: "Mock", label: "Mock" }
                ]
            }
        ],

        /* ---- Video cards (rows & columns) ---- */
        videos: [
            {
                title: "Breaking Silence — AI Support Capstone project Overview",
                src: "assets/pag2/web photo/Breaking Silence — AI-Powered Educational Support for Deaf Learners — Mozilla Firefox 2026-09-17 03-31-53.mp4",
                poster: "assets/pag2/web photo/Screenshot (5).png",
                liveDemo: "https://breaking-silence-ai-safari-educatio.vercel.app"
            },
            {
                title: "Breaking Silence Portal 1 AI Support Capstone project",
                src: "assets/pag2/web photo/Breaking Silence Portal — Mozilla Firefox 2026-09-17 03-14-36.mp4",
                poster: "assets/pag2/web photo/Screenshot (4).png",
                liveDemo: "https://breaking-silence-ai-safari-pride-le.vercel.app"
            },
            {
                title: "Breaking Silence Portal 2 AI Support Capstone project",
                src: "assets/pag2/web photo/Breaking Silence Portal — Mozilla Firefox 2026-09-17 03-29-50.mp4",
                poster: "assets/pag2/web photo/Screenshot (6).png",
                liveDemo: "https://breaking-silence-portal.vercel.app"
            },
            {
                title: "Form Page Walkthrough",
                src: "assets/pag2/web photo/formpage video.mp4",
                poster: "assets/pag2/web photo/Onyx Foods- Sign in_ Sign up - Google Chrome 29_08_2025 14_54_45.png",
                liveDemo: "https://form-tawny-sigma.vercel.app"
            }
        ]
    },



    /* ---------------------------------------------------
       6. EDUGAME — game
       --------------------------------------------------- */
    "edugame": {
        type: "game",
        title: "Edugame",
        tagline: "Learning through play.",
        tags: ["HTML5", "CSS3", "JavaScript"],
        icon: "assets/icons/game.svg",
        heroImage: "assets/images/work/edugame.jpg",
        description: "This is an interactive and educational game designed to make learning fun and engaging...",
        overview: {
            description: "An interactive and educational game built with HTML5, CSS3, and JavaScript...",
            technologies: ["HTML5", "CSS3", "JavaScript", "ClaudeAI", "Vercel"],
            featuresLabel: "Key Features",
            features: ["Interactive gameplay", "Educational content", "Responsive design", "User-friendly interface"]
        },

        /* ---- NEW: one object per game flyer ---- */
        games: [
            {
                title: "Grammar Train",
                subtitle: "Chug along and master grammar!",
                flyer: "assets/pag2/game image folder/GrammarTrainGame.png",
                playUrl: "https://grammartrainjourney.vercel.app/",                          // ← put real link when ready
                buttonLabel: "Start Game",
                buttonColor: "linear-gradient(95deg, #facc15, #f97316)"   // sunny orange
            },
            {
                title: "Living Things Needs",
                subtitle: "What do living things need?",
                flyer: "assets/pag2/game image folder/LivingThingNeeds Game.png",
                playUrl: "https://livingthingsneedsgame-1.vercel.app/",
                buttonLabel: "Play Game",
                buttonColor: "linear-gradient(95deg, #34d399, #059669)"   // fresh green
            },
            {
                title: "Living Things Sorting",
                subtitle: "Sort them into the right homes!",
                flyer: "assets/pag2/game image folder/LivingThingSortingGame.png",
                playUrl: "https://livingsortinggame.vercel.app/",
                buttonLabel: "Start Game",
                buttonColor: "linear-gradient(95deg, #60a5fa, #2563eb)"   // sky blue
            },
            {
                title: "Place Value Quest",
                subtitle: "Adventure through numbers!",
                flyer: "assets/pag2/game image folder/PlaceValueQuestGame.png",
                playUrl: "https://placevaluequest.vercel.app/",
                buttonLabel: "Play Game",
                buttonColor: "linear-gradient(95deg, #c084fc, #7c3aed)"   // purple
            },
            {
                title: "Plant Detectives",
                subtitle: "Solve the plant mysteries!",
                flyer: "assets/pag2/game image folder/PlantDectectivesGame.png",
                playUrl: "https://plantdetectivegame.vercel.app/",
                buttonLabel: "Start Game",
                buttonColor: "linear-gradient(95deg, #f472b6, #db2777)"   // pink
            },
            {
                title: "Word Detective",
                subtitle: "Find the hidden words!",
                flyer: "assets/pag2/game image folder/Worddectivegame.png",
                playUrl: "https://worddetectivessentencegame.vercel.app/",
                buttonLabel: "Play Game",
                buttonColor: "linear-gradient(95deg, #22d3ee, #0891b2)"   // cyan
            },

            {
                title: "Explorer's Word Hunt",
                subtitle: "Hunt nouns & adjectives in the real world!",
                flyer: "assets/pag2/game image folder/wordExplorer.jpg",  // ← your flyer image path
                playUrl: "https://explorerswordhuntgamea-1.vercel.app/",
                buttonLabel: "Start Exploring",
                buttonColor: "linear-gradient(95deg, rgba(34, 197, 94, 0.85), rgba(22, 163, 74, 0.9))"
            },
            {
                title: "Alligator Number Swallow",
                subtitle: "Feed the gator the right numbers!",
                flyer: "assets/pag2/game image folder/feeding The gator.jpg",  // ← your flyer image path
                playUrl: "https://alligatornumberswallowgame-1.vercel.app/",
                buttonLabel: "Start Game",
                buttonColor: "linear-gradient(95deg, rgba(34, 211, 238, 0.85), rgba(8, 145, 178, 0.9))"
            }
        ]
    },




    /* ---------------------------------------------------
       7. MY GITHUB — github
       --------------------------------------------------- */
    "my-github": {
        type: "github",
        title: "My GitHub",
        tagline: "Code, contributions, and repositories.",
        tags: ["GitHub", "Portfolio", "Repository"],
        icon: "assets/icons/tools/github.svg",
        heroImage: "assets/images/work/my-github.jpg",
        description:
            "This section showcases my GitHub profile, including my repositories, contributions, and coding activity. It highlights the projects I've worked on and my commitment to continuous learning and growth.",
        overview: {
            description:
                "A showcase of my GitHub profile, highlighting my repositories, contributions, and coding progress. It reflects my journey of building projects, learning new technologies, and collaborating with the developer community.",
            technologies: ["GitHub", "Markdown", "Repository Management"],
            featuresLabel: "Key Highlights",
            features: ["Public repositories", "Contribution graph", "Project documentation", "Open source collaboration", "Continuous learning"]
        },
        githubUrl: "https://github.com/herthey22"
    },

    /* ---------------------------------------------------
       8. CERTIFICATE AND AWARD — certificates
       --------------------------------------------------- */
    "certificate-and-award": {
        type: "certificates",
        title: "Certificate and Award",
        tagline: "My journey, skills and recognition.",
        tags: ["Certification", "Achievement", "Recognition"],
        icon: "assets/icons/certificate.svg",
        heroImage: "assets/images/work/certificate-and-award.jpg",
        description:
            "This section showcases my certificates and awards, highlighting the skills I have gained, the achievements I have earned, and the recognition I have received for my dedication and hard work.",
        certificates: [
            { title: "Certificate of Merit — Best Student in Special Education (SHI)", tag: "Certificate", image: "assets/pag2/certificate/award1.jpg", fileType: "image" },
            { title: "Primary School Testimonial", tag: "Certificate", image: "assets/pag2/certificate/certificate1.jpg", fileType: "image" },
            { title: "WASSCE Certificate (2009)", tag: "Certificate", image: "assets/pag2/certificate/certificate2.jpg", fileType: "image" },
            { title: "WASSCE Certificate (2010)", tag: "Certificate", image: "assets/pag2/certificate/certificate3.jpg", fileType: "image" },
            { title: "Nigeria Certificate in Education (NCE)", tag: "Certificate", image: "assets/pag2/certificate/certificate4.jpg", fileType: "image" },
            { title: "TRCN Certificate of Registration", tag: "Certificate", image: "assets/pag2/certificate/certificate5.jpg", fileType: "image" },
            { title: "Bachelor of Education (B.Ed) — Special Education / CRS", tag: "Certificate", image: "assets/pag2/certificate/certificate6.jpg", fileType: "image" },
            { title: "National Youth Service Corps (NYSC) Certificate", tag: "Certificate", image: "assets/pag2/certificate/certificate7.jpg", fileType: "image" },
            { title: "Certificate of Participation — Strategies for Helping Children with Autism & Learning Disabilities", tag: "Certificate", image: "assets/pag2/certificate/certificate8.jpg", fileType: "image" },
            { title: "Certificate of Completion — Wave Academy Web Design & Employability Skills", tag: "Certificate", image: "assets/pag2/certificate/certificate9.jpg", fileType: "image" },
            { title: "Certificate of Participation — SPE Departmental Debate", tag: "Certificate", image: "assets/pag2/certificate/certificate10.jpg", fileType: "image" },
            { title: "Certificate of Recognition — Committed Worker (Youth, Ushering & Sunday School Coordinator)", tag: "Certificate", image: "assets/pag2/certificate/certificate11.jpg", fileType: "image" },
            { title: "Certificate of Honour — Editor-in-Chief, NASESS", tag: "Award", image: "assets/pag2/certificate/certificate12.jpg", fileType: "image" },
            {
                title: "Certificate of Achievement — AI Safari (Agentic Frameworks, Automation, Prompt Engineering, Ethics & Governance)",
                tag: "Certificate",
                fileSrc: "assets/pag2/certificate/plp.Adenike Adetutu Oyeniyi certificate.pdf",
                fileType: "pdf"
            },
            {
                title: "Certificate of Achievement — Tech Savvy Junior Front-End Web Development (HTML, CSS, JavaScript & VS Code)",
                tag: "Certificate",
                fileSrc: "assets/pag2/certificate/Adenike Adekunle_certificate (1).pdf",
                fileType: "pdf"
            }
        ]
    }
};