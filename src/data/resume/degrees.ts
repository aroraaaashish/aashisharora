export interface Degree {
  school: string;
  degree: string;
  link: string;
  yearFrom: number;
  yearTo: number;
}

const degrees: Degree[] = [
  {
    school: 'University Of Rajasthan',
    degree: 'B.E. Electronics and Communication',
    link: 'https://www.uniraj.ac.in/',
    yearFrom: 2005,
    yearTo: 2009,
  },
];

export default degrees;
