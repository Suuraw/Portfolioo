export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveLink: string | null;
  devLink: string | null;
}

export interface BlogPost {
  slug: string; // Changed from 'id' to 'slug'
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
}
