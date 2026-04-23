export type ContentSectionType =
  | 'paragraph'
  | 'heading'
  | 'subheading'
  | 'list'
  | 'ordered-list'
  | 'code'
  | 'tip';

export interface ContentSection {
  type: ContentSectionType;
  text?: string;
  items?: string[];
  language?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  title_en?: string;
  description: string;
  description_en?: string;
  date: string;
  readTime: number;
  tags: string[];
  content?: ContentSection[];
  content_en?: ContentSection[];
}
