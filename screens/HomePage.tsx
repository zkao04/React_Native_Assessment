
import React from 'react';
import { Button, View } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HomePageStyles from '../styles/HomePageStyles';
import News from './NewsPage';

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style={HomePageStyles.container}>
            <Button 
            onPress={(): void => navigation.navigate('News')}
            title='Read News'/>
        </View>
    )
}

export default Home 