import { motion, AnimatePresence } from 'framer-motion'
import styles from '../../styles/Home.module.css'
import Logo from '../Display/Logo'
import Link from 'next/link'
import { useState }  from 'react'

const pages = [["About", "/About", 0], ["Contact Us", "/ContactUs", 1], ["Projects", "/Projects", 2], ["Blog", "/Blog", 3]]

const NavBar = () => {

    const [selected, setSelected] = useState(null);

    return (
        <motion.div initial={{y: -70}} animate={{y: 0}} transition={{duration: 1, type:'tween', stiffness:40}} className={styles.navbar}>
            <Link href="/">
                <Logo width={60} height={60} className={styles.navbarlogo}/>
            </Link>
                {pages.map((el) => {
                    if (!(selected == el[2]))
                        return (
                            <motion.a layoutId={el[2]} href={el[1]} className={styles.navbartext} onMouseEnter={() => setSelected(el[2])}>
                                <h1>
                                    {el[0]}
                                </h1>
                            </motion.a>
                        )
                    else
                        return (
                            <motion.a 
                                layoutId={el[2]} href={el[1]} 
                                className={styles.navbartext} 
                                onMouseLeave={() => setSelected(null)}
                                animate={{
                                    scale: [1, 1.5, 1.5, 1, 1],
                                    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                                  }}
                                >
                                <h1>
                                    {el[0]}
                                </h1>
                            </motion.a>
                        )
                })}
        </motion.div>
    );
}

export default NavBar;