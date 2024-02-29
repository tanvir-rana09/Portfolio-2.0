import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
const CaseStudies = ({
	name,
	describe,
	id,
	className,
	image,
	classs
}: {
	name: string,
	describe: string,
	id:string
	image:StaticImport,
	className:string,
	classs:string,
}) => {
	return (
		<div>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-5 px-7 items-center '>
			<div className={`${classs}`}>
				<div className=' rounded-xl overflow-hidden md:w-[30rem]'>
					<Image src={image} alt="image" />
				</div>
			</div>
			<div className={`${className}  flex flex-col items-start gap-5`}>
				<p className='text-cyan-500 '>Product Design</p>
				<h1 className='text-gray-300 text-4xl font-quicksand font-semibold'>{name}</h1>
				<p className=' text-gray-400'>{describe}</p>
				<Link className='text-gray-100 bg-third px-10 py-2.5 rounded-md shadow-md w-full text-center uppercase font-sen tracking-widest text-sm xl:w-auto' href={id}>Case Study</Link>
			</div>
		</div>
		<hr  className='mt-10 w-[90%] xl:w-[70%] 2xl:w-[50%] mx-auto border-gray-700'/>
		</div>
	)
}

export default CaseStudies