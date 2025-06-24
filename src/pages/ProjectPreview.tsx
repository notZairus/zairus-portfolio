import { useParams } from 'react-router-dom'
import { projects } from '@/datas';
import { motion, AnimatePresence } from "motion/react";
import {
  Carousel,
  CarouselContent,
} from "@/components/ui/carousel"
import { useEffect, useState } from 'react';


export default function ProjectPreview() {
  const { index } = useParams();
  const project = projects[Number(index) - 1];
  const [justEntered, setJustEntered] = useState(true);

  console.log(project);

  useEffect(() => {
    setTimeout(() => {
      setJustEntered(false);
    }, 2000)
  }, []);

  return (
    <div className='text-white py-4 lg:px-20 scrollbar-hidden '>
      <motion.div
        className='mx-auto w-full md:w-2/3 aspect-16/9 bg-white/20 rounded-lg overflow-hidden relative'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      >

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
          
            { justEntered &&
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

      </motion.div>

    </div>
  )
}