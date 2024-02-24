import React, { ReactNode } from "react";
import { Meteors } from "./ui/meteors";
export default function Card({
	heading, bio,icon
}: {
	heading: string,
	bio: string
	icon:ReactNode
}) {
	return (
		<div className="">
			<div className=" h-full w-full  relative max-w-sm">
				<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
				<div className="relative shadow-xl bg-forth border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
					<div className="text-4xl p-4 rounded-full border flex items-center justify-center mb-4 border-gray-500 text-gray-500">
						{icon}
					</div>

					<h1 className=" capitalize tracking-widest  text-2xl text-white mb-4 relative z-50 font-caveat">
						{heading}
					</h1>

					<p className="font-normal text-base text-slate-300 mb-4 relative z-50">
						{bio}
					</p>

					{/* Meaty part - Meteor effect */}
					<Meteors number={25} />
				</div>
			</div>
		</div>
	);
}
