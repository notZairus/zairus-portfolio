import Dot from "@/components/Dot";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiPhp,
  SiLaravel,
  SiPython,
  SiFirebase,
  SiMysql,
  SiSqlite,
  SiFlask,
} from "react-icons/si";
import SkillHoverCard from "@/components/SkillHoverCard";
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import { GitHubCalendar } from "react-github-calendar";

type Skill = {
  name: string;
  icon: React.ReactNode;
};

const InViewVariant: Variants = {
  initial: {
    opacity: 0,
    y: 64,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const skills: Skill[] = [
  {
    name: "HTML",
    icon: <SiHtml5 size={36} />,
  },
  {
    name: "CSS",
    icon: <SiCss3 size={36} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript size={36} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript size={36} />,
  },
  {
    name: "React",
    icon: <SiReact size={36} />,
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss size={36} />,
  },
  {
    name: "ShadCN",
    icon: <SiShadcnui size={36} />,
  },
  {
    name: "Framer Motion",
    icon: <SiFramer size={36} />,
  },
  {
    name: "PHP",
    icon: <SiPhp size={36} />,
  },
  {
    name: "Python",
    icon: <SiPython size={36} />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase size={36} />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel size={36} />,
  },
  {
    name: "Flask",
    icon: <SiFlask size={36} />,
  },
  {
    name: "MySQL",
    icon: <SiMysql size={36} />,
  },
  {
    name: "SQLite",
    icon: <SiSqlite size={36} />,
  },
];

export default function About() {
  return (
    <div className="text-white py-20 lg:px-20 scrollbar-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl lg:text-6xl font-black">
          About me
          <Dot />
        </h1>
        <p className="border-l-12 border-blue-400 text-xl lg:w-[800px] pl-2 mt-8">
          Developing beautiful and functional website is my hobby, that’s why I
          always make sure my work is good quality.
        </p>
      </motion.div>

      <motion.section
        className="mt-20"
        variants={InViewVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className=" text-4xl font-bold">
          Who I am
          <Dot />
        </h2>
        <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between mt-8 gap-8">
          <div className="flex-1 text-md">
            <p className="tracking-wide text-xl">
              I am <strong>Zairus Bermillo</strong>, a web developer from the{" "}
              <strong>Philippines</strong> focused on building responsive and
              practical web applications. I enjoy working on both{" "}
              <strong>frontend and backend development</strong>.
              <br />
              <br />
              Outside of coding, I explore new tech stacks, improve my UI/UX
              skills, and build side projects to grow my experience. I’m driven
              by curiosity and a passion for creating meaningful digital
              products.
            </p>
          </div>
          {/* <div className="flex-1">
            <div className="bg-white w-full lg:w-[360px]  ml-auto rounded overflow-hidden object-cover">
              <img src="/zairus.jpg" alt="" />
            </div>
          </div> */}
        </div>
      </motion.section>

      <motion.section
        className="mt-20"
        variants={InViewVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Stack
          <Dot />
        </h2>
        <div className="mt-8 space-y-6">
          <div>
            <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 w-full gap-4">
              {skills.map((skill) => (
                <SkillHoverCard name={skill.name} icon={skill.icon} />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="mt-20"
        variants={InViewVariant}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Github Activity
          <Dot />
        </h2>
        <div className="mt-8 space-y-6 ">
          <div className="px-4 py-8 border rounded-xl border-blue-400/50 flex items-center justify-center">
            <GitHubCalendar
              username="notZairus"
              theme={{
                dark: ["#2f2f2f60", "#312e81", "#5b21b6", "#7c3aed", "#a855f7"],
              }}
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}
