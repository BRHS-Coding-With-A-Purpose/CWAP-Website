import styles from '../../styles/Home.module.css';
import Displaybox from './Displaybox';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Logo from './Logo';

const Description = () => {
    return(
        <DescriptionWrapper
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
                type: "tween"
            }}
        >
            <motion.div initial={{x:-300}} animate={{x:0}} transition={{duration: 1, type:"tween"}}>
                <Logo width={320} height={320} className={styles.biglogowrapper} biglogo/>
            </motion.div>
            <motion.h1 initial={{y:-300}} animate={{y:0}} transition={{duration: 1, type:"tween"}} className={styles.title}>
                Coding With A Purpose
            </motion.h1>
        </DescriptionWrapper>
    );
}

const DescriptionWrapper = styled(motion.div)`
    display: flex;
`

export default Description;