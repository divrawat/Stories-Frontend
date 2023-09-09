import { list } from '../../action/story';
import { APP_NAME, DOMAIN } from '@/config';

// const siteUrl = "https://example.com";
 
const generateRssItem = (post) => `
  <item>
    <title>${post.title}</title>
    <link>${DOMAIN}/${post.slug}</link>
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <guid>${DOMAIN}/${post.slug}</guid>
    <dc:creator><![CDATA[divrawat]]></dc:creator>
    <description><![CDATA[${post.description}]]></description>
    <image
    src="${post.coverphoto}"
    width="360"
    height="600"
    alt="From Saiyans to Stardom: Dragon Ball Is The Father Of Anime"
    srcset="${post.coverphoto}"
  /> 
					
  </item>
`;

const generateRss = (posts) => `
  <rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>Your Site Name</title>
      <atom:link href="${DOMAIN}/feeds/" rel="self" type="application/rss+xml" />
      <link>${DOMAIN}</link>
      <description>Your site description goes here.</description>
      <language>en-US</language>
      <ttl>30</ttl>
      <generator>Next.js</generator>

      <image>
      <url>https://www.naukarisamachar.live/wp-content/uploads/2023/06/cropped-Logo-32x32.png</url>
      <title>${APP_NAME}</title>
      <link>${DOMAIN}</link>
      <width>32</width>
      <height>32</height>
  </image> 

      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

export default function Rss() {
  return null;
}

export async function getServerSideProps({ res }) {
  const posts = await list();
  const rss = generateRss(posts);
  res.setHeader('Content-Type', 'text/xml');
  res.write(rss);
  res.end();

  return {
    props: {},
  };
}
