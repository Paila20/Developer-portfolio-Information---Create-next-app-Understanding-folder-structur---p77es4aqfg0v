
'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const Home = () => {
    const router = useRouter();

    const handleBlogClick = () => {
        router.push('/blog');
    };

    const handleInfoClick = () => {
        router.push('/info');
    };

    return (
        <div id='home-page'>
            <h1>Home page</h1>
            <h2>Hi, Myself Developer </h2>
            <h2>and I work at <a href="https://www.newtonschool.co/">Newton School</a></h2>
            <button id="home-to-blog" onClick={handleBlogClick}> Go to Blog</button>
            <button id="home-to-info" onClick={handleInfoClick}> Go to Info</button>
        </div>
    );
};

export default Home;
