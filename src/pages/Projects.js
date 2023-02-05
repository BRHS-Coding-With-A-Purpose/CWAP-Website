import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import styles from '../styles/Home.module.css'
import NavBar from "../comps/Layout/NavBar"
import Footer from "../comps/Layout/Footer"
import Displaybox from "../comps/Display/Displaybox"
import styled from "styled-components"
import { useState, useEffect } from 'react'
import ContactCard from "../comps/Display/ContactCard"
import FullDisplay from "../comps/Display/FullDisplay"

const projects = [
    {
        name: "Shitty Weather App",
        description: "(Actually works)",
        link: "https://HTML-Tags-Example.alanjiang1.repl.co",
        icon: "/ShittyWeather.png"
    },
    {
        name: "COVID-19 Predictor",
        description: "It predicts COVID-19 cases",
        link: "https://replit.com/@HarnoorSingh4/Vaccine-prediction-data#main.py",
        icon: "/LinearRegressionThing.png"
    },
    {
        name: "Restaurants",
        description: "You are what you eat",
        link: "https://replit.com/@alawnjr/Small-Business-Project#main.py",
        icon: "/RestaurantThing.png"
    },
    {
        name: "Coming Soon!",
        description: "Pls join our club",
        link: "https://github.com/BRHS-Coding-With-A-Purpose",
        icon: "/GitHub.png"
    }
]

const Projects = () => {

    const [selected, setSelected] = useState(null);

    return(
        <Parallax pages={1.25} className={styles.parallax}>
            <ParallaxLayer factor={1} className={styles.top} style={{backgroundImage:'url(/goodbackground.png)', backgroundSize: 'cover'}}/>
            <ParallaxLayer factor={1}>
                <OfficerGrid>
 
                {projects.map((el) => {
                    if (!(selected == el.name))
                        return (
                        <ContactCard
                            title={el.name} 
                            position={el.position} 
                            href={el.link} 
                            src={el.icon} size={200} 
                            key={el.name}
                            className={styles.projectimage}
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
                            className={styles.projectimage}
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
            <ParallaxLayer factor={0.1}>
                <NavBar/>
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

const OfficerGrid = styled.div`
    width: 1500px;
    margin-top: 12rem;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(4, minmax(25%, auto));
    max-width: 90%;
    border: 2px solid var(--tile-border); 
    
    @media all and (max-width: 1200px) {
        margin-top: 5rem;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(2, minmax(25%, auto));
    }

    @media all and (max-width: 600px) {
        margin-right: 2rem;
    }


`

Projects.getLayout = function getLayout(page) {
    return (
      <ParallaxProvider>
          {page}
      </ParallaxProvider>
    )
}
  

export default Projects;