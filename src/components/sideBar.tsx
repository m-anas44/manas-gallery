import React from 'react'
import { Button } from './ui/button'
import { AiOutlineHeart } from "react-icons/ai"
import Link from 'next/link'
import Heart from './heart'
const SideBar = () => {
    return (

        <div className="pb-12 w-1/2 md:w-full min-h-screen bg-slate-100 border-r border-gray-900">
                <div className="py-2 justify-start w-full flex-grow items-center sm:items-stretch">
                    <h2 className="mb-2 px-4 text-sm md:text-lg font-semibold tracking-tight">
                        Manage <br />
                        <hr className='border border-gray-900' />
                    </h2>
                    <div>
                        <Link href={"/gallery"} className='w-full'>
                            <Button variant="secondary" className="w-full justify-start hover:bg-gray-200 gap-x-1 font-bold rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                </svg>
                                <p>Gallery</p>
                            </Button>
                        </Link>
                        <Link href={"/album"} className='w-full'>
                        <Button variant="ghost" className="w-full justify-start hover:bg-gray-200 gap-x-1 font-bold rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                            </svg>
                            <p>Albums</p>
                        </Button>
                        </Link>
                        <Link href={"/favorite"} className='w-full'>
                        <Button variant="ghost" className="w-full justify-start hover:bg-gray-200 gap-x-1 font-bold rounded">
                            <Heart/>
                            <p>Favorites</p>
                        </Button>
                        </Link>
                    </div>
                </div>
          

        </div>
    )
}

export default SideBar