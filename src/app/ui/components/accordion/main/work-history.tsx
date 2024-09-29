'use client';

import { Group, Text, Accordion, List } from '@mantine/core';

import styles from './work-history.module.css';
import { JobDetail, JobHistory } from './types';

function JobDetails(props: { jobDetail: JobDetail }) {
  const { title, period, jobScope } = { ...props.jobDetail };
  return (
    <>
      <Text>{title}</Text>
      <Text>{period}</Text>
      <List>
        {jobScope.map((item, index) => (
          <List.Item key={index}>{item}</List.Item>
        ))}
      </List>
    </>
  );
}

function JobLabel({ name }: JobHistory) {
  return (
    <Group wrap="nowrap" className={styles.jobLabel}>
      <div>
        <Text className={styles.jobLabelName}>{name}</Text>
      </div>
    </Group>
  );
}

export function WorkHistory(props: { jobHistoryList: JobHistory[] }) {
  const items = props.jobHistoryList.map((item, index) => (
    <Accordion.Item
      className={styles.accordionItem}
      value={item.id}
      key={index}
    >
      <Accordion.Control className={styles.control}>
        <JobLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <JobDetails jobDetail={item.detail} />
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Accordion
        className={styles.customAccordion}
        chevronPosition="right"
        variant="contained"
      >
        {items}
      </Accordion>
    </>
  );
}
