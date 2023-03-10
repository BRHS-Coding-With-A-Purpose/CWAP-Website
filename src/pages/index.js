import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Displaybox from '../comps/Display/Displaybox'
import Logo from '../comps/Display/Logo'
import Description from '../comps/Display/Description'
import Footer from '../comps/Layout/Footer'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { ParallaxProvider } from 'react-scroll-parallax'
import { useState} from 'react'
import NavBar from '../comps/Layout/NavBar'
import ParallaxLayout from '../comps/Layout/ParallaxLayout'
import { motion } from 'framer-motion'
import AboutUs from '../comps/Display/AboutUs'
import { AiOutlinePhone, AiFillCode, AiOutlineLike, AiFillFileText } from 'react-icons/ai'
import Mission from '../comps/Display/Mission'
import styled from 'styled-components'
import Media from 'react-media'

const Home = () => {

  const [selected, setSelected] = useState(null);

  return (
    <Media queries={{
      small: "(max-width: 600px)",
      large: "(min-width: 601px)"
    }}>
      {matches => (
      <Parallax pages={3 + matches.small * 1.15} className={styles.parallax}>
        <ParallaxLayer factor={1} className={styles.top} style={{backgroundImage:'url(/goodbackground.png)', backgroundSize: 'cover'}}>
          <NavBar Motion={true}/>
        </ParallaxLayer>
        <ParallaxLayer factor={0.5} offset={0.1} speed={0.5}>
          <Description>
            Coding With A Purpose
          </Description>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5} style={{backgroundColor:'var(--black)', backgroundSize: 'cover'}}>
          <Mission/>
        </ParallaxLayer>
        <ParallaxLayer offset={2 + matches.small} speed={0.5}>
          <AboutUs/>
        </ParallaxLayer>
        <ParallaxLayer factor={0.1} offset={3+matches.small * 1.05}>
          <Footer/>
        </ParallaxLayer>
      </Parallax>    
      )}
    </Media>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <ParallaxProvider motion>
        {page}
    </ParallaxProvider>
  )
}

export default Home;
