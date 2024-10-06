import { WorkHistory } from './home/work-history/work-history';
import styles from './main.module.css';
import jobHistoryList from './data/job-history.json';
import { Title } from '@mantine/core';
import { TechStack } from './home/tech-stack/tech-stack';

const data: string[] = [
  'Java',
  '.NET',
  'Angular',
  'SomeReallyLongTechNameThatIUse',
];

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={`${styles.section} ${styles.section1}`}>
        <Title className={styles.centeredTitle} order={1}>
          Work experience
        </Title>
        <div className={styles.content}>
          <WorkHistory jobHistoryList={jobHistoryList} />
        </div>
      </section>
      <section className={`${styles.section} ${styles.section2}`}>
        <Title className={styles.centeredTitle} order={1}>
          Tech stack
        </Title>
        <div className={styles.content}>
          <TechStack tech={data} />
        </div>
      </section>
      <section className={`${styles.section} ${styles.section3}`}>
        <h1 className={styles.title}>Section 3</h1>
      </section>
    </div>
  );
}
