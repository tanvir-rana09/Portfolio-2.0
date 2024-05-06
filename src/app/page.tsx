import ParallaxText from "@/components/FloatingText";
import { Navbar, About, Projects, Services, Hero, Contact, Footer, ClientTestimonials } from "@/components/Index";
import ProjectsCaseStudies from "@/components/ProjectsCaseStudies";
import Skills from "@/components/Skills";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {

  return (
    <main className="">

        <div><Hero /></div>
        <div className=''><Projects /></div>
        <div><ProjectsCaseStudies /></div>
        <div><Services /></div>
        <div><ClientTestimonials /></div>
        <div><About /> </div>

    </main>
  );
}
