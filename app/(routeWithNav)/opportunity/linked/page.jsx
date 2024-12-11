"use client";
import LinkedOpportunityCards from '@/components/linkedOpportunityCard';
import SideBar from '@/components/SideBar'
import React from 'react'

const linked = () => {
  return (
    <div>
        <SideBar>
            <LinkedOpportunityCards/>
        </SideBar>
      
    </div>
  )
}

export default linked
