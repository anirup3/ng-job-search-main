export interface Model {
  id: Job[];
  colors: string;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  isFav: boolean;
}

export interface Job {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  description: string;
  location: string;
  industries: Array<string>;
  types: Array<string>;
  publishDate: Date;
}


export interface JobDetails {
  id: number;
  companyName: string;
  title: string;
  companyLogo: string;
  reference: string;
  description: string;
  location: string;
  industries: Array<string>;
  types: Array<string>;
  publishDate: Date;
}

export interface RouteState {
  [k: string]: any;
}
