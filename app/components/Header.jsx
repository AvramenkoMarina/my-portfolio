import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
	return (
		<div className='w-full max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-30'>
			<div>
				<Image src={assets.profile_img} alt='' className='rounded-full w-32' />
			</div>
			<h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3'>
				Hi!I`m Maryna
				<Image src={assets.hand_icon} alt='' className='w-6' />
			</h3>
			<h1 className='text-3xl sm:text-6xl lg:text-[66px]'>
				Frontend developer based in Kyiv
			</h1>
			<div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
				<a
					href='#contact'
					className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2'
				>
					connect with me{' '}
					<Image src={assets.right_arrow} alt='' className='w-4' />
				</a>
				<a
					href='/sample-resume.pdf'
					download
					className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-lime-300 hover:-translate-y-1 duration-500'
				>
					my resume <Image src={assets.download_icon} alt='' className='w-4' />
				</a>
			</div>
		</div>
	)
}

export default Header
