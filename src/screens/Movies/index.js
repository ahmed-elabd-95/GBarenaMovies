import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Modal,
  TextInput,
  Keyboard,
} from 'react-native';
import {styles} from './styles';
import {vScale} from '../../Helpers/Scale';
import {launchImageLibrary} from 'react-native-image-picker';
import Axios from 'axios';

export const Movies = ({navigation}) => {
  const [apiData, setApiData] = useState([]);
  const [title, setTitle] = useState('');
  const [overView, setOverView] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState('');
  const [featuredData, setFeaturedData] = useState([]);
  const [date, setDate] = useState('');

  handleChoosePhoto = async () => {
    const options = {
      noData: true,
    };
    await launchImageLibrary(options, response => {
      console.warn('response', response);
      if (!response.didCancel && response?.assets[0]?.uri) {
        setPhoto(response?.assets[0]?.uri);
      }
    });
  };
    useEffect(() => {
      getdata();
    }, []);
    const getdata = async () => {
      try {
        const response = await Axios.get(
          'https://api.themoviedb.org/3/movie/550?api_key=648e0b19b2a2379ea2d23e49ceacda6e',
        );
        setApiData(response.apiData);
        
      } catch (error) {
        console.log('error', error);
      }
      console.warn('title', apiData.id);
    };
    
  return (
    <View style={styles.mainSearch}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closemodal}
              onPress={() => setModalVisible(false)}>
              <Image
                source={require('../../images/close.png')}
                style={styles.closeicon}
              />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              onChangeText={text => setTitle(text)}
              value={title}
              placeholder="Title"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setOverView(text)}
              value={overView}
              placeholder="overView"
            />
            <TextInput
              style={styles.input}
              onChangeText={text => setDate(text)}
              value={date}
              placeholder="Date"
            />

            <TouchableOpacity
              onPress={() => {
                handleChoosePhoto();
                Keyboard.dismiss();
              }}>
              <Text>Choose Image</Text>
            </TouchableOpacity>
            <Image
              source={
                Boolean(photo)
                  ? {uri: photo}
                  : require('../../images/placeholder.png')
              }
              style={styles.placeholdermodal}
            />
            <TouchableOpacity
              onPress={() => {
                const item = {title, overView, date, photo};
                setFeaturedData([...featuredData, item]);
                setModalVisible(false);
                setPhoto('');
                setTitle('');
                setOverView('');
                setDate('');
              }}>
              <Text>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.mymoview}>
        <Text style={styles.MoviesHeader}>My Movies</Text>
        <TouchableOpacity
          style={styles.addnew}
          onPress={() => setModalVisible(true)}>
          <Text>Add New</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={featuredData}
        keyExtractor={(item, index) => index.toString()}
        style={{height: featuredData.length ? vScale(500) : 0}}
        renderItem={({item, index}) => {
          return (
            <View style={styles.mymoviewlist}>
              <Image
                source={
                  Boolean(item.photo)
                    ? {uri: item.photo}
                    : require('../../images/placeholder.png')
                }
                style={styles.movieImg}
              />
              <Text style={styles.moviewTitle}> {item.title}</Text>
              <Text style={styles.movieDate}>{item.date}</Text>
              <Text numberOfLines={2} style={styles.movieOverview}>
                {item.overView}
              </Text>
            </View>
          );
        }}
      />

      <Text style={styles.MoviesHeader}>All Movies</Text>
      <FlatList
        numColumns={2}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.allMoviesList}>
              <Image source={{uri: item.image}} style={styles.movieImg} />
              <Text style={styles.moviewTitle}> {item.title}</Text>
              <Text style={styles.movieDate}>{item.date}</Text>
              <Text numberOfLines={2} style={styles.movieOverview}>
                {item.overview}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const data = [
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
