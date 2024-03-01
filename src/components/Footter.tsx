"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { motion } from 'framer-motion'
import { anim } from "./Animation";

export default function Footer() {
	return (
		<div className="h-[40rem] w-full rounded-md bg-[#000000] relative flex flex-col items-center justify-center antialiased overflow-x-hidden z-0">
			<div className="max-w-2xl mx-auto p-4">
				<motion.div
					variants={anim('up', 0.2)}
					initial='hidden'
					whileInView={"show"}
					viewport={{ once: true, amount: 0.5 }}
				>
					<h1 className="relative z-10 text-lg md:text-6xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-bold font-secular uppercase">
						Subscribe For Newsletter
					</h1>
				</motion.div>
				<motion.div
					variants={anim('down', 1)}
					initial='hidden'
					whileInView={"show"}
					viewport={{ once: true, amount: 0.5 }}
				>
					<p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
						Our objective is to offer a high-quality service and a dependable source of income to our investors while simultaneously minimizing any potential risks and automating and simplifying the relationships.
					</p>
				</motion.div>
				<motion.div
					variants={anim('up', 1.8)}
					initial='hidden'
					whileInView={"show"}
					viewport={{ once: true, amount: 0.5 }}
					className='flex w-[90%] items-center gap-2'>
					<input
						type="text"
						placeholder="@Email"
						className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 relative z-10 mt-4 px-4 py-3 bg-neutral-950 placeholder:text-neutral-700 w-full"
					/>
					<button className="rounded-lg border border-neutral-800 focus:ring-2  focus:ring-teal-500 relative z-10 mt-4 px-5 py-3 bg-neutral-950 text-neutral-300">Subscribe</button>
				</motion.div>
				<div className="flex flex-col gap-10 z-50 mt-20">

					<div className='flex justify-between flex-col h-full md:flex-row gap-5 z-50'>
						<motion.div
							variants={anim('right', 2)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: true, amount: 0.5 }}
							className="flex flex-col gap-2">
							<h2 className="font-semibold text-2xl text-neutral-500">Social</h2>
							<div className='flex gap-5'>
								<Link
									className="p-4 border rounded-full hover:text-forth text-gray-200 hover:bg-white duration-300"
									href='https://facebook.com/tanvir.rana.world'>
									<FaFacebookF />

								</Link>
								<Link
									className="p-4 border rounded-full hover:text-forth text-gray-200 hover:bg-white duration-300"
									href='https://instagram.com/tanvir.rana.soikat'>
									<FaInstagram />
								</Link>
								<Link
									className="p-4 border rounded-full hover:text-forth text-gray-200 hover:bg-white duration-300"
									href='https://x.com/TanvirRana_?t=pXyzY9-y_Urx7SCPc4_rog&s=09'>
									<FaXTwitter />

								</Link>
								<Link
									className="p-4 border rounded-full hover:text-forth text-gray-200 hover:bg-white duration-300"
									href='#'>
									<FaLinkedin />
								</Link>
								<Link
									className="p-4 border rounded-full hover:text-forth text-gray-200 hover:bg-white duration-300"
									href='https://github.com/tanvir-rana09'>
									<FaGithub />
								</Link>
							</div>
						</motion.div>
						<motion.div
							variants={anim('left', 2.5)}
							initial='hidden'
							whileInView={"show"}
							viewport={{ once: true, amount: 0.5 }}
							className='flex flex-col gap-2'>
							<h2 className="text-neutral-400 text-xl font-semibold ">Contact</h2>
							<div className='flex flex-col gap-2'>
								<Link
									className='flex items-center gap-2'
									href='telto:+8801402434727'>
									<FaWhatsapp style={{ color: "white" }} />
									<p className="text-gray-300">01402434727</p>
								</Link>
								<Link
									className='flex items-center gap-2'
									href='mailto:tanvir.rana.soikat@gmail.com'>
									<IoIosMail style={{ color: "white" }} />
									<p className="text-gray-300">tanvir.rana.soikat@gmail.com</p>
								</Link>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
			<div className="border-t border-neutral-800 w-screen text-center flex items-center z-50 h-full justify-center lead gap-2 mt-24 text-gray-300">
				&copy; 2024 Made with <FaHeart /> by <Link className="font-semibold text-neutral-400" href='https://facebook.com/tanvir.rana.world'>Tanvir Rana</Link>
			</div>
			<BackgroundBeams />
		</div>
	);
}
