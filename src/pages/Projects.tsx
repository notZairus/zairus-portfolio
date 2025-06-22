import { motion } from "motion/react";
// import type { Variants } from "motion/react"
import Dot from "../components/Dot";


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

            <section className="mt-8 flex flex-wrap gap-8 items-start align-center">
                <div className="shrink-0 grow bg-red-400 h-20 w-1/3 rounded-lg">
                    
                </div>

                <div className="shrink-0 grow bg-red-400 h-20 w-1/3 rounded-lg">
                    
                </div>

                <div className="shrink-0 grow bg-red-400 h-20 w-1/3 rounded-lg">
                    
                </div>


                <div className="shrink-0 grow bg-red-400 h-20 w-1/3 rounded-lg">
                    
                </div>

                <div className="shrink-0 grow bg-red-400 h-20 w-1/3 rounded-lg">
                    
                </div>

            </section>


        </div>
    )
}