import styles from './Carousel.module.scss';
import { useState } from 'react';
import topImg from '../assets/topImg.png';
import carousel1 from '../assets/carousel1.png';
import carousel2 from '../assets/carousel2.png';
import carousel3 from '../assets/carousel3.png';
export default function Carousel() {
    const [carousel] = useState([carousel1, carousel2, carousel3]);
    const [active, setActive] = useState(topImg);
    return (
        <div className={styles.carousel}>
            <div className={styles.round}>
                <h1>$1.99</h1>
                <p>Original value $500</p>
            </div>
            <img src={active} alt="" className={styles.topImg} />
            <div className={styles.selection}>
                {carousel.map((image) => (
                    <img
                        src={image}
                        alt=""
                        className={`${styles.carouselImg} ${
                            image == active ? styles.active : ''
                        }`}
                        onClick={() => setActive(image)}
                    />
                ))}
            </div>
        </div>
    );
}
