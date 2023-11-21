"use client";
import LandingDesktop from './component/Desktop/LandingDesktop';
import { useMediaQuery } from 'react-responsive'
import LandingMobile from './component/LandingMobile/LandingMobile';
export default function Home() {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
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
