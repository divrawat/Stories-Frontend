import { DOMAIN } from "@/config";
import { sitemap } from '../action/story'


export default async function Sitemap() {
    const blogs = await sitemap();

    const posts = blogs.map((post) => ({
        url: `${DOMAIN}/web-stories/${post.slug}`,
        lastModified: post.date,
      }));


    return [
      {
        url: {DOMAIN},
        lastModified: new Date(),
      },
      
    ];
  }