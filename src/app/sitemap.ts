import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
   return [
      {
         url: process.env.BASE_URL || 'http://localhost:3000',
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/about` || 'http://localhost:3000',
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/contact` || 'http://localhost:3000',
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/blog` || 'http://localhost:3000',
         lastModified: new Date(),
      },
      {
         url: `${process.env.BASE_URL}/services` || 'http://localhost:3000',
         lastModified: new Date(),
      },
   ];
}
