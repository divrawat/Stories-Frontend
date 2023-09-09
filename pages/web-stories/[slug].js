import Head from "next/head";
import { singleStory } from "@/action/story";
import Layout from "@/components/Layout";
import { API, DOMAIN, APP_NAME, MY_API } from "../../config";
import Script from 'next/script';
import { format } from 'date-fns';
export const config = { amp: true };

const Stories = ({ story, errorCode }) => {


  if (errorCode) {
    return (
      <Layout>
        <Head>
          <title>{`404 Error - ${APP_NAME}`}</title>
        </Head>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        <div style={{ textAlign: "center", fontWeight: "800", fontSize: "30px", fontFamily: "sans-serif" }}>404 Error! Story Not Found</div>
        <br /><br /><br /><br /><br /><br /><br />
      </Layout>
    );
  }


  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${DOMAIN}/#organization`,
        "name": `${APP_NAME}`,
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.naukarisamachar.live/#logo",
          "url": "https://www.naukarisamachar.live/wp-content/uploads/2023/06/cropped-Logo-1.png",
          "width": "96",
          "height": "96"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${DOMAIN}/#website`,
        "url": `${DOMAIN}`,
        "name": `${APP_NAME}`,
        "alternateName": `${APP_NAME}`,
        "publisher": {
          "@id": `${DOMAIN}/#organization`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": `${story.coverphoto}`,
        "url": `${story.coverphoto}`,
        "width": "640",
        "height": "853",
        "caption": `${story.title}`,
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${DOMAIN}/${story.slug}/#webpage`,
        "url": `${DOMAIN}/${story.slug}`,
        "name": `${story.title}`,
        // "datePublished": `${story.date}`,
        // "dateModified": `${story.date}`,
        "isPartOf": {
          "@id": `${DOMAIN}/#website`
        },
        "primaryImageOfPage": {
          "@id": `${story.coverphoto}`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Person",
        "@id": "https://www.naukarisamachar.live/author/divrawat2001/",
        "name": "Divyansh Rawal",
        "url": "https://www.naukarisamachar.live/author/divrawat2001/",
        "image": {
          "@type": "ImageObject",
          "@id": "https://secure.gravatar.com/avatar/25963693bf3ce6efc77eb7ed7d5f4228?s=96&amp;d=mm&amp;r=g",
          "url": "https://secure.gravatar.com/avatar/25963693bf3ce6efc77eb7ed7d5f4228?s=96&amp;d=mm&amp;r=g",
          "caption": "Divyansh Rawal",
          "inLanguage": "en-US"
        },
        "worksFor": {
          "@id": `${DOMAIN}/#organization`
        }
      },
      {
        "@type": "NewsArticle",
        "headline": `${story.title} - ${APP_NAME}`,
        "datePublished": `${story.date}`,
        "dateModified": `${story.date}`,
        "author": {
          "@id": "https://www.naukarisamachar.live/author/divrawat2001/",
          "name": "Divyansh Rawal"
        },
        "publisher": {
          "@id": `${DOMAIN}/#organization`
        },
        "description": `${story.description} - ${APP_NAME}`,
        "@id": `${DOMAIN}/${story.slug}/#richSnippet`,
        "isPartOf": {
          "@id": `${DOMAIN}/${story.slug}/#webpage`
        },
        "image": {
          "@id": `${story.coverphoto}`
        },
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@id": `${DOMAIN}/${story.slug}/#webpage`
        }
      }
    ],
  };



  const head = () => (
    <Head>
      <title >{`${story.title} - ${APP_NAME}`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,minimum-scale=1" />
      <meta name="description" content={`${story.description}`} />
      <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large"></meta>
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={`${story.title} - ${APP_NAME}`} />
      <meta property="og:description" content={`${story.description}`} />
      <meta property="og:url" content={`${DOMAIN}/web-stories/${story.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />
      {/* <meta property="og:updated_time" content={`${story.date}`}/> */}
      <meta property="og:image" content={`${story.coverphoto}`} />
      <meta property="og:image:secure_url" content={`${story.coverphoto}`} />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="853" />
      <meta property="og:image:alt" content="A Beauty" />
      <meta property="og:image:type" content="image/jpeg" />
      <link rel="canonical" href={`${DOMAIN}/web-stories/${story.slug}`} />
      {/* <meta property="article:published_time" content={`${story.date}`}/> */}
      {/* <meta property="article:modified_time" content={`${story.date}`} /> */}
      <link rel="icon" href="https://www.naukarisamachar.live/wp-content/uploads/2023/06/cropped-Logo-32x32.png" sizes="32x32" />
      <link rel="icon" href="https://www.naukarisamachar.live/wp-content/uploads/2023/06/cropped-Logo-192x192.png" sizes="192x192" />
      <link rel={`${MY_API}`} href={`${API}`} />
      <link rel="alternate" type="application/json" href={`${API}/webstories/${story.slug}`} />
      <link rel="apple-touch-icon" href="https://www.naukarisamachar.live/wp-content/uploads/2023/06/cropped-Logo-180x180.png" />
      <link rel="alternate" type="application/rss+xml" title={`${APP_NAME} - Feed`} href="https://www.naukarisamachar.live/feed/" />
      <link rel="alternate" type="application/rss+xml" title={`${APP_NAME} » Stories Feed`} href="https://www.naukarisamachar.live/web-stories/feed/" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />





      {/* <style amp-custom="" dangerouslySetInnerHTML={{
      
        __html: `
        amp-story-page {
          background-image: url("/back.webp");
        }
    amp-story-grid-layer{
      background-image: linear-gradient(.5turn,rgba(0,0,0,0) 0%,rgba(0,0,0,.7) 99%);
    }
    amp-story-grid-layer{
      margin: auto;
    }
    amp-story-page h1{
      font-weight: 800;
      font-size: 28px;
      line-height: 1.5;
      color: white;
      text-transform: capitalize;
      font-family:Arial, Helvetica, sans-serif;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 25px;
      word-wrap: break-word;
    }
    amp-story-page  h3 {
      font-weight: 800;
      font-size: 28px;
      line-height: 1.5;
      color: white;
      text-transform: capitalize;
      font-family:Arial, Helvetica, sans-serif;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 45px;
      word-wrap: break-word;
    
    }
    amp-story-page h2 {
      font-weight: 800;
      font-size: 30px;
      line-height: 1.5;
      color: white;
      text-transform: capitalize;
      font-family:Arial, Helvetica, sans-serif;
      text-align: center;
      padding-left: 20px;
      padding-right: 20px;
      word-wrap: break-word;
    }
    amp-story-page p {
      padding-left: 20px;
      padding-right: 20px;
      font-weight: 700;
      font-size: 20px;
      line-height: 1.6;
      color: white;
      font-family:Arial, Helvetica, sans-serif;
    }
    amp-story-grid-layer.bottom {
      align-content: end;
      padding-bottom: 60px;
    }
    .myclass amp-story-grid-layer.bottom{
      padding-bottom: 40px;
    }
    amp-story-grid-layer.noedge {
      padding: 0px;
    }
    amp-story-grid-layer.center-text {
      align-content: center;
    }
    amp-img{
    height: 40vh;
    }
        `,
      }}
    /> */}


    </Head>
  );

  const date0 = new Date(story.date);
  const formattedDate = format(date0, 'dd MMM, yyyy');

  return (

    <>
      {head()}
      <Script src="https://cdn.ampproject.org/v0.js" async />
      <Script custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js" async />
      <Script custom-element="amp-story-auto-ads" src="https://cdn.ampproject.org/v0/amp-story-auto-ads-0.1.js" async />





      <amp-story standalone="" title={`${story.title}`} publisher={`${APP_NAME}`} publisher-logo-src="http://www.naukarisamachar.live/wp-content/uploads/2023/06/cropped-Logo-1.png" poster-portrait-src={`${story.coverphoto}`} >


        <amp-story-page id="cover" className="myclass" auto-advance-after="4s">
          <amp-story-grid-layer template="vertical">
            <amp-img src={`${story.coverphoto}`} layout="responsive" width="720" height="1280" />
          </amp-story-grid-layer>

          <amp-story-grid-layer template="vertical" className="bottom">
            <h1>{story.title}</h1>
            <p>{`By ${APP_NAME} Team`}</p>
            <p>{formattedDate}</p>
          </amp-story-grid-layer>
        </amp-story-page>


        {story.slides.map((slide, i) => (
          <amp-story-page id={`page${i}`} key={i} auto-advance-after="5s">

            {slide.image && (<amp-story-grid-layer template="vertical">
              <amp-img src={`${slide.image}`} layout="responsive" animate-in="fade-in" width="720" height="1280" />
            </amp-story-grid-layer>)}

            <amp-story-grid-layer template="vertical" className="bottom">
              {slide.heading && (<h2 animate-in="fade-in" animate-in-delay="0.2s" animate-in-duration="0.5s">{slide.heading}</h2>)}
              <p animate-in="fade-in" animate-in-delay="0.3s" animate-in-duration="0.5s">{slide.paragraph}</p>
            </amp-story-grid-layer>
          </amp-story-page>

        ))}


        {story.link && story.lastheading && story.lastimage && (
          <amp-story-page id={`page${story.slides.length + 1}`} key={story.length + 1}>
            <amp-story-grid-layer template="vertical">
              <amp-img src={`${story.lastimage}`} layout="responsive" animate-in="fade-in" width="720" height="1280" />
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical" className="bottom">
              <h3 animate-in="fade-in" animate-in-delay="0.2s" animate-in-duration="0.5s">{story.lastheading}</h3>
            </amp-story-grid-layer>

            <amp-story-cta-layer>
              <a href={`${story.link}`} className="button">Click Here</a>
            </amp-story-cta-layer>
          </amp-story-page>
        )}



        <amp-story-auto-ads>
          <script type="application/json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "ad-attributes": {
                  "type": "adsense",
                  "ad-count": 2,
                  "data-ad-client": "ca-pub-1721485376950080",
                  "data-ad-slot": "6021303939",
                }
              })
            }} />
        </amp-story-auto-ads>









      </amp-story>

    </>
  );

};




export async function getServerSideProps({ query, res }) {
  try {
    const data = await singleStory(query.slug);
    if (data.error) {
      res.statusCode = 404;
      return { props: { errorCode: 404 } };
    }
    return { props: { story: data } };
  } catch (error) {
    console.error(error);
    return { props: { errorCode: 500 } };
  }
}

export default Stories;