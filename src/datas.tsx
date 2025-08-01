type Project = {
    name: string,
    description: string,
    features?: string[],
    technologyUsed: string[],
    screenshotPaths: string[],
    githubRepo?: string,
    livePreviewUrl?: string
}



export const projects: Project[] = [

    {
        name: "Shuttr",
        description: "A browser-based photobooth app for fun and quick snapshots. Take selfies with custom filters, then download or share instantly — no data is saved.",
        features: [
            "Works on both desktop and mobile browsers",
            "Live camera preview with mirror mode",
            "Apply fun filters before capturing (e.g., grayscale, sepia, brightness) //WIP",
            "Capture photos directly from the browser",
            "Download images instantly after capture",
            "Fully client-side — no data stored or uploaded",
            "Responsive design with intuitive UI",
            "Minimalist and clean interface using shadcn/ui"
        ],
        technologyUsed: ["React", "Tailwind CSS", "ShadCN", "html2canvas", "JavaScript"],
        screenshotPaths: Array.from({ length: 4 }).map((_, index) => {
            return `/project_screenshots/shuttr/_${index+1}.png`;
        }),
        livePreviewUrl: "https://shuttr-pi.vercel.app",
        githubRepo: "https://github.com/notZairus/shuttr"
    },  


    {
        name: "Pomolog",
        description: "A minimalist Pomodoro tracker with logging, history, and productivity insights. Designed for focused study sessions with subject-based tracking.",
        features: [
            "4 Pomodoro rounds (25 mins) with short and long break logic",
            "Auto-switch between work, short break, and long break",
            "Create custom subjects to group tasks",
            "Log completed tasks under each Pomodoro round with subject tagging",
            "View Pomodoro session history",
            "Filter history by date or subject",
            "Print history records for productivity tracking",
            "Daily summary and productivity insights",
            "Dark/light mode toggle",
            "Responsive and distraction-free interface using shadcn/ui"
        ],
        technologyUsed: ["React", "Tailwind CSS", "Laravel", "Inertia.js", "PHP", "MySQL", "ShadCN", ],
        screenshotPaths: Array.from({ length: 8 }).map((_, index) => {
            return `/project_screenshots/pomolog/_${index+1}.png`;
        }),
        githubRepo: "https://github.com/notZairus/PomoLog"
    },


    {
        name: "Quizzital",
        description: "Quizzital is an AI-powered quiz management system with separate panels for professors and students. It allows teachers to manage classrooms, generate quizzes using AI, and track student performance. Students can join classrooms, take quizzes, and view their scores.",
        features: [
            // Professor Panel
            "Create classrooms with unique codes",
            "Accept or remove students from classrooms",
            "Create quizzes linked to classrooms",
            "View individual student quiz results",
            "Analyze student performance with basic analytics",
            "Send Gmail notifications to students about new quizzes",
            "Use AI (Gemini) to generate quiz questions from lesson text",

            // Student Panel
            "Join classrooms using the classroom's unique code",
            "Take quizzes assigned by professors",
            "View scores of taken quizzes",

            // Common
            "Edit and update user profile"
        ],
        technologyUsed: ['React', 'Python', 'Flask', "SQLAlchemy",'TailwindCSS', 'MySQL', 'Firebase', 'Gemini API', 'Gmail SMTP'],
        screenshotPaths: Array.from({ length: 8 }).map((_, index) => {
            return `/project_screenshots/quizzital/_${index+1}.png`;
        }),
        livePreviewUrl: "https://quizzital.vercel.app",
        githubRepo: "https://github.com/notZairus/Quizzital_V2"
    },


    {
        name: "FoodIfAi",
        description:
            "An AI-powered web app that analyzes food and generates recipes using image recognition and ingredient input. Designed for health-conscious users and food explorers.",
        features: [
            "Take a picture of food using your camera for instant analysis",
            "Generate creative and healthy recipes from input ingredients",
            "View estimated calories and nutrition facts",
            "Suggest healthier alternatives for unhealthy ingredients",
            "Recognizes common Filipino dishes and ingredients",
            "Save favorite recipes locally (via browser)",
            "Dark mode toggle for user comfort",
            "Fully responsive and mobile-friendly UI",
        ],
        technologyUsed: [
            "React",
            "TailwindCSS",
            "Typescript",
            "Gemini API",
            "Web APIs (Camera, Video)",
        ],
        screenshotPaths: Array.from({ length: 8 }).map((_) => {
            // return `/project_screenshots/food_if_ai/_${index+1}.png`;
            return "https://imgs.search.brave.com/eJAg4n20nh_hk4T2ST3fOHd1gykrvsnmke9QIzaRTbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bWFndHJvbC5jb20v/ZnJhbmNlL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9wbGFjZWhvbGRl/ci0xNi05LXJhdGlv/LTMwMHgxNjkucG5n";
        }),
        livePreviewUrl: "https://food-if-ai.vercel.app",
        githubRepo: "https://github.com/notZairus/FoodIfAi"
    },
    
    {
        name: "Adam's Ice Cream POS",
        description: "A point-of-sale and inventory system built specifically for Adam's Ice Cream, a local sorbetes business. It helps track sales, monitor ingredient stock, and manage daily income and expenses—all tailored for a small food stall setup.",
        features: [
            "Track and Manage ice cream orders",
            "Order status updates",
            "Notify clients about their orders via email",
            "Generate daily sales and income reports",
            "Manage ingredient inventory with stock-in/stock-out records",
            "Record EXPENSE and INCOME transactions with categories",
            "User authentication for owner and trusted staff",
            "Edit and update product and pricing details",
            "Responsive UI for phones and tablets",
            "Simple dashboard with summarized business insights"
        ],
        technologyUsed: ['Html', 'PHP', 'CSS', 'Javascript', 'MySQL', 'Gmail SMTP'],
        screenshotPaths: Array.from({ length: 8 }).map((_, index) => {
            return `/project_screenshots/aic_pos/_${index+1}.png`;
        }),
        githubRepo: "sad"
    },
    

]



// 1. ice cream pos 
// 2. quizzital (quiz taking app with ai quiz generation)
// 3. FoodIfAi (ai food analysis and recipe generator)
// 4. SnapStrip (simple photoshoot web app)
// 5. pomolog (pomodoro with logging and history feature)
// 6. baranggay request document system