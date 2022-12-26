import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import styles from '../styles/Home.module.css'
import NavBar from "../comps/Layout/NavBar"
import Footer from "../comps/Layout/Footer"
import Displaybox from "../comps/Display/Displaybox"
import styled from "styled-components"
import { useState } from 'react'
import ContactCard from "../comps/Display/ContactCard"
import FullDisplay from "../comps/Display/FullDisplay"

const contacts = [
    {
        name: "Instagram",
        description: "@brhs.codingwithapurpose",
        link: "https://www.instagram.com/brhs.codingwithapurpose/",
        icon: "/Instagram.png"
    },
    {
        name: "Discord",
        description: "discord.gg/A6ehmXGP9e",
        link: "https://discord.gg/A6ehmXGP9e",
        icon: "/Discord.png"
    },
    {
        name: "Github",
        description: "BRHS-Coding-With-A-Purpose",
        link: "https://github.com/BRHS-Coding-With-A-Purpose",
        icon: "/GitHub.png"
    },
    {
        name: "Google Classroom",
        description: "i7glwq4",
        link: "https://classroom.google.com",
        icon: "/GoogleClassroom.png"
    },
]

const ContactUs = () => {

    const [selected, setSelected] = useState(null);

    return(
        <Parallax pages={1.25} className={styles.parallax}>
            <ParallaxLayer factor={1} className={styles.top} style={{backgroundColor:'var(--gray)', backgroundSize: 'cover'}}/>
            <ParallaxLayer factor={0.25} className={styles.top} style={{backgroundColor:'var(--gray)', backgroundSize: 'cover'}}/>
            <ParallaxLayer factor={0.5}>
                <NavBar/>
            </ParallaxLayer>
            <ParallaxLayer factor={0.2} offset={0.1}> 
                <AboutDescription>
                    <Displaybox title="Contact Us" href="/ContactUs" className={styles.displayboxcenter} textalign={styles.center}>
                        Reach out with any questions.
                    </Displaybox>
                </AboutDescription>
            </ParallaxLayer>
            <ParallaxLayer factor={0.8} speed={0.5} offset={0.3}>
                <OfficerGrid>
                    
                    {contacts.map((el) => {

                    if (!(selected == el.name))
                        return (
                        <ContactCard
                            title={el.name} 
                            position={el.position} 
                            href={el.link} 
                            src={el.icon} size={200} 
                            key={el.name}
                            onMouseEnter={() => setSelected(el.name)}
                        >
                            {el?.description}
                        </ContactCard>
                        )
                    else 
                        return(
                        <ContactCard 
                            title={el.name} 
                            position={el.position} 
                            href={el.link} 
                            src={el.icon} size={200} 
                            key={el.name}
                            onMouseLeave={() => setSelected(null)}
                            animate={{
                                scale: [1, 1.25, 1.25 , 1, 1],
                                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                            }}
                        >
                            {el?.description}
                        </ContactCard>
                        )
                    })}


                </OfficerGrid>
            </ParallaxLayer>
            <ParallaxLayer factor={0.1} offset={1.15}>
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
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(25%, auto));
    max-width: 90%;
    border: 2px solid var(--tile-border); 

    @media all and (max-width: 1200px) {

        width: 1500px;
        top: 10rem;
        margin-left: auto;
        margin-right: auto;
        display: grid;
        grid-template-columns: repeat(2, minmax(25%, auto));
        max-width: 90%;
        border: 2px solid var(--tile-border); 
    }

`

ContactUs.getLayout = function getLayout(page) {
    return (
      <ParallaxProvider>
          {page}
      </ParallaxProvider>
    )
}
  

export default ContactUs;