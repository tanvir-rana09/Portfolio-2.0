'use client'
import { Card } from "./Index";
import { FaLaptopCode } from "react-icons/fa";
import { VscServerProcess } from "react-icons/vsc";
import { IoIosApps } from "react-icons/io";
import { ReactNode, useEffect } from "react";
import { useAnimate, usePresence } from 'framer-motion'
type MyObjectType = {
  heading: string;
  bio: string;
  icon: ReactNode
};

const Services = () => {
  const cardData: MyObjectType[] = [
    {
      heading: 'Web Design',
      bio: 'Web design encompasses the creation and arrangement of visual elements, layout, and functionality to build engaging and user-friendly websites.',
      icon: <FaLaptopCode />
    },
    {
      heading: 'web development ',
      bio: 'Web development involves coding, scripting, and designing the structure of websites or web applications, enabling functionality and interactivity for users.',
      icon: <VscServerProcess />
    },
    {
      heading: 'web application ',
      bio: 'A web application is a software application that runs on a web server, accessible via a web browser, providing interactive functionality and services.',
      icon: <IoIosApps />
    }
  ]

  // const [scope, animate] = useAnimate()

  // useEffect(() => {
  //   const handleAnimate = async () => {

  //     await animate('#card0', { y: 0, opacity: 1 }, { duration: 0.5 })
  //     await animate('#card1', { y: 0, opacity: 1 }, { duration: 0.5 })
  //     await animate('#card2', { y: 0, opacity: 1 }, { duration: 0.5 })

  //   }
  //   handleAnimate()
  // }, [animate])

  const [isPresent, safeToRemove] = usePresence();
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isPresent) {
      const enterAnimation = async () => {
        // Animates the elements to enter when isPresent is true
        await animate(scope.current, { opacity: 1 }, { duration: 1 });
        await animate("#card0", { opacity: 1, x: 0 }, { duration: 1 });
        await animate("#card1", { opacity: 1, x: 0 }, { duration: 1 });
        await animate("#card2", { opacity: 1, x: 0 }, { duration: 1 });
      };
      enterAnimation();
    } else {
      const exitAnimation = async () => {
        // Animates the elements to exit when isPresent is false
        await animate("#card0", { opacity: 0, x: -100 }, { duration: 1 });
        await animate("#card1", { opacity: 0, x: -100 }, { duration: 1 });
        await animate("#card2", { opacity: 0, x: -100 }, { duration: 1 });
        await animate(scope.current, { opacity: 0 }, { duration: 1 });
        safeToRemove(); // Safely removes the elements after exit animation
      };
      exitAnimation();
    }
  }, [isPresent,animate,safeToRemove,scope]);
  return (
    <div className=" 2xl:px-[15%] md:px-10 pt-20 ">
      <h1 className="text-center py-5 text-3xl font-secular uppercase text-gray-300">Services That Help You Grow.</h1>
      <div
        ref={scope}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-20 ">
        {
          cardData.map((card: MyObjectType, i) => (
            <div
              id={`card${i}`}
              className=" place-self-center " key={card.bio} >
              <Card icon={card.icon} heading={card.heading} bio={card.bio} />
            </div>
          ))

        }
      </div>
    </div>

  )
}

export default Services