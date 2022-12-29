import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Displaybox from "./Displaybox"
import ContactCard from "./ContactCard"
import styles from '../../styles/Home.module.css'
import Footer from "../Layout/Footer"
import { AiOutlinePhone, AiFillCode, AiOutlineLike, AiFillFileText } from 'react-icons/ai'
import styled from "styled-components"
import Blog from "./Blog"


const blog = [
    {
    "title": "Alan",
    "name": "Idk",
    "article": "I do stuff",
    "date": "12/29/22",
    "images": [
        "/codecode.jpg",
        "/contactus.jpg",
        "/CWAP.png"
    ]
    },
    {
    "title": "Ayush",
    "name": "President",
    "article": "Hi everyone! My title is Ayush and I am the president of Coding With A Purpose. I have been in this club since freshman year, joining originally to gain experience in coding projects. This club has now grown to much more than just coding, I have met fascinating people, made lifelong experiences, and gotten to work on incredible meaningful projects. Outside of Coding With A Purpose, I am a member of Team 303 in FRC Robotics and Model UN. In my free time I enjoy listening to music and sleeping although I don’t get a lot.",
    "date": "12/29/22",
    "images": [
        "/codecode.jpg",
        "/Officers/Ayush.jpg",
        "/CWAP.png"
    ]
    },
    {
    "title": "Alexander",
    "name": "Code Developer",
    "date": "12/29/22",
    "article": "I do stuff",
    "images": [
        "/codecode.jpg",
        "/contactus.jpg",
        "/CWAP.png"
    ]
    },
    {
    "title": "Ethan",
    "name": "Code Developer",
    "date": "12/29/22",
    "article": "I do stuff",
    "images": [
        "/codecode.jpg",
        "/contactus.jpg",
        "/CWAP.png"
    ]
    },
    {
    "title": "Aarnav",
    "name": "Project Researcher",
    "date": "12/29/22",
    "article": "I do stuff",
    "images": [
        "/codecode.jpg",
        "/contactus.jpg",
        "/CWAP.png"
    ]
    }
]

const IntroAnimation = (isInView) => {
    return({
        hidden: {
            opacity: 0,
            X: 0
        },
        visible: {
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : 300,
            transition: {
                type: 'tween'
            }
        }
    })
}

const PictureAnimation = (isInView) => {
    return({
        hidden: {
            opacity: 0,
            X: 0
        },
        visible: {
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -300,
            transition: {
                delay: 0.5,
                type: 'tween'
            }
        }
    })
}

const  IntroAnimation2 = (isInView) => {
    return({
        hidden: {
            opacity: 0,
            X: 0
        },
        visible: {
            opacity: isInView ? 1 : 0,
            x: isInView ? 0 : -300,
            transition: {
                delay: 1,
                type: 'tween'
            }
        }
    })
}

const DescriptionAnimation = (isInView) => {
    return ({
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: isInView ? 0.1 : 0,
            transition: {
                duration: 1,
                when: "beforeChildren",
                staggerChildren: 0.5
            }
        }
    })
}

const BottomAnimation = (bottomInView) => {
    return ({
        hidden: {
            opacity: 0,
            Y: 0
        },
        visible: {
            opacity: bottomInView ? 1 : 0,
            Y: bottomInView ? 0 : -300,
            transition: {
                delay: 1,
                duration: 2
            }
        }
    })
}




const Mission = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const bottomref = useRef(null)
    const bottomInView = useInView(bottomref, {once: true})

    return(
            <StyledMission ref={ref}>
                <motion.div variants={IntroAnimation(isInView)} initial="hidden" animate="visible">
                    <Displaybox title="We are Coding With a Purpose">
                        A BRHS based coding club that hopes to teach and inspire
                        the next generation of coders. We work collaboratively on
                        projects that help impact the community
                    </Displaybox>
                </motion.div>
                <motion.div variants={PictureAnimation(isInView)} initial="hidden" animate="visible">
                    <Displaybox title="This is a picture of us" src='/ClubPicture.png' width={300} height={200}>
                        Trust us we are cool people. We just dont have the budget for a camera.
                    </Displaybox>
                </motion.div>
                <motion.div variants={IntroAnimation2(isInView)} initial="hidden" animate="visible" ref={bottomref}>
                    <Displaybox title="At CWAP, it's not just about the code" >
                        We have a thriving community of inspired and dedicated members who make the club what it is. 
                    </Displaybox>
                </motion.div>
                <SectionWrapper variants={BottomAnimation(bottomInView)} initial="hidden" animate="visible">
                    <StyledH1>
                        Blog
                    </StyledH1>
                    <BlogWrapper>
                            <Blog title="Christmas" author="Alan Jiang" date="12/29/22">
                                CWAP Holds Christmas Festivities
                            </Blog>
                            <Blog title="Weather App" author="Alan Jiang" date="12/29/22">
                                CWAP continues to work on Weather App
                            </Blog>
                            <Blog title="Stuff" author="Alan Jiang" date="12/29/22">
                                CWAP Holds Christmas Festivities
                            </Blog>
                    </BlogWrapper>
                    <StyledH1>
                        Projects
                    </StyledH1>
                    <BlogWrapper>
                            <Blog title="Shitty Weather App" author="" date="12/29/22" src="/ShittyWeather.png" href="https://HTML-Tags-Example.alanjiang1.repl.co">
                            </Blog>
                            <Blog title="Linear Regression" author="" date="12/29/22" src="/LinearRegressionThing.png" href="https://replit.com/@HarnoorSingh4/Vaccine-prediction-data#main.py">
                            </Blog>
                            <Blog title="Local Restaurants" author="" date="12/29/22" src="/RestaurantThing.png" href="https://replit.com/@alawnjr/Small-Business-Project#main.py">
                            </Blog>
                    </BlogWrapper>
                </SectionWrapper>
            </StyledMission>
    )
}

const SectionWrapper = styled(motion.div)`
    margin: 10rem auto;
`

const StyledH1 = styled.h1`
    margin-left: 1rem;
`

const BlogWrapper = styled.div`
    diplay: flex;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(25%, auto));
`

const StyledMission = styled(motion.div)`
    width: 800px;
    max-width: 90%;
    margin: auto;
`

export default Mission;