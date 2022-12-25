import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import styles from '../../styles/Home.module.css'
import NavBar from "../../comps/Layout/NavBar"
import Footer from "../../comps/Layout/Footer"
import Displaybox from "../../comps/Display/Displaybox"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence} from 'framer-motion'
import Media from 'react-media'

export const officers = [
    {
    name: "Alan",
    position: "Idk",
    image: "/CWAP.png"
    },
    {
    name: "Ayush",
    position: "President",
    image: "/Officers/Ayush.jpg"
    },
    {
    name: "Alexander",
    position: "Code Developer",
    image: "/CWAP.png"
    },
    {
    name: "Ethan",
    position: "Code Developer",
    image: "/CWAP.png"
    },
    {
    name: "Aarnav",
    position: "Project Researcher",
    image: "/CWAP.png"
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
    position: "President",
    image: "/CWAP.png"
    },
    {
    name: "Mahika",
    position: "Vice President",
    image: "/CWAP.png"
    }
    ]



const About = () => {

    const [selectedOfficer, setSelectedOfficer] = useState(null);
    const [selectedAlumni, setSelectedAlumni] = useState(null);

    return(
        <Parallax pages={2} className={styles.parallax}>
            <ParallaxLayer factor={1} className={styles.top} style={{backgroundImage:'url(/background2.jpg)', backgroundSize: 'cover'}}/>
            <ParallaxLayer factor={0.25} className={styles.top} style={{backgroundColor:'var(--gray)', backgroundSize: 'cover'}}/>
            <ParallaxLayer factor={0.5}>
                <NavBar/>
            </ParallaxLayer>
            <ParallaxLayer factor={0.2} offset={0.1}> 
                <AboutDescription>
                    <Displaybox title="Our Story" href="/About" className={styles.displayboxcenter} textalign={styles.center}>
                        Coding With A Purpose started off in 2020 and has been helping students of all levels learn programming.
                    </Displaybox>
                </AboutDescription>
            </ParallaxLayer>
            <ParallaxLayer factor={1} speed={0.25} offset={0.3}>
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
                        href={`/About/${el.name}`} 
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
                        href={`/About/${el.name}`} 
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
            </ParallaxLayer>
            <ParallaxLayer factor={0.5} speed={0.1} offset={1.1}>
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
                            href={`/About/${el.name}`} 
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
                            href={`/About`} 
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
            <ParallaxLayer factor={0.1} offset={1.9}>
                <Footer/>
            </ParallaxLayer>
        </Parallax>
    )
}

const AboutDescription = styled.div`

    text-align: center;
    width: 1500px;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
`

/*    width: 1500px;
    top: 10rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    max-width: 100%;
    border: 2px solid var(--tile-border); */ 

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
        width: 1500px;
        top: 10rem;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(2, minmax(25%, auto));
        max-width: 100%;
        border: 2px solid var(--tile-border); 
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