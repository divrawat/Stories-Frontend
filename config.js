

    
    const publicRuntimeConfig = {
        APP_NAME: 'MyStories',
        APP_DESCRIPTION:'Stories is a news website that delivers content on the basis of web stories.', 
        API_DEVELOPMENT: 'https://stories-backend.onrender.com/api',
        MY_API:"http://localhost:8000",
        API_PRODUCTION:"https://stories-backend.onrender.com/api",
        PRODUCTION: true,
        DOMAIN_DEVELOPMENT:"http://localhost:3000",
        DOMAIN_PRODUCTION:"https://stories-frontend-zeta.vercel.app/",
        }
        

    export const MY_API=publicRuntimeConfig.MY_API;


    export const API = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.API_PRODUCTION
    : publicRuntimeConfig.API_DEVELOPMENT;

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION
    ? publicRuntimeConfig.DOMAIN_PRODUCTION
    : publicRuntimeConfig.DOMAIN_DEVELOPMENT;

    /*
const publicRuntimeConfig = {
    APP_NAME: 'Stories',
    APP_DESCRIPTION:'', 
    API_DEVELOPMENT: 'http://localhost:8000/api',
    MY_API:"http://localhost:8000",
    API_PRODUCTION:"",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT:"http://localhost:3000",
    DOMAIN_PRODUCTION:"",
    }
*/
