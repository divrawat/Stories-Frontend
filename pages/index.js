
import Layout from "@/components/Layout"
import Head from "next/head"
import { DOMAIN, APP_NAME } from '@/config';
import { list } from '../action/story';
import styles from '../styles/stories.module.css';
import { format } from 'date-fns';

export default function Home({ stories }) {

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${DOMAIN}/#organization`,
            "name": `${APP_NAME}`,
        },
        {
            "@type": "WebSite",
            "@id": `${DOMAIN}/#website`,
            "url": `${DOMAIN}`,
            "name": `${APP_NAME}`,
            "alternateName": `${APP_NAME}`,
            "publisher": {
                "@id": `${DOMAIN}/#organization`,
            },
            "inLanguage": "en-US",
        },
        {
            "@type": "CollectionPage",
            "@id": `${DOMAIN}/#webpage`,
            "url": `${DOMAIN}`,
            "name": `${APP_NAME}`,
            "isPartOf": {
                "@id": `${DOMAIN}/#website`,
            },
            "inLanguage": "en-US",
        },
    ],
};


  return (
  
    <>
      <Head>
                <title>{APP_NAME}</title>
                <meta name="description" content={`${APP_NAME} is a news website that aims to deliver to the point news in form of web stories to all`} />
                <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
                <link rel="canonical" href={`${DOMAIN}`} />
                <meta property="og:type" content="article" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content={`${APP_NAME} - Get All News here in form of Web Stories`} />
                <meta property="og:description" content={`${APP_NAME} is a news website that aims to deliver to the point news in form of web stories to all`} />
                <meta property="og:url" content={`${DOMAIN}`} />
                <meta property="og:site_name" content={`${APP_NAME}`} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            </Head>


            <Layout>
                <div className={styles.back}>
                    <div className={styles.heading}>{`${APP_NAME} delivers worldwide news in the form of Web Stories`}</div>
                    <div className={styles.grid}>

                        {stories.map((item, i) => {
                            const date = new Date(item.date);
                            const formattedDate = format(date, 'dd MMM, yyyy');

                            return (
                                <div key={i} className={styles.cards}>
                                    <img src={`${item.coverphoto}`} />
                                    <h2><a target='blank' href={`/web-stories/${item.slug}`}>{item.title}</a></h2>
                                    <p>{formattedDate}</p>
                                </div>

                            );
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export async function getServerSideProps() {
    const data = await list();
    if (data.error) {
        console.log(data.error);
    } else {
        return {
            props: { stories: data },
        };
    }
}

