import ParallaxText from "@/components/FloatingText";
import { Navbar, About, Projects, Services, Hero, Contact, Footer, ClientTestimonials } from "@/components/Index";
import ProjectsCaseStudies from "@/components/ProjectsCaseStudies";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {

  return (
    <main className="">
      <TracingBeam className="h-full">
        <div><Hero /></div>
        <div className=''><Projects /></div>
        <div><ProjectsCaseStudies /></div>
        <div className="flex py-96 sm:-mt-60 md:-mt-0 flex-col md:gap-10  justify-center">
          <ParallaxText baseVelocity={5}>
            Web Design Web Design Web Design
          </ParallaxText>
          <ParallaxText baseVelocity={-5}>
            Web Development Web Development
          </ParallaxText>
        </div>
        {/* <div><Skills /></div> */}
        <div><Services /></div>
        <div><ClientTestimonials /></div>
        <div><About /> </div>
      </TracingBeam>
    </main>
  );
}
