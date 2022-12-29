import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Displaybox from "./Displaybox"
import styles from '../../styles/Home.module.css'
import Footer from "../Layout/Footer"
import { AiOutlinePhone, AiFillCode, AiOutlineLike, AiFillFileText } from 'react-icons/ai'

const grid = [
  {
    title: "About",
    href: "/About",
    image: AiOutlineLike,
    description: "What is our Mission?"
  },
  {
    title: "Contact Us",
    href: "/ContactUs",
    image: AiOutlinePhone,
    description: "Any Questions?"
  },
  {
    title: "Projects",
    href: "/Projects",
    image: AiFillCode,
    description: "Cool stuff we do"
  },
  {
    title: "Blog",
    href: "/Blog",
    image: AiFillFileText,
    description: "Interesting articles"
  }
]

const DisplayboxAnimation = {
    hover: {
        scale: 1.25
    }
}



const AboutUs = () => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true})

    return(
        <>
            <motion.div 
            ref={ref}
            style={{
                transform: isInView ? "none" : "translateY(200px)",
                opacity: isInView ? 1: 0,
                transition: "all 1.6s"
            }}>
            <h1 className={styles.bottomdescription}>
            About Us
            </h1>
            <div className={styles.grid}>
            
            {grid.map((el) => 
                <Displaybox 
                    title={el.title} 
                    href={el.href} 
                    Icon={el.image}
                    key={el.title}
                    variants={DisplayboxAnimation}
                    whileHover="hover">
                    {el?.description}
                </Displaybox>
            )}

            </div>
        </motion.div>
        <Footer/>
      </>
    )
}

export default AboutUs;