import styles from './App.module.scss';
import BottomSection from './bottomSection/BottomSection';
import MidSection from './middleSection/MidSection';
import TopSection from './topSection/TopSection';

function App() {
    return (
        <>
            <div className={styles.root}>
                <TopSection />
                <MidSection />
                <BottomSection />
            </div>
        </>
    );
}

export default App;
