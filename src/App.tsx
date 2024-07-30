import styles from './App.module.scss';
import BottomSection from './bottom/BottomSection';
import MidSection from './middle/MidSection';
import TopSection from './top/TopSection';

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
