import { ParallaxProvider } from "react-scroll-parallax"
import { Parallax } from "react-scroll-parallax"
import styles from "../../styles/Home.module.css"
import Header from "./NavBar"
import Footer from "./Footer"

const ParallaxLayout = ( props ) => {

    return (
        <Parallax pages={2} className={styles.parallax}>
            {/*props.Header && <Header/>*/}
            { props.children }
            {/*props.Footer && <Footer/>*/}
        </Parallax>
    )
}

export default ParallaxLayout;