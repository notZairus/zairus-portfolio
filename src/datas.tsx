type Project = {
    name: string,
    description: string,
    technologyUsed: string[],
    screenshotPaths: string[],
    githubRepo?: string,
    livePreviewUrl?: string
}



export const projects: Project[] = [
    {
        name: 'Quizzital',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat necessitatibus ullam, minima quod consectetur doloribus, error tempore repellat facilis culpa suscipit, inventore aliquam consequatur corporis libero animi optio incidunt.',
        technologyUsed: ['React', 'Python', 'Flask', 'Tailwind', 'MySQL', 'Firebase', 'Gemini API'],
        screenshotPaths: Array.from({ length: 8 }).map((_, index) => {
            return `/project_screenshots/quizzital/_${index+1}.png`;
        }),
        livePreviewUrl: "https://quizzital.vercel.app",
        githubRepo: "https://github.com/notZairus/Quizzital_V2"
    },
    {
        name: 'Adam\'s Ice Cream POS',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quaerat necessitatibus ullam, minima quod consectetur doloribus, error tempore repellat facilis culpa suscipit, inventore aliquam consequatur corporis libero animi optio incidunt.',
        technologyUsed: ['Html', 'PHP', 'CSS', 'Javascript', 'MySQL'],
        screenshotPaths: Array.from({ length: 8 }).map((_, index) => {
            return `/project_screenshots/aic_pos/_${index+1}.png`;
        }),
        githubRepo: "sad"
    },
    

]