'use client'
import { anim } from "./Animation"
import InfiniteMovingCardsTestimonials from "./Testimonials"
import { motion } from 'framer-motion'
const ClientTestimonials = () => {
	return (
		<motion.div
			variants={anim('right', 0.2)}
			initial='hidden'
			whileInView={"show"}
			viewport={{ once: true, amount: 0.5 }}
			className="grid grid-cols-1 lg:grid-cols-3 items-center px-5 bg-[#0A0A0A] w-full">
			<div className="flex flex-col gap-7 col-span-1">
				<h1 className=" font-semibold uppercase tracking-widest text-cyan-500">Clients Testimonials</h1>
				<h2 className="text-gray-300 text-5xl font-quicksand font-semibold">I have 100+ Clients <span className="text-cyan-500">Feedback</span></h2>
				<p className="text-gray-300 ">Sed ut perspiciatis unde omnin natus totam rem aperiam eaque inventore veritatis</p>
			</div>
			<motion.div 
			variants={anim('left',0.2)}
			initial='hidden' 
			whileInView={"show"}
			viewport={{once:true,amount:0.5}}
			className=" col-span-2">
				<InfiniteMovingCardsTestimonials />
			</motion.div>
		</motion.div>
	)
}

export default ClientTestimonials