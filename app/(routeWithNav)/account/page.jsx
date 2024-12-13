"use client";
import CompanyProfile from '@/components/Account';
import SideBar from '@/components/SideBar';
import React from 'react'

const page = () => {
  return (
    <div>
        <SideBar>
            <CompanyProfile/>
        </SideBar>
      
    </div>
  )
}

export default page
