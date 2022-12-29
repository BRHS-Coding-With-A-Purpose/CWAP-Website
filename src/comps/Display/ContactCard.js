import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import styled from 'styled-components';
import { motion } from 'framer-motion'
import Media from 'react-media';



const ContactCard = (props) => {

  const {title, href="/", children, src, size=100, key, textalign, className, onMouseEnter, onMouseLeave, animate, width, height} = props;

    return(
      <Media queries={{
        small: "(max-width: 599px)",
        large: "(min-width: 600px)"
      }}>
        {(matches) => (
        <motion.a href={href} layoutId={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} animate={animate}>
          <ContentWrapper>
                  <h1 className={textalign}>
                    {title}
                  </h1>
                  <WordWrap>
                    {children}
                  </WordWrap>
                  {(src && !width) && <StyledImage src={src} width={size - matches.small*50} height={size - matches.small*50} className={className}/>}
                  {(src && width) && <StyledImage src={src} width={width - matches.small*50} height={height - matches.small*50} className={className}/>}
          </ContentWrapper>
        </motion.a>
        )}
      </Media>
    )
}

const WordWrap = styled.p`
  overflow-wrap: break-word;
  color: var(--initial-accent);
`

const StyledImage = styled(Image)`
    margin: 50px;
    border-radius: 10px;
    border: 1px solid var(--gray);

`


export const ContentWrapper = styled.div`
    margin: 1rem 1.2rem;
    padding: 1rem;
    border: 1px solid var(--gray);
    border-radius: 10px;
    background-color: var(--gray);
    width: 350px;

    &:hover {
        border-color: var(--primary);
        color: var(--primary);
    }

    @media all and (max-width: 1200px) {

        width: 350px;
        margin: 1rem 1.2rem;
        display: grid;
        grid-template-columns: repeat(2, minmax(-5%, auto));
        max-width: 100%;
    }

    @media all and (max-width: 600px) {

      width: 320px;
      margin: 1rem 1.2rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(-5%, auto));
      max-width: 95%;
    }
`;


export default ContactCard;