import { AnimatePresence, easeInOut, motion } from 'motion/react';
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
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const form = useRef(null);
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);


  function sendToZai(): void {
    if (!form.current) return;
    
    setSendingEmail(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      }
    )
    .then(
      () => {
        console.log('Sent!');
        setSendingEmail(false);
      },
      (error) => {
        console.log('errors: ', error);
        setSendingEmail(false);
      }
    )
  }


  return (
    <>
      <AnimatePresence>
        {sendingEmail && (
          <motion.div 
            className='bg-black/80 fixed inset-0 flex'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
          >
            <div className='absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center gap-8'>
              <motion.div 
                className='aspect-square bg-blue-400 w-4 rounded-full' 
                animate={{
                  x: [-48, 0, 48, -48, 0, 48, 0, -48, 48, 0, -48],
                  y: [-48, -48, -48, 0, 0, 0, 0, 0, -48, -48, -48],
                }}
                transition={{
                  duration: 1,
                  type: "tween",
                  ease: 'easeInOut',
                  repeat: Infinity
                }}
              />
              <p className='text-white'>Sending Email!</p>
            </div>
        </motion.div>)}
      </AnimatePresence>

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
                <div className='flex items-center justify-center'>
                  <SiInstagram size={40}/>
                </div>
                <p className='text-lg'>
                  notZxirus
                </p>
              </div>
            </a>
  
          </div>
          <div className='flex-1'>
            <form onSubmit={handleSubmit(sendToZai)} ref={form}>
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
                      <Input type='email' 
                        {...register('email', {
                          required: true,
                          minLength: {
                          value: 4,
                          message: "Mininum email length is 4 characters"
                        }
                        })}
                        name="email"
                      />
                      <div className='text-red-500 h-5'>
                        { errors.email && <p>{errors.email.message as string}</p> }
                      </div>
                    </div>
      
                    <div>
                      <Label>Name</Label>
                      <Input 
                        {...register('name', {
                          required: true,
                          minLength: {
                            value: 4,
                            message: "Mininum name length is 4 characters"
                          }
                        })}
                        name="name"
                      />
                      <div className='text-red-500 h-5'>
                        { errors.name && <p>{errors.name.message as string}</p> }
                      </div>
                    </div>
                  </div>
    
                  <div>
                    <Label>Subject</Label>
                    <Input 
                      {...register('subject', {
                        required: true,
                        minLength: {
                          value: 4,
                          message: "Mininum subject length is 4 characters"
                        }
                      })}
                      name="subject"
                    />
                    <div className='text-red-500 h-5'>
                      { errors.subject && <p>{errors.subject.message as string}</p> }
                    </div>
                  </div>
    
                  <div>
                    <Label>Message</Label>
                    <Textarea 
                      className='resize-none h-28 break-words scroll-hidden' 
                      {...register('message', {
                        required: true,
                        minLength: {
                          value: 10,
                          message: "Mininum message length is 4 characters"
                        }
                      })}
                      name="message"
                    />
                    <div className='text-red-500 h-5'>
                      { errors.message && <p>{errors.message.message as string}</p> }
                    </div>
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
    </>
  )
}