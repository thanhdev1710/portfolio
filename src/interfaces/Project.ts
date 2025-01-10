export interface Projects {
  status: string;
  data: Project[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  imgMain: string;
  imgGallery: string[];
  shortDescription: string;
  detailedDescription: string;
  demoLink: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  video: string;
}
