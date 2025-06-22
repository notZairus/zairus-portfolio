import { motion } from 'motion/react';
import Dot from '@/components/Dot';


export default function Contact() {
  return (

    <div className='text-white py-20 lg:px-20 scrollbar-hidden'>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 1 }}
            >
                <h1 
                className='text-5xl lg:text-6xl font-black'>
                    Contact me<Dot />
                </h1>
                <p className='border-l-12 border-blue-400 text-xl lg:w-[800px] pl-2 mt-8'>
                    Have a question, a project in mind, or just want to connect? Feel free to reach out. I'm always open to new ideas and opportunities.
                </p>
            </motion.div>
    </div>
  )
}