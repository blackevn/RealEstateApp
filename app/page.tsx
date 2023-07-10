'use client'

import { useEffect } from 'react';
import '../styles/globals.css'
import { AuthForm } from './components';
import { useCurrentUser } from './hooks';
import { useRouter } from 'next/navigation';

const pages = () => {

  const { data: user } = useCurrentUser()
  const router = useRouter()

  useEffect(() => {
    if ( user ) return router.push('/dashboard')
  }, [user])
  
   return <div className="grid w-screen h-screen place-items-center">

          <AuthForm/>

        </div>;
};

export default pages;
