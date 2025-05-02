'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const NavBar = ({ isDarkMode, setIsDarkMode }) => {
	const [isScroll, setIsScroll] = useState(false)

	const sideMenuRef = useRef()

	const openMenu = () => {
		sideMenuRef.current.style.transform = 'translateX(-16em)'
	}
	const closeMenu = () => {
		sideMenuRef.current.style.transform = 'translateX(16em)'
	}
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (scrollY > 50) {
				setIsScroll(true)
			} else {
				setIsScroll(false)
			}
		})
	}, [])
	return (
		<>
			<div className='fixed top-0 right-0 w-full z-[-1]'>
				<Image src={assets.header_bg_color} alt='' className='w-full'></Image>
			</div>

			<nav
				className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
					isScroll ? 'bg-white/50 background-blur-lg shadow-sm' : ''
				}`}
			>
				<a href='#top'>
					<Image
						src={assets.logo}
						alt=''
						className='w-28 cursor-pointer mr-14'
					/>
				</a>

				<ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white/50 shadow-sm '>
					<li>
						<a href='#top'>Home</a>
					</li>
					<li>
						<a href='#about'>About me</a>
					</li>
					<li>
						<a href='#work'>My Work</a>
					</li>
					<li>
						<a href='#contact'>Contact me</a>
					</li>
				</ul>

				<div className='flex items-center gap-4'>
					{/* <button>
						<Image
							src={isDarkMode ? assets.sun_icon : assets.moon_icon}
							alt=''
							className='w-6'
						/>
					</button> */}
					<a
						href='#contact'
						className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 hover:bg-lime-300  hover:-translate-y-1 duration-500'
					>
						Contact <Image src={assets.arrow_icon} alt='' className='w-3' />
					</a>
					<button className='block md:hidden ml-3' onClick={openMenu}>
						<Image src={assets.menu_black} alt='' className='w-6' />
					</button>
				</div>

				{/* Mobile menu */}
				<ul
					ref={sideMenuRef}
					className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-lime-300  transition duration-500'
				>
					<div className='absolute right-6 top-15' onClick={closeMenu}>
						<Image
							src={assets.close_black}
							alt=''
							className='w-5 cursor-pointer'
						></Image>
					</div>
					<li>
						<a onClick={closeMenu} href='#top'>
							Home
						</a>
					</li>
					<li>
						<a onClick={closeMenu} href='#about'>
							About me
						</a>
					</li>
					<li>
						<a onClick={closeMenu} href='#work'>
							My Work
						</a>
					</li>
					<li>
						<a onClick={closeMenu} href='#contact'>
							Contact me
						</a>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default NavBar
