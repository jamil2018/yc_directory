export type StartupCardType = {
  _id: number;
  _createdAt: Date;
  author: { _id: number };
  description: string;
  category: string;
  title: string;
  image: string;
};
