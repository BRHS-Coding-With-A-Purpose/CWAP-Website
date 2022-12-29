import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { SocialsLink } from '../Layout/Footer';
import { Stint_Ultra_Condensed } from '@next/font/google';
import blog from '../../data/blog.json'


const Blog = (props) => {

  const {title, author, children, date, src, href, size = 100} = props;

    return(
        <BlogWrapper href={href}>
            <StyledH1>
            {title}
            </StyledH1>
            <StyledH3>
            {author} | {date}
            </StyledH3>
            <StyledP>
            {children}
            </StyledP>
            {src && <StyledImage src={src} width={size} height={size}/>}
        </BlogWrapper>
    )
}

const StyledImage = styled(Image)`
    border: 1px solid var(--accent);
    margin: 1rem 3rem;

    &:hover {
        border-color: var(--primary);
    }
`
const BlogWrapper = styled.a`
    width: 15rem;
    margin: 1rem 1.2rem;
    border: 0px solid var(--accent);
    border-radius: 10px;
    background: var(--gray);
    border: 1px solid var(--gray);
    padding: 1rem;
    font-family: inherit;

    &:hover {
        border: 1px solid var(--primary);
        color: var(--primary);
    }
`

const StyledH1 = styled.h1`
    font-size: 22px;
    margin-bottom: 0.2rem;
`
const StyledH3 = styled.h3`
    font-size: 17px;
    margin-bottom: 0.6rem;
    color: var(--initial-accent);
`

const StyledP = styled.p`
    font-size: 18px;
`

export default Blog; 