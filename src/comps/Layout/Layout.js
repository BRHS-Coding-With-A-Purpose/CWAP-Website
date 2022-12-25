import styles from '../../styles/Home.module.css'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ( {children} ) => {

    console.log(children);

    return (
        <>
            <NavBar/>
                {children}
            <Footer/>
        </>
    );
}

export default Layout;