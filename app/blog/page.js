 'use client'
 import React from "react";
import { useRouter } from 'next/navigation';

const Blog = () => {
    const router = useRouter();

    const handleInfoClick = () => {
        router.push('/info');
    };

    const handleHomeClick = () => {
        router.push('/');
    };

    return (
        <div id="blog-page">
            <h1>Blog page</h1>
            <h2>Checkout my awesome blogs </h2>
            <h3><a href='https://www.newtonschool.co/post/top-13-web-developer-interview-questions'>Web Development Interview questions</a></h3>
            <h3><a href='https://www.newtonschool.co/post/graph-data-structure-explained-with-examples'>Graph Data Structures</a></h3>
            <button id="blog-to-info" onClick={handleInfoClick}> Go to Info</button>
            <button id="blog-to-home" onClick={handleHomeClick}> Go to Home</button>
        </div>
    );
};

export default Blog;
