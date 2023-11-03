import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332339988_911941676608916_4773911433797269542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fryArG6GaQQAX9FZaIz&_nc_ht=scontent.fhan18-1.fna&oh=00_AfA8X21eafBpOAWK1k6WHNaFOF9tPSQTFZF6svKbIGUK4g&oe=6549AA23',
            }}
          />
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.nameUser}>Nguyễn Kiên Sơn</Text>
        <View style={styles.infoFollower}>
          <Text style={{ color: "#777" }}>0</Text>
          <Text style={{ color: "#777" }}>Follower .</Text>
          <Text style={{ color: "#777" }}>0</Text>
          <Text style={{ color: "#777" }}>Following</Text>
        </View>
      </View>   

      <View style={styles.actionContainer}>
        <View style={styles.actionItem}>
          <Octicons name="pencil" size={24} color="black" />
          <Entypo style={{paddingLeft: 20}} name="dots-three-horizontal" size={20} color="grey" />
        </View>
        <View style={styles.actionItem}>
          <FontAwesome style={{ paddingHorizontal: 18 }} name="random" size={20} color="grey" />
          <SimpleLineIcons name="control-play" size={24} color="black" />
        </View>
      </View>

      <View style={{flexDirection: 'row', justifyContent:'space-between', marginHorizontal: 20, paddingTop: 30}}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Pinned to Spotlight</Text>
          <Text style={{color: 'gray'}}>Pin items to Spotlight</Text>
        </View>
        <TouchableOpacity>
          <Text style={{color: 'gray', fontWeight:'700'}}>Edit</Text>
        </TouchableOpacity>
      </View>     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'gray', // Đặt màu nền xám cho header
    height: 120,
    position: 'relative'
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
    paddingTop: 80,
    paddingLeft: 20
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: 'white',
  },
  name:{
    fontSize: 20,
    fontWeight: '600'
  },
  info:{
    marginTop: 90
  },
  nameUser: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 20,
  },
  infoFollower: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: 20,
    gap: 5,
  },
  actionContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});


export default Profile;
