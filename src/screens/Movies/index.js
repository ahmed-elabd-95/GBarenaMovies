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
import {launchImageLibrary} from 'react-native-image-picker';
// import Axios from 'axios';

export const Movies = ({navigation}) => {
  //   const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [overView, setOverView] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState('');
  const [featuredData, setFeaturedData] = useState([]);
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

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
  console.warn('open', open);
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
                style={{width: 10, height: 10}}
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
              value={overView}
              placeholder="Date"
            />
            
            <TouchableOpacity onPress={() => {handleChoosePhoto() 
                Keyboard.dismiss()}}>
              <Text>Choose Image</Text>
              {/* {photo && ( */}
              {/* )} */}
            </TouchableOpacity>
            <Image
              source={
                Boolean(photo)
                  ? {uri: photo}
                  : require('../../images/placeholder.png')
              }
              style={{width: 100, height: 100}}
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
        style={{height: featuredData.length ? 500 : 0}}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                // flex: 1,
                backgroundColor: 'white',
                borderRadius: 8,
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                margin: 10,
                padding: 10,
                height: 250,
                width: 200,
              }}>
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
            <View
              style={{
                // flex: 1,
                flexDirection: 'column',
                backgroundColor: 'white',
                borderRadius: 8,
                shadowColor: '#171717',
                shadowOffset: {width: -2, height: 4},
                shadowOpacity: 0.2,
                shadowRadius: 3,
                margin: 5,
                padding: 10,
                height: 300,
                width: 200,
              }}>
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
