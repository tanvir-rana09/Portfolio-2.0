'use client'
import movie from '@/assets/movie.png'
import watch from '@/assets/watch.png'
import quran from '@/assets/Quran.png'
import CaseStudies from './CaseStudies'
import { StaticImageData } from 'next/image'
import {motion} from 'framer-motion'
import { anim } from './Animation'
interface caseType {
	name: string,
	describe: string,
	className: string,
	classs: string,
	image: StaticImageData,
	id: string,
}
const ProjectsCaseStudies = () => {
	const casedata: caseType[] = [
		{
			name: 'Movie Database',
			describe: 'A simple movie database Where users find a movie or tv shows get full details.',
			image: movie,
			id: '2',
			className: 'order-last',
			classs: 'place-self-end ',
		},
		{
			name: 'Watch E-commerce',
			describe: 'Watch e-commerce site where users can buy a watch.',
			image: watch,
			id: '3',
			className: 'order-first items-end',
			classs: 'place-self-start '
		},
		{
			name: 'Quran',
			describe: 'This is a quran site where users can get all surah.',
			image: quran,
			id: '1',
			className: 'order-last',
			classs: 'place-self-end '
		},
	]
	//animation

	return (
		<div>
			<div>
				<motion.div
				variants={anim('up',0.2)}
				initial='hidden' 
				whileInView={"show"}
				viewport={{once:true,amount:0.5}}
				className='2xl:max-w-[150rem] mx-auto'
				>
					<p className='text-center text-gray-300 uppercase tracking-widest'>Latest Works</p>
					<h2 className='sm:text-3xl md:text-5xl text-2xl text-center text-gray-300 pb-5 font-secular uppercase'>Explore My Popular Projects</h2>
				</motion.div>
				<div className='flex flex-col gap-20 2xl:max-w-[150rem] mx-auto'>
					{
						casedata.map((data: caseType) => (
							<CaseStudies classs={data.classs} className={data.className} id={data.id} key={data.id} name={data.name} image={data.image} describe={data.describe} />
						))
					}
				</div>
			</div>
		</div>
	)
}

export default ProjectsCaseStudies