import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainSearch: {
    backgroundColor: '#fff',
    flex: 1,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#0000009c'
  },
  modalView: {
    width: '70%',
    margin: 20,
    position: 'relative',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  MoviesHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },
  mymoview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closemodal:{
    backgroundColor: '#00b4e4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 1
  },
  addnew: {
    backgroundColor: '#00b4e4',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  movieImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  moviewTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00b4e4',
  },
  movieDate: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ccc',
  },
  movieOverview: {
    fontSize: 14,
    fontWeight: '500',
  },
  input:{
    height: 40,
    width:'100%',
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    padding: 10,

  },
});
