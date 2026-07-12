/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Subject {
  id: string;
  name: string;
  code: string;
  semester?: string;
  description: string;
  notesLink: string;
  questionBankLink: string;
  pastPapersLink: string;
  chapters: string[];
}

export interface CareerPath {
  title: string;
  salary: string;
  demand: string;
  skills: string[];
  description: string;
}

export interface Textbook {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  accentColor: string;
  subjects: Subject[];
  careers: CareerPath[];
  books: Textbook[];
}

export interface CertificationCourse {
  id: string;
  name: string;
  description: string;
  difficulty: 'Basic' | 'Advance' | 'Quiz';
  materialLink: string;
  testLink: string;
  isPaid?: boolean;
  quiz?: boolean;
}
