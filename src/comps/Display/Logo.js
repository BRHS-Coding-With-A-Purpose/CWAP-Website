import styles from '../../styles/Home.module.css';
import Image from 'next/image'

const Logo = ({width, height, src="/CWAP.png", className}) => {
    return (
        <div className={className}>
            <Image src={src} width={width} height={height} className={styles.gridimage}/>
        </div>
    )
}

export default Logo;