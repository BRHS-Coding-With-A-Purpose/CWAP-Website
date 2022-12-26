import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion'
import styled from 'styled-components';


const Displaybox = (props) => {

  const {title, position, href="/", children, src, size=100, key, className=styles.displaybox, textalign, onMouseEnter, onMouseLeave, animate} = props;

    return(
        <StyledAnchor href={href} layoutId={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} animate={animate}>
          <div className={className}>
              <div>
                  <h1 className={textalign}>
                    {title}
                  </h1>
                  <h3 className={textalign}>
                    {position}
                  </h3>
                  <p className={textalign}>
                    {children}
                  </p>
              </div>
            {src && <Image src={src} width={size} height={size} className={styles.gridimage}/>}
          </div>
        </StyledAnchor>
    )
}

const StyledAnchor = styled(motion.a)`
    text-align: center;
`

export default Displaybox; 