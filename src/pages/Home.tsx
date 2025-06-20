import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div 
      className='w-full h-full flex items-center flex-col justify-center text-white pb-12'
    >
      <motion.div 
        className='aspect-square w-36 rounded-full bg-white overflow-hidden'
        initial={{scale: 0}}
        animate={{scale: 1}}
        transition={{duration: 2, type: "spring"}}
      >
        <img src="https://imgs.search.brave.com/9XHXpZoWrWDCRXvqC6S26W_suvveaHy-AuGhZP_7nk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXNoLmlvL3N0/YXRpYy9pbWFnZXMv/dHV0b3JpYXNfZGVm/YXVsdF9pbWFnZS5q/cGc" alt="" />
      </motion.div>
      <motion.div 
        className="flex flex-col items-center w-full"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, type: "spring"}}
      >
        <p className='mt-4 text-center'>Hello, I'm Zairus Bermillo</p>
        <h1 className='text-5xl mt-4 font-semibold text-center'>Full Stack Developer</h1>
        <p className='mt-4 text-gray-500 text-center lg:w-1/2 w-11/12'>
          A full stack developer based on Philippines, I’m more than willing
          to help you build stunning websites you will love.
        </p>
      </motion.div>
      <motion.div 
        className="mt-8"
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2, type: "spring"}}
      >
        <Button variant={"secondary"}>Download CV</Button>
      </motion.div>
      <div className="mt-8 space-x-3 flex">

        <motion.div 
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1}}
        >
          <a href="https://www.facebook.com/zairus.bermillo.9" target="_blank">
            <Button size="icon" className="bg-white/10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1}}
        >
          <a href="https://www.facebook.com/zairus.bermillo.9" target="_blank">
            <Button size="icon" className="bg-white/10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </Button>
          </a>
        </motion.div>

        <motion.div 
          initial={{x: 20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{duration: 1}}
        >
          <a href="https://www.facebook.com/zairus.bermillo.9" target="_blank">
            <Button size="icon" className="bg-white/10 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </Button>
          </a>
        </motion.div>

      </div>
    </div>
  )
}