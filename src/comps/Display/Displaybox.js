import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { SocialsLink } from '../Layout/Footer';
import { Stint_Ultra_Condensed } from '@next/font/google';

const flexBox = (flex, children) => {
  if (flex) {
    return (
      <StyledDiv>
        {children}
      </StyledDiv>
    )
  } else {
    return (
      <StyledDiv2>
        {children}
      </StyledDiv2>
    )
  }
}

const Displaybox = (props) => {

  const {title, position, href="/", children, src, size=100, key, className=styles.displaybox, flexbox=true, onMouseEnter, onMouseLeave, animate, initial, Icon, style, variants, whileHover, width, height} = props;

    return(
        <motion.a href={href} layoutId={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} inital={initial} animate={animate} style={style} variants={variants} whileHover={whileHover}>
          {flexbox && <StyledDiv>
            <div>
                <StyledH1>
                  {title}
                </StyledH1>
                <StyledH3>
                  {position}
                </StyledH3>
                <StyledP>
                  {children}
                </StyledP>
            </div>
            {(src && !width) && <Image src={src} width={size} height={size} className={styles.gridimage}/>}
            {(src && width) && <Image src={src} width={width} height={height} className={styles.gridimage}/>}
            {Icon && <Icon size={size} className={styles.icon}/>}
          </StyledDiv>}
          {!flexbox && <StyledDiv2>
            <div>
                <StyledH1>
                  {title}
                </StyledH1>
                <StyledH3>
                  {position}
                </StyledH3>
                <StyledP>
                  {children}
                </StyledP>
            </div>
            {(src && !width) && <Image src={src} width={size} height={size} className={styles.gridimage}/>}
            {(src && width) && <Image src={src} width={width} height={height} className={styles.gridimage}/>}
            {Icon && <Icon size={size} className={styles.icon}/>}
          </StyledDiv2>}
        </motion.a>
    )
}

const StyledH3 = styled.h3`
    font-size: 21px;
`

const StyledH1 = styled.h1`
    font-size: 27px;
    color: var(--initial-accent);
`

const StyledP = styled.p`
    margin-top: 0.5rem;
    font-size: 21px;

`

const StyledDiv = styled.div`
    margin: 1rem 1.2rem;
    border: 0px solid var(--accent);
    border-radius: 10px;
    background: var(--gray);
    border: 1px solid var(--gray);
    padding: 1rem;

    &:hover{
      border: 1px solid var(--primary);
      color: var(--primary);
    }

    @media all and (min-width: 600px) {
      display: flex;
    }
`

const StyledDiv2 = styled.div`
    display: flex;
    margin: 1rem 1.2rem;
    border: 0px solid var(--accent);
    border-radius: 10px;
    background: var(--gray);
    border: 1px solid var(--gray);
    padding: 1rem;

    &:hover{
      border: 1px solid var(--primary);
      color: var(--primary);
    }
`

const StyledAnchor = styled(motion.a)`
    text-align: center;
`

export default Displaybox; 