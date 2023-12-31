export interface IStudent {
  _id: string;
  name: string;
  studentId: string;
  batch: string;
  college: string;
  reactFinalScore: number;
  webDFinalScore: number;
  dsaFinalScore: number;
  status: string;
}

export interface IInteview {
  _id: string;
  name: string;
  studentId: string;
  interviewTopic: string;
  dateOfInterview: string;
  companyName: string;
  result: string;
}
