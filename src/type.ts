export interface AddGmailBodyProps {
  email: string;
  password: string;
}

export interface GetGmailQueryProps {
  password?: string;
}

export interface GmailProps {
  _id: string;
  email: string;
  password: string;
  createdAt: Date;
}

export interface AppleAccountProps {
  _id: string;
  email: string;
  password: string;
  date: string;
  first_q: string;
  second_q: string;
  third_q: string;
  createdAt: Date;
}

export interface ParentProps {
  _id: string;
  email: string;
  password: string;
  date: string;
  first_q: string;
  second_q: string;
  third_q: string;
  cvv?: string;
  no?: string;
  url?: string;
  stop_sharing: string;
  no_of_family: string;
  createdAt: Date;
}

export interface AppleAccountWithParentProps {
  _id: string;
  email: string;
  password: string;
  date: string;
  first_q: string;
  second_q: string;
  third_q: string;
  first_name: string;
  last_name: string;
  parent_email: string;
  parent_password: string;
  parent_date: string;
  parent_first_q: string;
  parent_second_q: string;
  parent_third_q: string;
  cvv?: string;
  url?: string;
  createdAt: Date;
}
