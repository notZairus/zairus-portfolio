import { motion } from "motion/react";
// import type { Variants } from "motion/react"
import Dot from "../components/Dot";
import { cn } from "@/lib/utils";


// const InViewVariant: Variants = {
//   'initial': {
//     opacity: 0,
//   },
//   'animate': {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//     }
//   },
// }


export default function Projects() {
    return (
        <div className='text-white py-20 lg:px-20 scrollbar-hidden'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}
            >
                <h1 
                className='text-5xl lg:text-6xl font-black'>
                    My Projects<Dot />
                </h1>
                <p className='border-l-12 border-blue-400 text-xl lg:w-[800px] pl-2 mt-8'>Here are my projects that showcase my ability to build beautiful and functional websites, and reflect the effort I put into improving with every creation.</p>
            </motion.div>

            <section className="grid grid-cols-1 md:grid-cols-2 auto-rows-[100px] md:gap-x-10 gap-y-10 mt-20">
                <div className="col-start-1 row-span-1"></div>
                {
                    ['Quizzital', 'FoodIfAI', 'Adam\'s Ice Cream POS', 'Random', 'Random', 'Random'].map((project, index) => (
                        <div className={cn("bg-white/15 rounded-xl md:row-span-4 row-span-3 overflow-hidden relative w-full", index % 2 === 0 ? "col-start-2" : "col-start-1")}>
                            <motion.img 
                                src="https://imgs.search.brave.com/9XHXpZoWrWDCRXvqC6S26W_suvveaHy-AuGhZP_7nk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXNoLmlvL3N0/YXRpYy9pbWFnZXMv/dHV0b3JpYXNfZGVm/YXVsdF9pbWFnZS5q/cGc" 
                                alt="project-preview" 
                                className="w-full h-full object-cover"
                                whileHover={{
                                    scale: 1.05
                                }}
                            />
                            <motion.div 
                                className="absolute inset-0 w-full bg-gradient-to-t from-black/85 to-transparent opacity-1"
                                whileHover={{
                                    opacity: 1
                                }}
                            >
                                <div className="absolute bottom-4 w-full px-4 py-3">
                                    <p className="text-2xl font-semibold max-w-full break-words">
                                        {project}
                                        {project}
                                    </p>
                                    <p className="mt-2 max-w-full break-words overflow-ellipsis">
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                        {project}
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    ))
                }
            </section>


        </div>
    )
}