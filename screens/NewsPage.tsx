import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Button, FlatList, ScrollView } from "react-native";
import NewsArticles from '../news.json';
import NewsArticle from '../models/Articles';
import NewsCard from '../components/NewsCard'
import NewsPageStyle from '../styles/NewsPageStyles';

const News: React.FC = () => {

    return <ScrollView contentContainerStyle={NewsPageStyle.container}>
        {NewsArticles.articles.map((article, index) => {
            if (index < 50) {
                return (
                    <NewsCard key={article.title} article={article as NewsArticle} />
                );
            }
            return (
                <>
                </>
            );
        })}
    </ScrollView>;
}

export default News