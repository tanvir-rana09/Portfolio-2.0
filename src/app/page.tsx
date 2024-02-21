import { Navbar, About, Projects, Services, Hero, Contact } from "@/components/Index";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div><Navbar /></div>
      <div><Hero /></div>
    </main>
  );
}
