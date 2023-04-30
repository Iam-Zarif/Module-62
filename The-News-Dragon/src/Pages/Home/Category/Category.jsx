/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../Home/NewsCard/NewsCard';

const Category = () => {
    const {id} = useParams();
    const categoryNews = useLoaderData();
    return (
        <div>
            <h1>Id : {id}</h1>
            <h1>Length : {categoryNews.length}</h1>
            {
                categoryNews.map(news => <NewsCard
                key={news._id}
                news ={news}
                >
                    
                </NewsCard>)
            }
        </div>
    );
};

export default Category;