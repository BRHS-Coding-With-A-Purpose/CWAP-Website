import styles from '../../styles/Home.module.css';
import Displaybox from './Displaybox';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Logo from './Logo';
import { useInView } from 'framer-motion';
import Typed from 'react-typed'


const DescriptionEnter = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

const TitleLogo = {
    hidden: {
        x: -300
    },
    visible: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 1
        }
    }
}

const Title = {
    hidden: {
        y: -300
    },
    visible: {
        y: 0,
        transition: {
            type: 'tween',
            duration: 1
        }
    }
}

const Description = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    return(
        <DescriptionWrapper variants={DescriptionEnter} initial="hidden" animate="visible" ref={ref}>
            <motion.div variants={TitleLogo}>
                <Logo width={320} height={320} className={styles.biglogowrapper} biglogo/>
            </motion.div>
            <TitleWrapper variants={Title} className={styles.title}>
                <StyledIndent>
                {'>'}
                </StyledIndent>
                <StyledTyping
                    strings={[
                        "Coding",
                        "Learning",
                        "Tinkering",
                        "Designing",
                        "Thinking",
                        "Growing",
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                />
                <StyledTitle>
                With A Purpose
                </StyledTitle>
            </TitleWrapper>
        </DescriptionWrapper>
    );
}

const StyledTyping = styled(Typed)`
    color: var(--initial-accent);
    font-size: 70px;
    margin-right: auto;
    margin-left: 1rem;
`
const StyledTitle = styled(motion.h1)`
    font-size: 70px;
    margin-right: 14rem;
    margin-left: auto;
`

const StyledIndent= styled(motion.h1)`
    font-size: 70px;
    color: var(--initial-accent);
`

const TitleWrapper = styled(motion.div)`
    display: flex;
    width: 1200px;
    max-width: 90%;
    margin-top: 340px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    font-size: 100px;
    text-align: center;
    padding: 1rem;`

const DescriptionWrapper = styled(motion.div)`
    display: flex;
`

export default Description;