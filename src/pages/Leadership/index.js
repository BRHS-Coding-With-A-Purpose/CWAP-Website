import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import styles from '../../styles/Home.module.css'
import NavBar from "../../comps/Layout/NavBar"
import Footer from "../../comps/Layout/Footer"
import Displaybox from "../../comps/Display/Displaybox"
import styled from "styled-components"
import { useMediaQuery } from 'react-responsive'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import Media from 'react-media'

export const officers = [
    {
    name: "Ayush",
    position: "President",
    image: "/Officers/Ayush.jpg"
    },
    {
        name: "Alan",
        position: "Vice President",
        image: "/Alan1.jpg"
        },
    {
    name: "Alexander",
    position: "Vice President",
    image: "/Alexander.png"
    },
    {
    name: "Isaac",
    position: "Vice President",
    image: "/Isaac.jpg"
    },
    {
        name: "Ethan",
        position: "Code Developer",
        image: "/Ethan.jpg"
        },
    {
    name: "???",
    position: "New Officer?",
    image: "/CWAP.png"
    }
]

const alumni = [
    {
    name: "Sonia",
    position: "Former President",
    image: "/CWAP.png"
    },
    {
    name: "Mahika",
    position: "Former Vice President",
    image: "/CWAP.png"
    }
    ]


const BoardAnimate = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const About = () => {

    const [selectedOfficer, setSelectedOfficer] = useState(null);
    const [selectedAlumni, setSelectedAlumni] = useState(null);

    return(
        <Media queries={{
            small: "(max-width: 600px)",
            medium: "(max-width: 1200px) and (min-width: 601px)",
            large: "(min-width: 1201px)"
        }}>

        {matches => (
            <Parallax pages={2 + matches.small * 1.75} className={styles.parallax}>
                <ParallaxLayer factor={1 + matches.small} className={styles.top} style={{backgroundImage:'url(/goodbackground.png)', backgroundSize: 'cover'}}/>
                <ParallaxLayer factor={0.5 - matches.small * 0.4}>
                    <NavBar Motion/>
                </ParallaxLayer>
                <ParallaxLayer factor={1} offset={0.3 - matches.small * 0.1}>
                    <motion.div variants={BoardAnimate} initial="hidden" animate="visible">
                        <AboutDescription>
                            <h1 className={styles.topdescription}>
                                Leadership
                            </h1>
                        </AboutDescription>
                        <OfficerGrid>

                        {officers.map((el) => {

                        if (!(selectedOfficer == el.name))
                            return (
                            <Displaybox 
                                title={el.name} 
                                position={el.position} 
                                href={`/Leadership/${el.name}`} 
                                src={el.image} size={175} 
                                key={el.name}
                                onMouseEnter={() => setSelectedOfficer(el.name)}
                            >
                                {el?.description}
                            </Displaybox>
                            )
                        else 
                            return(
                            <Displaybox 
                                title={el.name} 
                                position={el.position} 
                                href={`/Leadership/${el.name}`} 
                                src={el.image} size={175} 
                                key={el.name}
                                onMouseLeave={() => setSelectedOfficer(null)}
                                animate={{
                                    scale: [1, 1.25, 1.25 , 1, 1],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                }}
                            >
                                {el?.description}
                            </Displaybox>
                            )
                        })}
                        </OfficerGrid>
                    </motion.div>
                </ParallaxLayer>
                <ParallaxLayer factor={0.5} offset={1.1 + matches.medium * 0.2 + matches.small * 1.5}>
                    <AboutDescription>
                        <h1 className={styles.topdescription}>
                            Alumni
                        </h1>
                    </AboutDescription>
                    <OfficerGrid>
                    {alumni.map((el) => {
                        if (!(selectedAlumni == el.name))
                            return (
                            <Displaybox 
                                title={el.name} 
                                position={el.position} 
                                href={`/Leadership/${el.name}`} 
                                src={el.image} size={175} 
                                key={el.name}
                                onMouseEnter={() => setSelectedAlumni(el.name)}
                            >
                                {el?.description}
                            </Displaybox>
                            )
                        else 
                            return(
                            <Displaybox 
                                title={el.name} 
                                position={el.position} 
                                href={`/Leadership/${el.name}`} 
                                src={el.image} size={175} 
                                key={el.name}
                                onMouseLeave={() => setSelectedAlumni(null)}
                                animate={{
                                    scale: [1, 1.25, 1.25 , 1, 1],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                }}
                            >
                                {el?.description}
                            </Displaybox>
                            )
                        })}
                    </OfficerGrid>
                    
                </ParallaxLayer>
                <ParallaxLayer factor={0.1} offset={1.9 + matches.small * 1.75}>
                    <Footer/>
                </ParallaxLayer>
            </Parallax>
        )}
        </Media>
    )
}

const AboutDescription = styled.div`

    text-align: center;
    width: 1500px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
`

const OfficerGrid = styled.div`
    width: 1500px;
    top: 10rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(25%, auto));
    max-width: 100%;
    border: 2px solid var(--tile-border); 

    @media all and (max-width: 1200px) {
        grid-template-columns: repeat(2, minmax(25%, auto));
    }

    @media only screen and (max-width: 600px) {
          grid-template-columns: repeat(1, minmax(50%, auto));
          max-width: 95%;
      }

`

About.getLayout = function getLayout(page) {
    return (
      <ParallaxProvider>
          {page}
      </ParallaxProvider>
    )
}
  

export default About;