import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: process.env.BASE_URL || '',
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/about`,
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/contact`,
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/blog`,
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/services`,
         lastModified: new Date(),
      },
   ];
}
