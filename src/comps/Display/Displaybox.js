import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';


const Displaybox = (props) => {

  const {title, href, children, src} = props;
  return(
    <div className={styles.displaybox}>
      <div>
        <Link href={href}>
          <h1>
            {title}
          </h1>
          <p>
            {children}
          </p>
        </Link>
      </div>
      <Image src={src} width={100} height={100} className={styles.gridimage}/>
    </div>
  )
}

export default Displaybox;