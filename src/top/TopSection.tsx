import styles from './TopSection.module.scss';
import Carousel from './Carousel';
export default function TopSection() {
    return (
        <>
            <div className={styles.firstSection}>
                <Carousel />
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
                                <img src="/form1.png" alt="" />
                                <img src="/form2.png" alt="" />
                                <img src="/form3.png" alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
