import { useParams } from 'react-router-dom'
import { projects } from '@/datas';
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';


export default function ProjectPreview() {
  const { index } = useParams();
  const project = projects[Number(index) - 1];
  const [justEntered, setJustEntered] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setJustEntered(false);
    }, 2000)
  }, []);

  return  (
  <div className='text-white py-4 lg:px-20 scrollbar-hidden mb-12'>
    <motion.div
      className='mx-auto w-full md:w-2/3 overflow-hidden relative'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='w-full aspect-16/9 bg-white/20 relative rounded overflow-hidden'>
        <Carousel>
          <CarouselContent>
            {
              project.screenshotPaths.map((imgPath) => (
                <img src={imgPath} alt="" key={imgPath} />
              ))
            }
          </CarouselContent>
        </Carousel>

        <AnimatePresence mode="wait">
          {justEntered &&
            <motion.div
              className='bg-black/80 absolute inset-0 flex items-center justify-center'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}
            >
              <p className='text-xl'>This image is slideable...</p>
            </motion.div>
          }
        </AnimatePresence>
      </div>

      <div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className='text-4xl font-bold mt-8'>
            {project.name}
          </h1>
          <p className='text-lg mt-4'>{project.description}</p>

          {/* Tech Stack Badges */}
          <div className='flex mt-5 gap-2 flex-wrap'>
            {
              project.technologyUsed.map((tech) => (
                <Badge key={tech} variant={'secondary'} className='rounded-full px-4 py-2'>
                  {tech}
                </Badge>
              ))
            }
          </div>

          {/* Features List */}
          {project.features && (
            <div className="mt-8">
              <h2 className='text-2xl font-semibold mb-2'>Features</h2>
              <ul className='list-disc list-inside text-lg space-y-1'>
                {project.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Buttons */}
          <div className='flex mt-12 md:gap-4 gap-2 flex-wrap w-full'>
            {project.livePreviewUrl &&
              <a className='w-full md:w-min' href={project.livePreviewUrl} target='_blank'>
                <Button variant={'secondary'} size="lg" className='w-full cursor-pointer'>
                  Live Preview
                </Button>
              </a>
            }

            {project.githubRepo &&
              <a className='w-full md:w-min' href={project.githubRepo} target="_blank">
                <Button className='border-white border cursor-pointer w-full' size="lg">
                  Github Repository
                </Button>
              </a>
            }
          </div>
        </motion.div>
      </div>
    </motion.div>
  </div>
);

}