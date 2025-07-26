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
        name: "Quizzital",
        description: "Quizzital is an AI-powered quiz management system with separate panels for professors and students. It allows teachers to manage classrooms, generate quizzes using Gemini AI, and track student performance. Students can join classrooms, take quizzes, and view their scores.",
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
        technologyUsed: ['React', 'Python', 'Flask', 'Tailwind', 'MySQL', 'Firebase', 'Gemini API', 'Gmail SMTP'],
        screenshotPaths: Array.from({ length: 8 }).map((_, index) => {
            return `/project_screenshots/quizzital/_${index+1}.png`;
        }),
        livePreviewUrl: "https://quizzital.vercel.app",
        githubRepo: "https://github.com/notZairus/Quizzital_V2"
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