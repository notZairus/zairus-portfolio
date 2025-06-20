import { Button } from "@/components/ui/button";
import { Facebook, Github, GithubIcon, Instagram } from "lucide-react";


export default function Home() {
  return (
    <div className='w-full h-full flex items-center flex-col justify-center text-white'>
      <div className='aspect-square w-36 rounded-full bg-white overflow-hidden'>
        <img src="https://imgs.search.brave.com/9XHXpZoWrWDCRXvqC6S26W_suvveaHy-AuGhZP_7nk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXNoLmlvL3N0/YXRpYy9pbWFnZXMv/dHV0b3JpYXNfZGVm/YXVsdF9pbWFnZS5q/cGc" alt="" />
      </div>
      <p className='mt-4 text-center'>Hello, I'm Zairus Bermillo</p>
      <h1 className='text-5xl mt-4 font-semibold text-center'>Full Stack Developer</h1>
      <p className='mt-4 text-gray-500 text-center lg:w-1/2 w-11/12'>
        A full stack developer based on Philippines, I’m more than willing
        to help you build stunning websites you will love.
      </p>
      <div className="mt-8">
        <Button variant={"secondary"}>Download CV</Button>
      </div>
      <div className="mt-8 space-x-3">

        <a href="https://www.facebook.com/zairus.bermillo.9" target="_blank">
          <Button size="icon" className="bg-white/10">
            <Facebook />
          </Button>
        </a>

        <a href="">
          <Button size="icon" className="bg-white/10">
            <Github />
          </Button>
        </a>

        <a href="" target="_blank">
          <Button size="icon" className="bg-white/10">
            <Instagram />
          </Button>
        </a>

      </div>
    </div>
  )
}