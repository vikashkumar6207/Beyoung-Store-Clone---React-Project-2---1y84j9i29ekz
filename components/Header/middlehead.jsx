import Link from 'next/link';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";


const Middlehead = () => {
  return (
    <>
    <div className='flex justify-between items-center bg-black text-white pl-20 pr-20'>
        <span className='flex items-center'>
        <CiLocationOn />TRACK YOUR ORDER
        </span>
        <span className='flex justify-between gap-2'>
            <Link href={'/login'}>LOG IN | SIGN UP</Link>
 
        </span>
    </div>
    </>
  )
}

export default Middlehead;