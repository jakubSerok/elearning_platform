import React from 'react'
import Image from 'next/image'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"

const InviteFriend = () => {
  return (
    <div className='bg-zinc-800 flex flex-col items-center mt-8 p-4 border rounded-2xl'><Image src="/mail.png" alt="mail" width={80} height={80}/>
        <h2 className='font-3xl font-game'>Invite Friend</h2>
        <p className='font-game'>Having Fun? Share the love with a friend ! Enter and email and we will send them a personal invite</p>
        <div className='flex gap-2 items-center mt-5'>
            <Input placeholder='Enter Invite Email' className='min-w-sm'/>
            <Button variant="pixel" className='font-game ' >Invite </Button>
        </div>
     </div>
  )
}

export default InviteFriend