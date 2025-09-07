import Image from "next/image";
import Logo from '../assets/logo.svg';
import LandingImg from '../assets/main.svg';
import { Button } from "@/components/ui/button";
import Link from "next/link";
const HomePage = () => {
  return <main>
    <header className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
    <Image src={Logo} alt="jobify" /> 
    </header>
    <section className="max-w-6xl mx-auto px-4 sm:px-8 h-screen -mt-20
    grid lg:grid-cols-[1fr,400px] items-center">
      <div >
        <h1 className="capitalize text-4xl md:text-7xl font-bold ">
          job <span className="text-primary">tracking</span> app 
        </h1>
        <p className="leading-loose max-w-md mt-4">
          Jobify is a simple yet powerful job tracking app that 
          helps you manage your applications in one place. From 
          adding jobs to tracking progress and viewing insights,
           it makes your job search more organized and efficient
        </p>
        <Button asChild className="mt-4" >
          <Link href='/add-job'>Get Started</Link>
        </Button>
      </div>
      <Image  src={LandingImg} alt="landingImage"/>
    </section>
  </main>
};
export default HomePage;
