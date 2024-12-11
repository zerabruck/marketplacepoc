"use client";
import OpportunityCards from '@/components/OpporunityCard'
import SideBar from '@/components/SideBar'
import React from 'react'

const listed = () => {
  return (
    <div>
        <SideBar>
            <OpportunityCards/>
        </SideBar>
      
    </div>
  )
}

export default listed
