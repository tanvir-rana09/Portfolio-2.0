import { Card } from "./Index";
import { FaLaptopCode } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { IoIosApps } from "react-icons/io";
import { ReactNode } from "react";
type MyObjectType = {
  heading: string;
  bio: string;
  icon:ReactNode
};

const Services = () => {
  const cardData: MyObjectType[] = [
    {
      heading: 'Web Design',
      bio: 'Web design encompasses the creation and arrangement of visual elements, layout, and functionality to build engaging and user-friendly websites.',
      icon:<FaLaptopCode/>
    },
    {
      heading: 'web development ',
      bio: 'Web development involves coding, scripting, and designing the structure of websites or web applications, enabling functionality and interactivity for users.',
      icon:<VscServerProcess/>
    },
    {
      heading: 'web application ',
      bio: 'A web application is a software application that runs on a web server, accessible via a web browser, providing interactive functionality and services.',
      icon:<IoIosApps/>
    }
  ]
  return (
    <div className=" 2xl:px-[15%] md:px-10">
      <h1 className="text-center py-5 text-3xl font-caveat">Services That Help You Grow.</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-20">
      {
        cardData.map((card: MyObjectType) => (
          <div className=" place-self-center" key={card.bio} >
            <Card icon={card.icon} heading={card.heading} bio={card.bio} />
          </div>
        ))

      }
    </div>
    </div>

  )
}

export default Services