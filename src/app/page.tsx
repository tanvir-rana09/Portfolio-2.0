import ParallaxText from "@/components/FloatingText";
import { Navbar, About, Projects, Services, Hero, Contact, Footer, ClientTestimonials } from "@/components/Index";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {

  return (
    <main className="">
      <TracingBeam className="h-full">
        <div className=''><Navbar /></div>
        <div><Hero /></div>
        <div className=''><Projects /></div>
        <div className="flex -mt-96 sm:-mt-60 md:-mt-0 flex-col md:gap-10 h-screen justify-center">
          <ParallaxText baseVelocity={5}>
            Web Design Web Design Web Design
          </ParallaxText>
          <ParallaxText baseVelocity={-5}>
            Web Development Web Development
          </ParallaxText>
        </div>
        <div><Services /></div>
        <div><ClientTestimonials/></div>
        <div><About /> </div>
        <div><Footer /></div>
      </TracingBeam>
    </main>
  );
}
