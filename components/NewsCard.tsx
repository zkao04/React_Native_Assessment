import React from 'react';
import { Linking, Pressable, StyleSheet, Text, Image, Dimensions} from 'react-native'
import Articles from '../models/Articles';
import NewsCardStyle from '../styles/NewsCardStyles';

type Props = {
    article: Articles,
}
const {width, height} = Dimensions.get('window');

const NewsCard: React.FC<Props> = ({ article }) => {
    return (
        <Pressable style = {NewsCardStyle.container} onPress={() => {
            Linking.openURL(article.url)
        }}> 
            <Text style= {NewsCardStyle.title}>{article.title}</Text>
            <Text style= {NewsCardStyle.author}>{article.author}</Text>
            <Image style= {NewsCardStyle.image} source={{uri: article.urlToImage}}/>
            <Text style= {NewsCardStyle.description}>{article.description}</Text>
        </Pressable>
    )
}



export default NewsCard;