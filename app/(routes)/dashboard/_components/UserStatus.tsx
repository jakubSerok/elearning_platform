"use client"

import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'

const UserStatus = () => {

    const {user }= useUser()
  return (
    <div className='p-7 border-4 roundend-2xl'>
        <div className='flex gap-3 items-center'>
        <Image src="/alexwalk.png" alt="walk" width={70} height={70}/>
    <h2 className='font-game text-2xl'>{user?.primaryEmailAddress?.emailAddress}</h2></div>
        <div className='grid grid-cols-2 gap-5'>
            <div className='flex gap-3 items-center'>
                <Image src="/star-glasses.png" alt="star" width={35} height={35}/>
            <div className='flex gap-3 items-center '>
            <h2 className='font-3xl font-game'>20</h2>
            <h2 className='font-game text-gray-500 text-xl'>Total Revords</h2>

            </div>
            </div>
              <div className='flex gap-3 items-center'>
                <Image src="/dancing.png" alt="star" width={35} height={35}/>
            <div className='flex gap-3 items-center '>
            <h2 className='font-3xl font-game'>3</h2>
            <h2 className='font-game text-gray-500 text-xl'>Badge</h2>

            </div>
            </div>
              <div className='flex gap-3 items-center'>
                <Image src="/growth.png" alt="star" width={35} height={35}/>
            <div className='flex gap-3 items-center '>
            <h2 className='font-3xl font-game'>7</h2>
            <h2 className='font-game text-gray-500 text-xl'>Daily Streak</h2>

            </div>
            </div>

        </div>
    </div>
  )
}

export default UserStatus