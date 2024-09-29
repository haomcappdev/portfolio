export interface JobHistory {
  id: string;
  name: string;
  detail: JobDetail;
}

export interface JobDetail {
  title: string;
  period: string;
  jobScope: string[];
}
