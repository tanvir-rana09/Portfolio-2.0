import {Button} from "./Index"

const Hero = () => {
  return (
	<div id="hero" className="mt-32 px-5">
   <h1 className="text-5xl font-caveat">Hey I am Tanvir Rana</h1>
   <p className="text-sm">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
   <div className="flex gap-5 mt-5">
    <Button>Projects</Button>
    <Button>Contact</Button>
   </div>
  </div>
  )
}

export default Hero