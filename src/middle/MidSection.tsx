import styles from './MidSection.module.scss';
export default function MidSection() {
    return (
        <>
            <div className={styles.banner}>
                <h1>
                    Top Tech Mystery Box <br /> at Unbeatable Prices
                </h1>
                <p>
                    Fast shipping | Easy returns | Special discount for students
                </p>
            </div>
            <div className={styles.middleContent}>
                <img src="/middle1.png" alt="" />
                <div>
                    <h2>
                        Curious about the <span>StockX</span> Mystery Box?
                    </h2>
                    <div>
                        <p>
                            Experience the thrill of unboxing cutting-edge
                            gadgets with Stockx Mystery Boxes. Each box is a
                            treasure trove of high-quality electronics,
                            handpicked to elevate your tech game.
                        </p>
                        <p>
                            Expect the unexpected! Our boxes are packed with the
                            latest gadgets, from smartphones to gaming consoles,
                            ensuring you get the best tech surprises every time.
                        </p>
                    </div>
                </div>
                <div>
                    <h2>Why is everyone buzzing about these boxes?</h2>
                    <div>
                        <p>
                            StockX Mystery Boxes are not just about products;
                            they’re about the experience. Imagine the excitement
                            of unveiling top-tier electronics at a fraction of
                            the cost.
                        </p>
                        <p>
                            Our boxes include a variety of premium tech items,
                            making it a must-have for every tech enthusiast.
                            Join the buzz and see why everyone is raving about
                            the unbeatable value and surprise factor of Stockx
                            Mystery Boxes!
                        </p>
                    </div>
                </div>
                <img src="/middle2.png" alt="" />
            </div>
        </>
    );
}
