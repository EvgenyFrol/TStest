export type ApiData = {
  id: number;
  link: string;
  description: string;
  audiences: Array<string>;
  tagIds?: Array<number>;
  keywordIds?: Array<string>;
  categories: Array<string>;
  title: string;
  tags?: string;
  keywords?: string;
};
