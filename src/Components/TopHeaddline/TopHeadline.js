import React, { useState } from 'react';
import { useEffect } from 'react';
import News from './../News/News';

const TopHeadline = () => {
    const [articles, setArticles] = useState ([]);
    useEffect(() => {
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=cc01ce3501c049ea8ffcdb5a2d908bf0';
        fetch(url)
        .then(res => res.json())
        .then(data => setArticles(data.articles))
    }, []);
    return (
        <div>
            <h6>TopHeadline: {articles.length}</h6>
                {
                    articles.map(article => <News article = {article} ></News>)
                }
        </div>
    );
};

export default TopHeadline;