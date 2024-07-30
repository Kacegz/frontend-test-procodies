import { useState } from 'react';
import styles from './App.module.scss';
import topImg from './assets/topImg.png';
import form1 from './assets/form1.png';
import form2 from './assets/form2.png';
import form3 from './assets/form3.png';
import carousel1 from './assets/carousel1.png';
import carousel2 from './assets/carousel2.png';
import carousel3 from './assets/carousel3.png';
import middle1 from './assets/middle1.png';
import middle2 from './assets/middle2.png';
import cards from './assets/cards.png';

function App() {
    const [carousel, setCarousel] = useState([carousel1, carousel2, carousel3]);
    return (
        <>
            <div className={styles.root}>
                <div className={styles.firstSection}>
                    <div className={styles.carousel}>
                        <div className={styles.round}>
                            <h1>$1.99</h1>
                            <p>Original value $500</p>
                        </div>
                        <img src={topImg} alt="" className={styles.topImg} />
                        <div className={styles.selection}>
                            {carousel.map((image) => (
                                <img
                                    src={image}
                                    alt=""
                                    className={styles.carouselImg}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.firstRight}>
                        <div className={styles.header}>
                            <h1>Chance to win a StockX Mystery Box today!</h1>
                            <p>Unleash the Excitment of Mystery Electronics</p>
                        </div>
                        <form action="/" method="POST">
                            <div className={styles.form}>
                                <h2>Enter details</h2>
                                <div className={styles.formWrapper}>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="street"
                                    id=""
                                    placeholder="Street"
                                    required
                                />
                                <div className={styles.formWrapper}>
                                    <input
                                        type="number"
                                        name="postal"
                                        id=""
                                        placeholder="Postal code"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        required
                                    />
                                </div>
                                <input
                                    type="tel"
                                    name="phone"
                                    id=""
                                    placeholder="Phone number"
                                    required
                                />
                                <input type="email" placeholder="E-mail" />
                                <input
                                    type="submit"
                                    value="Proceed to payment"
                                    required
                                />
                                <div className={styles.formImgs}>
                                    <img src={form1} alt="" />
                                    <img src={form2} alt="" />
                                    <img src={form3} alt="" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={styles.banner}>
                    <h1>
                        Top Tech Mystery Box <br /> at Unbeatable Prices
                    </h1>
                    <p>
                        Fast shipping | Easy returns | Special discount for
                        students
                    </p>
                </div>
                <div className={styles.middleContent}>
                    <img src={middle1} alt="" />
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
                                Expect the unexpected! Our boxes are packed with
                                the latest gadgets, from smartphones to gaming
                                consoles, ensuring you get the best tech
                                surprises every time.
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2>Why is everyone buzzing about these boxes?</h2>
                        <div>
                            <p>
                                StockX Mystery Boxes are not just about
                                products; they’re about the experience. Imagine
                                the excitement of unveiling top-tier electronics
                                at a fraction of the cost.
                            </p>
                            <p>
                                Our boxes include a variety of premium tech
                                items, making it a must-have for every tech
                                enthusiast. Join the buzz and see why everyone
                                is raving about the unbeatable value and
                                surprise factor of Stockx Mystery Boxes!
                            </p>
                        </div>
                    </div>
                    <img src={middle2} alt="" />
                </div>
                <div className={styles.bottomBanner}>
                    <div>
                        <h3>How can I win?</h3>
                        <p>
                            Thanks to your membership, you also participate in
                            our contest to win the iPhone15. We sellect a winner
                            among every 600 participants. The next winner will
                            be selected on 06.10.2023, and will be notified
                            directly by e-mail. If the reward is out of stock,
                            the winner will receive a similar product of equal
                            or greater value instead.
                        </p>
                    </div>
                    <div>
                        <h3>No hidden fees?</h3>
                        <p>
                            We ensure that our members are provided with a
                            detailed history of transactions so that they know
                            exactly what they are paying for. Credit card
                            information is only required to facilitate future
                            purchases. There will be no charges on your credit
                            card statement if you do not upgrade to PREMIUM
                            membership and do not make a purchase.
                        </p>
                    </div>
                    <div>
                        <h3>Why do we need your billing information?</h3>
                        <p>
                            By joining this service, you will receive a 5-day
                            trial of our partner's program. If you continue with
                            a subscription beyond the 5-day trial period, you
                            will be charged an amount on your credit card which
                            varies depending on the choice of the tariff. When
                            your contribution is deducted from your credit card
                            or other payment method, you will have access to
                            these services which are reserved exclusively for
                            members of our partner's website.
                        </p>
                    </div>
                </div>
                <div className={styles.footer}>
                    <p>We accept the following credit cards</p>
                    <img src={cards} alt="" />
                </div>
            </div>
        </>
    );
}

export default App;
