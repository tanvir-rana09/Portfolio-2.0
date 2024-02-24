'use client'
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ReactNode, useEffect } from "react";
interface CounterProps {
	value: number; // Making value prop required
	icon: ReactNode;
	name?: string; // Marking name prop as optional
}
export default function Counter({
	value,
	icon,
	name,
}: CounterProps) {
	const count = useMotionValue(0);
	const rounded = useTransform(count, Math.round);

	useEffect(() => {
		const animation = animate(count, value, { duration: 10 });

		return animation.stop;
	}, [count,value]);

	return (
		<div className='text-xl text-gray-300 flex items-center gap-2 '>

			<div className="border p-5 rounded-full cursor-pointer hover:bg-white hover:text-primary duration-500">{icon}</div>
			<div>
				<div className="flex items-center gap-1">
					<motion.h1 className="text-5xl">{rounded}</motion.h1>
					<span className="text-5xl">+</span>
				</div>

				<p className="text-sm">{name}</p>
			</div>
		</div>
	)
}