'use client';
import React, { useState } from 'react'
import SideBar from './sideBar'
import {MenuIcon} from 'lucide-react'

const Res_sidebar = () => {
    const [openSideBar, setOpenSideBar]=useState(false)
    return (
        <div>
            <div className='flex items-center px-4 py-1 border-b gap-x-5 md:hidden'>
            <MenuIcon 
            onClick={
                ()=>{
                    setOpenSideBar(!openSideBar)
                }} 
            className='cursor-pointer'/>
            <h2 className="text-lg font-bold tracking-tight border-l pl-2">
                Manage
            </h2>
            </div>
            
            <div className={`fixed md:static top-0 z-50 ${openSideBar?'block':'hidden md:block'}`}>
            <SideBar />
            </div>
        </div>
    )
}

export default Res_sidebar