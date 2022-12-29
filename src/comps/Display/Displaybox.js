import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion'
import styled from 'styled-components';
import { SocialsLink } from '../Layout/Footer';
import { Stint_Ultra_Condensed } from '@next/font/google';


const Displaybox = (props) => {

  const {title, position, href="/", children, src, size=100, key, className=styles.displaybox, textalign, onMouseEnter, onMouseLeave, animate, initial, Icon, style, variants, whileHover, width, height} = props;

    return(
        <motion.a href={href} layoutId={key} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} inital={initial} animate={animate} style={style} variants={variants} whileHover={whileHover}>
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
            {(src && !width) && <Image src={src} width={size} height={size} className={styles.gridimage}/>}
            {(src && width) && <Image src={src} width={width} height={height} className={styles.gridimage}/>}
            {Icon && <Icon size={size} className={styles.icon}/>}
          </div>
        </motion.a>
    )
}

const StyledAnchor = styled(motion.a)`
    text-align: center;
`

export default Displaybox; 