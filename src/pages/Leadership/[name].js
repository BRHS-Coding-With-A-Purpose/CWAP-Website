import styled from "styled-components";
import Displaybox from "../../comps/Display/Displaybox";
import styles from "../../styles/Home.module.css";
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import officer from '../../data/officers.json'
import Image from 'next/image';
import { ContentWrapper } from '../../comps/Display/ContactCard';
import Media from "react-media";

const Leadership = () => {

    const router = useRouter();
    const { name } = router.query;
    const [description, setDescription] = useState("");
    const [title, setTitle ] = useState("");
    const [position, setPosition] = useState("");
    const [images, setImages] = useState("");

    useEffect(() => {

        if(!router.isReady)
            return;

        officer.map((el) => {
            if (el.name === name) {
                setDescription(el.description)
                setTitle(el.name)
                setPosition(el.position)
                setImages(el.images);
            }
        });

    }, [router.query.name, router.isReady])
    
    return(
        <Media queries={{
            small: "(max-width: 600px)",
          }}>
            {matches => (
                <div>
                    <div className={styles.officerpage}>
                            <Displaybox title={`${title} - ${position}`}>
                                {description}
                            </Displaybox>
                        <div className={styles.imggrid}>
                            <Image src={images[0]} width={200 - matches.small * 100} height={200 - matches.small * 100} className={styles.gridimage}/>
                            <Image src={images[1]} width={200 - matches.small * 100} height={200 - matches.small * 100} className={styles.gridimage}/>
                            <Image src={images[2]} width={200 - matches.small * 100} height={200 - matches.small * 100} className={styles.gridimage}/>
                        </div>
                    </div>
                </div>
            )}

        </Media>
    );
}

export default Leadership;