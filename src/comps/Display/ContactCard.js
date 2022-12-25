import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import styled from 'styled-components';
import { motion } from 'framer-motion'



const ContactCard = (props) => {

  const {title, href="/", children, src, size=100, key, textalign, className, onMouseEnter, onMouseLeave, animate} = props;

    return(
        <motion.a href={href} layoutId={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} animate={animate}>
          <ContentWrapper>
                <TextWrapper>
                  <h1 className={textalign}>
                    {title}
                  </h1>
                  <h3 className={textalign}>
                    {children}
                  </h3>
                  {src && <ImageWrapper><Image src={src} width={size} height={size} className={className}/></ImageWrapper>}
                </TextWrapper>
          </ContentWrapper>
        </motion.a>
    )
}

const ImageWrapper = styled.div`
    text-align: center;
    margin: 50px auto;
    border-radius: 10px;
`

const TextWrapper = styled.div`
    text-align: center;

    @media all and (max-width: 1200px) {
        text-align: center;
    }
`

export const ContentWrapper = styled.div`
    text-align: center;
    margin: 4rem 1.2rem;
    border: 4px solid var(--accent);
    border-radius: 10px;
    background-color: rgba(38,38,38, 0.9);
    height: 480px;

    &:hover {
        border-color: var(--primary);
        color: var(--primary);
    }

    @media all and (max-width: 1200px) {

        height: 380px;
        width: 320px;
        margin: 1rem 1.2rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(-5%, auto));
        max-width: 100%;
    }
`;


export default ContactCard;