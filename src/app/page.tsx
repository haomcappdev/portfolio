import { WorkHistory } from './ui/components/accordion/main/work-history';
import styles from './main.module.css';
import jobHistoryList from './data/job-history.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={`${styles.section} ${styles.section1}`}>
        <WorkHistory jobHistoryList={jobHistoryList} />
      </section>
      <section className={`${styles.section} ${styles.section2}`}>
        <h1 className={styles.title}>Section 2</h1>
      </section>
      <section className={`${styles.section} ${styles.section3}`}>
        <h1 className={styles.title}>Section 3</h1>
      </section>
    </div>
  );
}
