import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import styled from 'styled-components';



const FullDisplay = (props) => {

  const {title, position, href="/", children, src, size=100, key, textalign} = props;

    return(
            <DisplayWrapper>
                <h1 className={textalign}>
                    {title}
                </h1>
                <h3 className={textalign}>
                    {position}
                </h3>
                <p className={textalign}>
                    {children}
                </p>
            </DisplayWrapper>
    )
}

const DisplayWrapper = styled.div`
    background: var(--gray);
    height: 300px;
    width: 100%;
    margin: 0;
    padding: 50px auto;
    text-align: center;

    &:hover {
        color: var(--primary);
    }

`


export default FullDisplay;