"use client";
import Chat from '@/components/Chat'
import SideBar from '@/components/SideBar';
import React from 'react'

const chat = () => {
  return (
    <div>
      <SideBar path='chats'>
        <Chat/>
      </SideBar>
      
    </div>
  )
}

export default chat
