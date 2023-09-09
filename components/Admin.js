import { useEffect } from 'react';
import Router from 'next/router';
import { isAuth } from '../action/auth';
import dynamic from 'next/dynamic';


const Admin = ({ children }) => {
    useEffect(() => {
        if (!isAuth()) {
            Router.push(`/signin`);
        }
        else if (isAuth().role === 0){
            Router.push(`/`);
        }
    }, []);


      return ( 
    <>
    {children}
    </>
    );
};


export default dynamic(() => Promise.resolve(Admin), { ssr: false })