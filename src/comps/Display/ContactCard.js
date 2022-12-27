import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import Media from 'react-media';



const ContactCard = (props) => {

  const {title, href="/", children, src, size=100, key, textalign, className, onMouseEnter, onMouseLeave, animate} = props;

    return(
      <Media queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 600px)"
      }}>
        {(matches) => (
        <motion.a href={href} layoutId={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} animate={animate}>
          <ContentWrapper>
                <TextWrapper>
                  <h1 className={textalign}>
                    {title}
                  </h1>
                  <WordWrap>
                    {children}
                  </WordWrap>
                  {src && <ImageWrapper><Image src={src} width={size - matches.small*50} height={size - matches.small*50} className={className}/></ImageWrapper>}
                </TextWrapper>
          </ContentWrapper>
        </motion.a>
        )}
      </Media>
    )
}

const WordWrap = styled.p`
  overflow-wrap: break-word;
`

const ImageWrapper = styled.div`
    text-align: center;
    margin: 50px;
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
    border: 1px solid var(--accent);
    border-radius: 10px;
    background-color: rgba(38,38,38, 0.9);
    height: 400px;

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

    @media all and (max-width: 1200px) {
      height: 350px;
      width: 320px;
      margin: 1rem 1.2rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(-5%, auto));
      max-width: 95%;
    }
`;


export default ContactCard;