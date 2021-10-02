import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground,
} from 'react-native';
import {styles} from './styles';
// import Axios from 'axios';

export const Movies = ({navigation}) => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     getdata();
  //   }, []);
  //   const getdata = async () => {
  //     try {
  //       const response = await Axios.get(
  //         'https://jsonplaceholder.typicode.com/posts',
  //       );
  //       setData(response.data);
  //     } catch (error) {
  //       console.log('error', error);
  //     }
  //   };

  return (
    <View style={styles.mainSearch}>
      <FlatList
        numColumns={2}
        data={featuredData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 8,
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                margin: 5,
                padding: 10
            
                          }}>
              <Image source={{uri: item.image}} style={styles.movieImg} />
              <Text style={styles.moviewTitle}> {item.title}</Text>
              <Text style={styles.movieDate}>{item.date}</Text>
              <Text numberOfLines={2} style={styles.movieOverview}>{item.overview}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const featuredData = [
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
  {
    title: 'Soul',
    date: 'Dec 25, 2020',
    overview: 'Animation, Comdey, Drama, Music',
    image: 'https://upload.wikimedia.org//wikipedia/en/9/95/Soul_Poster.jpeg',
  },
];
