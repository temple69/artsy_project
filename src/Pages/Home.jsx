import React from 'react'
import Navbar from '../Components/Navbar'
import Photograpy from '../Components/Sections/Photograpy'
import Featured from '../Components/Sections/Featured'

const Home = () => {
  return (
    <>
    <Navbar/>
    <main className="px-8">
    <Photograpy/>
    <Featured/>
    </main>
    </>
    
  )
}

export default Home