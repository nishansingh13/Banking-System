"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation';
const Sidebar = ({user}:SiderbarProps) => {
    const pathname = usePathname();
  return (
   <section className='sidebar'>
    <nav className='flex flex-col gap-4'>
        <Link href="/" className='flex mb-12 cursor-pointer items-center gap-2'>
            <Image src="/icons/logo.svg" alt='Image not found' width={34} height={34} className='size-[24px] max-xl:size-14'/>
            <h1 className='sidebar-logo'>
            Horizon
            </h1>
        </Link>
      {sidebarLinks.map((item)=>{
            return(
                <Link href={item.route} key={item.label} className='text-black'>{item.label}</Link>
            )
      })}
   
    </nav>
   </section>
  )
}

export default Sidebar
