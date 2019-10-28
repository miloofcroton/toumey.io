export type Post = {
  id: number;
  title: string;
  description?: string;
  body?: string;
  tags?: Array<string>;
  image?: string;
  date?: string;
};
