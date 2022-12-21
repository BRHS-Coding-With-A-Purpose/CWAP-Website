import styles from '../../styles/Home.module.css';
import Image from 'next/image'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Image src="/CWAP.png" width={320} height={320} className={styles.gridimage}/>
        </div>
    )
}

export default Logo;