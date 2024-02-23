import { Navbar, About, Projects, Services, Hero, Contact, Footer } from "@/components/Index";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Home() {
  return (
    <main className="">
      <TracingBeam>
        <div className=''><Navbar /></div>
        <div><Hero /></div>
        <div className=''><Projects /></div>
        <div><Services /></div>
        {/* <div><About /></div> */}
        <div><Footer /></div>
      </TracingBeam>
    </main>
  );
}
