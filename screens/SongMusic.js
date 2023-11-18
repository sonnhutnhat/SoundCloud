import React, { useState, useEffect } from "react";
import { View, Text, Image, Pressable, TouchableOpacity, StyleSheet, SafeAreaView, Animated } from "react-native"; // Add Animated import
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Entypo, Feather, Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Audio } from 'expo-av';


// Define circleSize here
const circleSize = 12;

const SongMusic = ({ route }) => {
  const { song } = route.params;
  console.log(song.path);
  const navigation = useNavigation();

  // Add the missing variables (replace with your actual logic)
  const progress = 0.5;
  const currentTime = 0;
  const totalDuration = 100;

  const [sound, setSound] = useState(); // Add state for the sound
  const [playing, setPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null); // Add state for the current song

  useEffect(() => {
    return sound
    ? () => {
      sound.unloadAsync();
    }
    : undefined;
  }, [sound]);
  const PlaySong = async () => {
    if(sound) {
      if(playing) {
        await sound.pauseAsync();
      } else {
        await sound.playAsync();
      }
      setPlaying(!playing);
    } else {
      const {sound: newSound} = await Audio.Sound.createAsync(
        {uri: song.path},
        {shouldPlay: true}
      );
      setSound(newSound);
      setPlaying(true);
    }
  };


  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Your existing styles
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    gradientContainer: {
      flex: 1,
    },
    mainContainer: {
      paddingHorizontal: 20,
      paddingTop: 20,
      flex: 1,
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 50,
    },
    albumImage: {
      width: 350,
      height: 350,
      borderRadius: 180,
      alignSelf: "center",
      marginBottom: 50
    },
    infoContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 10
    },
    textContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
    },
    artist: {
      color: "#D3D3D3",
      marginTop: 1,
    },
    actions: {
      flexDirection: "row",
      gap: 4,
    },
    progressBarContainer: {
      marginVertical: 4,
    },
    progressBar: {
      width: "100%",
      height: 1,
      backgroundColor: "gray",
      borderRadius: 5,
      position: "relative",
    },
    progressIndicator: {
      position: "absolute",
      top: -5,
      width: circleSize,
      height: circleSize,
      borderRadius: circleSize / 2,
      backgroundColor: "white",
    },
    timeContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 6
    },
    time: {
      fontSize: 14,
      color: "#D3D3D3",
    },
    controls: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginTop: 4,
    },
  });

  return (
    <View style={styles.container}>
      <LinearGradient colors={["#131624", "#040306"]} style={styles.gradientContainer}>
        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="down" size={24} color="white" />
            </TouchableOpacity>
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </View>
          <View style={styles.content}>
            <Image style={styles.albumImage} source={{ uri: song.image }} />
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>{song.name}</Text>
                <Text style={styles.artist}>{song.artist}</Text>
              </View>
              <View style={styles.actions}>
                <TouchableOpacity>
                  <AntDesign name="hearto" size={24} color="white" />
                </TouchableOpacity>
                <AntDesign name="sharealt" size={24} color="white" />
              </View>
            </View>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBar}>
                <View
                  style={styles.progressIndicator}
                />
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.time}>{formatTime(currentTime)}</Text>
                <Text style={styles.time}>{formatTime(totalDuration)}</Text>
              </View>
            </View>
            <View style={styles.controls}>
              <Pressable>
                <Entypo name="shuffle" size={26} color="white" />
              </Pressable>
              <Pressable>
                <Ionicons name="play-skip-back" size={30} color="white" />
              </Pressable>
              <TouchableOpacity onPress={() => PlaySong(song.path, song.id)}>
                {playing ? (
                  <AntDesign name="pausecircleo" size={60} color="white" />
                ) : (
                  <TouchableOpacity
                    onPress={PlaySong}
                  >
                    <AntDesign name="playcircleo" size={60} color="white" />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>
              <Pressable>
                <Ionicons name="play-skip-forward" size={30} color="white" />
              </Pressable>
              <Pressable>
                <Feather name="repeat" size={26} color="white" />
              </Pressable>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default SongMusic;
