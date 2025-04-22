
// Interface for WordPress post data
export interface WordPressPost {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
    "wp:term"?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
  categories: number[];
}

// Interface for site settings
export interface WordPressSiteSettings {
  title: string;
  description: string;
  logo: string;
  favicon: string;
}

// Interface for category
export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
}
