import { AnimatePresence, motion } from "motion/react";
import Dot from "@/components/Dot";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SiFacebook, SiGithub, SiInstagram } from "react-icons/si";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const socialProfiles = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/zairus.bermillo.9",
    icon: SiFacebook,
  },
  {
    name: "GitHub",
    href: "https://github.com/notZairus",
    icon: SiGithub,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/zxirus/",
    icon: SiInstagram,
  },
];

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef<HTMLFormElement>(null);
  const firstRender = useRef(true);
  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [emailSent, setEmailSent] = useState<boolean>(false);

  console.log(firstRender);

  useEffect(() => {
    if (firstRender.current || !form.current) {
      firstRender.current = false;
      return;
    }

    if (sendingEmail === false) {
      setEmailSent(true);

      let inputs = form.current.querySelectorAll("input, textarea");
      inputs.forEach((element) => {
        if (
          element instanceof HTMLInputElement ||
          element instanceof HTMLTextAreaElement
        ) {
          element.value = "";
        }
      });

      setTimeout(() => {
        setEmailSent(false);
      }, 2000);
    }
  }, [sendingEmail]);

  function sendToZai(): void {
    if (!form.current) return;

    setSendingEmail(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          console.log("Sent!");
          setSendingEmail(false);
        },
        (error) => {
          console.log("errors: ", error);
          setSendingEmail(false);
        },
      );
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {sendingEmail && (
          <motion.div
            className="bg-black/80 fixed inset-0 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center gap-8">
              <motion.div
                className="aspect-square bg-blue-400 w-4 rounded-full"
                animate={{
                  x: [-48, 0, 48, -48, 0, 48, 0, -48, 48, 0, -48],
                  y: [-48, -48, -48, 0, 0, 0, 0, 0, -48, -48, -48],
                }}
                transition={{
                  duration: 1,
                  type: "tween",
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              />
              <p className="text-white">Sending Email!</p>
            </div>
          </motion.div>
        )}

        {emailSent && (
          <motion.div
            className="bg-black/80 fixed inset-0 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center gap-8">
              {/* <motion.div 
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
              /> */}
              <p className="text-white">Email Sent!</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-white  scrollbar-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl lg:text-6xl font-black">
            Contact me
            <Dot />
          </h1>
          <p className="border-l-12 border-blue-400 text-xl lg:w-[800px] pl-2 mt-8">
            Have a question, a project in mind, or just want to connect? Feel
            free to reach out. I'm always open to new ideas and opportunities.
          </p>
        </motion.div>

        <form
          className="mt-20 w-full"
          onSubmit={handleSubmit(sendToZai)}
          ref={form}
          aria-label="Contact form"
        >
          <Card className="bg-gradient-to-br from-white/6 to-white/3 border-white/10 text-white shadow-lg rounded-2xl">
            <CardHeader>
              <div className="mb-3 flex items-center justify-start gap-2">
                {socialProfiles.map(({ name, href, icon: Icon }, index) => (
                  <motion.a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${name} profile`}
                    className="inline-flex size-11 items-center justify-center rounded-md text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: 0.05 * (index + 1) }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon size={24} aria-hidden="true" />
                  </motion.a>
                ))}
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-black">
                Send Me an Email
              </CardTitle>
              <CardDescription className="mt-1 text-sm text-white/80">
                Let me know how I can help. Fill out the form and I'll get
                back to you shortly.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="flex flex-col">
                  <Label className="mb-1">
                    Email
                  </Label>
                  <Input
                    type="email"
                    placeholder="you@domain.com"
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={
                      errors.email ? "email-error" : undefined
                    }
                    className={`bg-transparent placeholder:text-white/50 text-white transition focus:shadow-md
                  ${errors.email ? "border-red-400" : "border-white/10"} rounded-md px-3 py-2`}
                    {...register("email", {
                      required: "Email is required",
                      minLength: {
                        value: 4,
                        message: "Minimum email length is 4 characters",
                      },
                    })}
                    name="email"
                  />
                  <div
                    id="email-error"
                    className="text-red-400 h-5 text-xs mt-1"
                  >
                    {errors.email && (
                      <p>{errors.email.message as string}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col">
                  <Label className="mb-1">Name</Label>
                  <Input
                    placeholder="Your name"
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={
                      errors.name ? "name-error" : undefined
                    }
                    className={`bg-transparent placeholder:text-white/50 text-white transition focus:shadow-md
                  ${errors.name ? "border-red-400" : "border-white/10"} rounded-md px-3 py-2`}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 4,
                        message: "Minimum name length is 4 characters",
                      },
                    })}
                    name="name"
                  />
                  <div
                    id="name-error"
                    className="text-red-400 h-5 text-xs mt-1"
                  >
                    {errors.name && <p>{errors.name.message as string}</p>}
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <Label className="mb-1">
                  Subject
                </Label>
                <Input
                  placeholder="Project inquiry, question, etc."
                  aria-invalid={errors.subject ? "true" : "false"}
                  aria-describedby={
                    errors.subject ? "subject-error" : undefined
                  }
                  className={`bg-transparent placeholder:text-white/50 text-white transition focus:shadow-md
                ${errors.subject ? "border-red-400" : "border-white/10"} rounded-md px-3 py-2`}
                  {...register("subject", {
                    required: "Subject is required",
                    minLength: {
                      value: 4,
                      message: "Minimum subject length is 4 characters",
                    },
                  })}
                  name="subject"
                />
                <div
                  id="subject-error"
                  className="text-red-400 h-5 text-xs mt-1"
                >
                  {errors.subject && (
                    <p>{errors.subject.message as string}</p>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <Label className="mb-1">
                  Message
                </Label>
                <Textarea
                  className={`resize-none h-36 break-words placeholder:text-white/50 text-white bg-transparent transition focus:shadow-md
                ${errors.message ? "border-red-400" : "border-white/10"} rounded-md px-3 py-2`}
                  placeholder="Tell me about your project or question..."
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Minimum message length is 10 characters",
                    },
                  })}
                  name="message"
                />

                {errors.message && (
                  <div
                    id="message-error"
                    className="text-red-400 h-5 text-xs mt-1"
                  >
                      <p>{errors.message.message as string}</p>
                  </div>
                )}
                
              </div>
            </CardContent>

            <CardFooter>
              <Button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md flex items-center justify-center gap-3"
                size="lg"
                type="submit"
                disabled={sendingEmail}
                aria-disabled={sendingEmail}
              >
                {sendingEmail ? (
                  <>
                    <svg
                      className="w-5 h-5 animate-spin text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </CardFooter>
          </Card>
        </form>
      </div>
    </>
  );
}
