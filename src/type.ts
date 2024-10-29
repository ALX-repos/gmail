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
