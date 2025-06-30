export interface Question {
  id: string;
  question: string;
  category: string;
  tips?: string;
}

export interface Answer {
  question: Question;
  response: string;
  feedback: string;
  score: number;
}
