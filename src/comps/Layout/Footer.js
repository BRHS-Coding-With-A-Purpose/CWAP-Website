import styles from '../../styles/Home.module.css'
import { AiOutlineInstagram, AiFillGithub, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { IconType } from 'react-icons'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.footertext}>
            © BRHS CWAP 2022
            </p>
            <SocialsLink Icon={AiFillGithub} href=""/>
            <SocialsLink Icon={AiOutlineInstagram} href=""/>
            <SocialsLink Icon={AiOutlineTwitter} href=""/>
            <SocialsLink Icon={AiFillYoutube} href=""/>
        </div>
    );
}

export const SocialsLink = ({Icon, href}) => {
    return (
        <Link href={href}>
            <Icon size={40} className={styles.icon}/>
        </Link>
    )
}

export default Footer;