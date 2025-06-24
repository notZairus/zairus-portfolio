import Dot from '@/components/Dot'
import { SiJavascript, SiReact, SiHtml5, SiCss3, SiTailwindcss, SiShadcnui, SiFramer, SiPhp, SiLaravel, SiPython, SiFirebase, SiMysql, SiSqlite, SiFlask } from "react-icons/si";
import SkillHoverCard from '@/components/SkillHoverCard';
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



type Skill = {
  name: string,
  icon: React.ReactNode
}


const InViewVariant: Variants = {
  'initial': {
    opacity: 0,
    y: 64
  },
  'animate': {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    }
  },
}


const frontendSkills: Skill[] = [
  {
    name: 'Html',
    icon: <SiHtml5 size={40} />
  },
  {
    name: 'Css',
    icon: <SiCss3 size={40} />
  },
  {
    name: 'Javasctipt',
    icon: <SiJavascript size={40} />
  },
  {
    name: 'React',
    icon: <SiReact size={40} />
  },
  {
    name: 'TailwindCss',
    icon: <SiTailwindcss size={40} />
  },
  {
    name: 'ShadCN',
    icon: <SiShadcnui size={40} />
  },
  {
    name: 'Motion',
    icon: <SiFramer size={40} />
  }
]

const backendSkills: Skill[] = [
  {
    name: 'PHP',
    icon: <SiPhp size={40} />
  },
  {
    name: 'Python',
    icon: <SiPython size={40} />
  },
  {
    name: 'Firebase',
    icon: <SiFirebase size={40} />
  },
  {
    name: 'Laravel',
    icon: <SiLaravel size={40} />
  },
  {
    name: 'Flask',
    icon: <SiFlask size={40} />
  }
]

const databaseSkills: Skill[] = [
  {
    name: 'MySQL',
    icon: <SiMysql size={40} />,
  },
  {
    name: 'SQLite',
    icon: <SiSqlite size={40} />,
  },
]


export default function About() {
  return (
    <div className='text-white py-20 lg:px-20 scrollbar-hidden'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >
        <h1 
          className='text-5xl lg:text-6xl font-black'>
          About me<Dot />
        </h1>
        <p className='border-l-12 border-blue-400 text-xl lg:w-[800px] pl-2 mt-8'>Developing beautiful and functional website is my hobby, that’s why I always make sure my work is good quality.</p>
      </motion.div>
      
      <motion.section 
        className='mt-40'
        variants={InViewVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className=' text-4xl font-bold'>Who I am<Dot /></h2>
        <div className='w-full flex flex-col-reverse lg:flex-row items-center justify-between mt-8 gap-8'>
          <div className='flex-1 text-md'>
            <p className='tracking-wide'>
              I am Zairus Bermillo, a passionate web developer and aspiring full-stack engineer from the Philippines. I like translating ideas into engaging and practical online applications. With a strong background in both frontend and backend development, I create clean, responsive interfaces and robust server-side logic.<br />
              <br />
              When I'm not coding, I'm usually investigating new tech stacks, honing my UI/UX design abilities, or working on side projects to stretch my imagination. I'm dedicated to continuous improvement, whether through solo projects, open-source contributions, or collaboration with peers.<br />
              <br />
              Inspired by curiosity and coffee, I want to build meaningful digital experiences that are not just attractive, but also impactful.<br />
            </p>
          </div>
          <div className='flex-1'>
            <div className='bg-white w-full lg:w-[280px]  ml-auto rounded overflow-hidden object-cover'>
              <img src="https://imgs.search.brave.com/9XHXpZoWrWDCRXvqC6S26W_suvveaHy-AuGhZP_7nk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXNoLmlvL3N0/YXRpYy9pbWFnZXMv/dHV0b3JpYXNfZGVm/YXVsdF9pbWFnZS5q/cGc" alt="" />
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        className='mt-40'
        variants={InViewVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className='font-bold text-4xl'>Services I can offer<Dot/></h2>
        <div className='mt-8 flex gap-8 w-full flex-wrap'>

          <div className='grow shrink-0 w-1/5 min-w-[200px]'>
            <h3 className='text-2xl font-semibold'>Frontend Development</h3>
            <p className='mt-4 tracking-wide'>
              I specialize in building responsive and accessible user interfaces using HTML, CSS, JavaScript, and modern frameworks like React and Vue. Whether it’s a static website or a complex single-page application, I ensure a smooth, intuitive user experience across all devices.  
            </p>
          </div>

          <div className='grow shrink-0 w-1/5 min-w-[200px]'>
            <h3 className='text-2xl font-semibold'>Backend Development</h3>
            <p className='mt-4 tracking-wide'>
              I build secure and efficient server-side applications using Node.js, PHP, or Python. I can create RESTful APIs, manage authentication systems, handle databases, and deploy scalable applications that support business logic and client needs.            </p>
          </div>

          <div className='grow shrink-0 w-1/5 min-w-[200px]'>
            <h3 className='text-2xl font-semibold'>Api Integration</h3>
            <p className='mt-4 tracking-wide'>
              I integrate third-party APIs and develop custom APIs to extend your application's functionality. From payment gateways like Stripe and PayPal to social login systems and data services, I ensure smooth and secure communication between services.
            </p>
          </div>

          <div className='grow shrink-0 w-1/5 min-w-[200px]'>
            <h3 className='text-2xl font-semibold'>Database Management</h3>
            <p className='mt-4 tracking-wide'>
              I design, optimize, and maintain databases using MySQL, PostgreSQL, or MongoDB. I ensure data integrity, write efficient queries, and manage backups and migrations, supporting your application with a solid and secure data foundation.
            </p>
          </div>

        </div>
      </motion.section>

      <motion.section 
        className='mt-40'
        variants={InViewVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className='text-4xl font-bold'>Skills<Dot /></h2>
        <div className='mt-8 space-y-6'>

          <div>
            <h3 className='text-2xl font-semibold'>Frontend Skills</h3>
            <div className='mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 w-full gap-4'>
              {
                frontendSkills.map((skill) => <SkillHoverCard name={skill.name} icon={skill.icon}/>)
              }
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold'>Backend Skills</h3>
            <div className='mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 w-full gap-4'>
              {
                backendSkills.map((skill) => <SkillHoverCard name={skill.name} icon={skill.icon}/>)
              }
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold'>Database Skills</h3>
            <div className='mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 w-full gap-4'>
              {
                databaseSkills.map((skill) => <SkillHoverCard name={skill.name} icon={skill.icon}/>)
              }
            </div>
          </div>

        </div>
      </motion.section>
    
    </div>
  )
}
