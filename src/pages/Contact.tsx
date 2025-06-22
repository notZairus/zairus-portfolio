import { motion } from 'motion/react';
import Dot from '@/components/Dot';
import { 
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter
} from '@/components/ui/card';
import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { SiFacebook, SiGithub, SiInstagram } from 'react-icons/si';


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

      <motion.div className='w-full mt-20 flex flex-col md:flex-row gap-8'>
        <div className='md:flex flex flex-1 flex-col md:gap-8 gap-4 justify-center md:items-center'>

          <a href="https://www.facebook.com/zairus.bermillo.9" target='_blank'>
            <div className='bg-white/10 border border-white/15 rounded-xl h-18 px-4 py-4 space-x-4 flex items-center'>
              <div className=' flex items-center justify-center'>
                <SiFacebook size={40}/>
              </div>
              <p className='text-sm'>
                Zairus Bermillo
              </p>
            </div>
          </a>
          
          <a href="https://github.com/notZairus" target='_blank'>
            <div className='bg-white/10 border border-white/15 rounded-xl h-18 px-4 py-4 space-x-4 flex items-center'>
              <div className=' flex items-center justify-center'>
                <SiGithub size={40}/>
              </div>
              <p className='text-sm'>
                notZairus
              </p>
            </div>
          </a>

          <a href="https://www.instagram.com/zxirus/" target='_blank'>
            <div className='bg-white/10 border border-white/15 rounded-xl h-18 px-4 py-4 space-x-4 flex items-center'>
              <div className=' flex items-center justify-center'>
                <SiInstagram size={40}/>
              </div>
              <p className='text-lg'>
                notZxirus
              </p>
            </div>
          </a>

        </div>
        <div className='flex-1'>
          <form>
            <Card className='bg-white/10 border-white/15 text-white'>
              <CardHeader>
                <CardTitle className='text-xl'>Send Me an Email</CardTitle>
                <CardDescription>
                  Let me know how I can help. Fill out the form and I'll get back to you shortly.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-4 text-lg'>
                <div className='flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0'>
                  <div>
                    <Label>Email</Label>
                    <Input type='email'/>
                  </div>
    
                  <div>
                    <Label>Name</Label>
                    <Input />
                  </div>
                </div>
  
                <div>
                  <Label>Subject</Label>
                  <Input />
                </div>
  
                <div>
                  <Label>Message</Label>
                  <Textarea className='resize-none h-28 break-words scroll-hidden'></Textarea>
                </div>
              </CardContent>
              <CardFooter>
                <Button className='w-full bg-secondary text-primary hover:bg-secondary/80' size={'lg'}> Send Message</Button>
              </CardFooter>
            </Card>
          </form>
        
        </div>
      </motion.div> 
    </div>
  )
}