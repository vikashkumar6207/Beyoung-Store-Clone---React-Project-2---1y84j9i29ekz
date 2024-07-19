import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";


const Middlehead = () => {


  const [istoken, setIstoken] = useState(false);
 
 useEffect(() => {
  if(sessionStorage.getItem("istoken")){
    
   setIstoken(true);
   console.log('setIstoken middle', istoken);
  }
 },[]);
  return (
    <>
    <div className='flex justify-between items-center bg-black text-white pl-3 pr-3'>
        <span className='flex items-center'>
        <CiLocationOn />TRACK YOUR ORDER
        </span>
        <span className='flex justify-between gap-2'>
            
           {istoken ? (<Link href={'/myaccount'}>MY ACCOUNT | LOG OUT</Link>) : (<Link href={'/login'}>LOG IN | SIGN UP</Link>)}
 
        </span>
    </div>
    </>
  )
}

export default Middlehead;