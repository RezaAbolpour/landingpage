"use client";
import LandingDesktop from './component/Desktop/LandingDesktop';
import { useMediaQuery } from 'react-responsive'
import LandingMobile from './component/LandingMobile/LandingMobile';
import React from 'react'
export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 450px)' })
  return (
    <>
      {isMobile ? (
        <LandingMobile/>
      ) : (
        <LandingDesktop />
      )}
    </>

  )
}
