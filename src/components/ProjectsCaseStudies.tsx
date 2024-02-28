import movie from '@/assets/movie.png'
import watch from '@/assets/watch.png'
import quran from '@/assets/Quran.png'
import admin from '@/assets/Project (1).png'
import CaseStudies from './CaseStudies'
import { StaticImageData } from 'next/image'
interface caseType {
	name: string,
	describe: string,
	link: string,
	className: string,
	classs: string,
	image: StaticImageData,
	id: number,
}
const ProjectsCaseStudies = () => {
	const casedata:caseType[] = [
		{
			name: 'Movie Database',
			describe: 'A simple movie database Where users find a movie or tv shows get full details.',
			link: '/movie-database',
			image: movie,
			id: 1,
			className:'order-last',
			classs:'place-self-end '
		},
		{
			name: 'Watch E-commerce',
			describe: 'Watch e-commerce site where users can buy a watch.',
			link: 'watch-e-commerce',
			image: watch,
			id: 2,
			className:'order-first items-end',
			classs:'place-self-start '
		},
		{
			name: 'Quran',
			describe: 'This is a quran site where users can get all surah.',
			link: 'quran-app',
			image: quran,
			id: 3,
			className:'order-last',
			classs:'place-self-end '
		},
	]
	return (
		<div>
			<div>
				<p className='text-center text-gray-300 uppercase tracking-widest'>Latest Works</p>
				<h2 className='sm:text-3xl md:text-5xl text-2xl text-center text-gray-300 pb-5 font-secular uppercase'>Explore My Popular Projects</h2>
				<div className='flex flex-col gap-20'>
					{
						casedata.map((data:caseType) => (
							<CaseStudies classs={data.classs} className={data.className} key={data.id} name={data.name} link={data.link} image={data.image} describe={data.describe}/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default ProjectsCaseStudies