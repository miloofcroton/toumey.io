export interface PostFrontMatter {
  id: string;
  title: string;
  description?: string;
  tags?: Array<string>;
  image?: string;
  date?: string;
}

export interface Post {
  id: string;
  title: string;
  description?: string;
  body?: string;
  tags?: Array<string>;
  image?: string;
  date?: string;
};

export interface PostResponse {
  frontmatter: PostFrontMatter;
  content: string;
};
