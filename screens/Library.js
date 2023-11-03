import { StyleSheet, View, ScrollView, Image, Pressable, Text, TouchableOpacity, FlatList, SafeAreaView } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from "../constants/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';

import albumData from "../data-json/album.json"; 
import PopularAlbum from "../components/PopularAlbum";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginTop: 10 }}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.getnextpro}>Get Next Pro</Text>
          </View>
          <View>
          <Text style={styles.library}>Library</Text>
          </View>
          <View style={styles.iconAvatarContainer}>
            <TouchableOpacity style={styles.iconContainer}>
              <MaterialCommunityIcons name="cast-connected" size={24} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={() => navigation.navigate("Settings")}
            style={styles.iconContainer}
            >
              <Ionicons name="settings-outline" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.Avatar}>
              {/* Avatar component */}
              <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                <Image
                  style={styles.imgAvatar}
                  source={{
                    uri: "https://scontent.fhan18-1.fna.fbcdn.net/v/t39.30808-6/332339988_911941676608916_4773911433797269542_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fryArG6GaQQAX9FZaIz&_nc_ht=scontent.fhan18-1.fna&oh=00_AfA8X21eafBpOAWK1k6WHNaFOF9tPSQTFZF6svKbIGUK4g&oe=6549AA23",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white", // Màu nền trắng
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 10
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  library: {
    marginLeft: 30,
    fontSize: 16,
    fontWeight: '600'
  },
  iconAvatarContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    marginHorizontal: 6,
  },
  Avatar: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgAvatar: {
    width: 42,
    height: 42,
    borderRadius: 20,
    borderColor: COLORS.primary,
    borderWidth: 2,
    resizeMode: "cover",
  },
  getnextpro: {
    fontSize: 12,
  },
});

export default Home;
