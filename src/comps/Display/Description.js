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
                <StyledDiv>
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
                </StyledDiv>
                <StyledTitle>
                With A Purpose
                </StyledTitle>
            </TitleWrapper>
        </DescriptionWrapper>
    );
}

const StyledDiv = styled.div`
    display: flex;
    margin: 2rem;

    @media all and (max-width: 1200px) {
        margin-left: 25%;
    }
`

const StyledTyping = styled(Typed)`
    color: var(--initial-accent);
    font-size: 70px;
    margin-right: auto;
    margin-left: 1rem;
`
const StyledTitle = styled(motion.h1)`
    font-size: 70px;
    margin-right: 13rem;
    margin-left: auto;

    @media all and (max-width: 1200px) {
        margin-right: -3rem;
    }
`

const StyledIndent= styled(motion.h1)`
    font-size: 70px;
    color: var(--initial-accent);
`

const TitleWrapper = styled(motion.div)`

    width: 1200px;
    max-width: 90%;
    margin-top: 340px;
    margin-bottom: 20px;
    font-size: 100px;
    padding: 1rem;
    text-align: center;

    @media all and (min-width: 1200px) {
        display: flex;
    }

    @media all and (max-width: 1200px) {
        margin-top: 0px;
    }
`

const DescriptionWrapper = styled(motion.div)`

    @media all and (min-width: 1200px) {
        display: flex;
    }
`

export default Description;