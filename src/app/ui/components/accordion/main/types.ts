export interface JobHistory {
  id: string;
  image: string;
  name: string;
  detail: JobDetail;
}

export interface JobDetail {
  title: string;
  period: string;
  jobScope: string[];
}
