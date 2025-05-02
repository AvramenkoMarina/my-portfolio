import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'

const Footer = () => {
	return (
		<div className='mt-20'>
			<div className='text-center'>
				<div className='w-max flex items-center gap-2 mx-auto'>
					<Image src={assets.mail_icon} alt='' className='w-6'></Image>{' '}
					marina.avramenko123@gmail.com
				</div>
			</div>

			<div className='text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6'>
				<ul className='flex items-center justify-center gap-6 lg:gap-8'>
					<li>
						<a
							target='_blank'
							href='https://www.linkedin.com/in/maryna-avramenko-a30296355/'
						>
							<Image src={assets.linkedn} alt='' className='w-10'></Image>
						</a>
					</li>
					<li>
						<a target='_blank' href='https://github.com/AvramenkoMarina'>
							<Image src={assets.github} alt='' className='w-10'></Image>
						</a>
					</li>
					<li>
						<a
							target='_blank'
							href='https://savelife.in.ua/donate/#donate-army-card-once'
						>
							<Image src={assets.save_life} alt='' className='w-15'></Image>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Footer
