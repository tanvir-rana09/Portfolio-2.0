'use client'
import { useInView } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
	const mainStyles: React.CSSProperties = {
		position: 'relative',
		width: '200px',
		height: '200px',
		backgroundColor: 'lightblue',
	};

	const pseudoElementStyles: React.CSSProperties = {
		content: '""',
		position: 'absolute',
		top: '10px',
		left: '10px',
		width: '50px',
		height: '50px',
		backgroundColor: 'red',
	};

	const mergedStyles = { ...mainStyles, '::after': pseudoElementStyles };

	const ref = useRef(null);
	const isInView = useInView(ref, { once: false });
	return (
		<div className="grid grid-cols-1 md:grid-cols-3">
			<div className=" col-span-1">
				<h2 className="text-gray-300 text-2xl">My Skills</h2>
				<h3 className="text-gray-300">
					Let’s Explore Popular Skills & Experience
				</h3>
				<p className="text-gray-300">Sed ut perspiciatis unde omnis iste natus to voluptatem accusantium doloremque laudantium, totam rem aperiamc eaque ipsa quae ab illo inventore veritatis</p>
			</div>
			<div className=" col-span-2">
				<div>
					<h2 className="text-gray-300">HTML5</h2>
					<div
					id="html"
						ref={ref}
						style={{
							transform: isInView ? "none" : "translateY(200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",

						}}
					// style={mergedStyles}
					>
						k
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills