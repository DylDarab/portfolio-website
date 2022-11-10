import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Component/Navbar'
import { useHeightStore } from './heightStore'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import Banner from './Component/Banner'

function App() {
  const setHeight = useHeightStore((state) => state.setHeight)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.scrollY)
    })
  }, [])

  return (
    <>
      <Navbar />
      <Banner />
      <Box height="5000px"></Box>
    </>
  )
}

const panel = {
  height: '500vh',
  width: '100vw',
  position: 'absolute',
  textAlign: 'center',
}

export default App
