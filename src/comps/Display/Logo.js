import styles from '../../styles/Home.module.css';
import Image from 'next/image'

const Logo = ({width, height, src="/CWAP.png", className, biglogo}) => {
    return (
        <div className={className}>
            {biglogo && <Image src={src} width={width} height={height} className={styles.biglogo}/>}
            {!biglogo && <Image src={src} width={width} height={height}/>}
        </div>
    )
}

export default Logo;