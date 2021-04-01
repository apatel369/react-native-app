import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

export default function NewsDetail({ route, navigation }) {
  const [dataLoading, setDataLoading] = useState(true);
  const [allPostData, setAllPostData] = useState([]);
  const { url } = route.params;
  const selectedPost = allPostData?.length > 0 ? allPostData.find((post) => post.url === url) : null;
  useEffect(() => {
    fetch("https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}")
      .then((response) => response.json())
      .then((json) => setAllPostData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setDataLoading(false));
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttontext}>Go back</Text>
      </TouchableOpacity>
      {dataLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <ScrollView>
          <Text style={styles.title}>{selectedPost.title}</Text>
          <Image
            style={styles.storyimage}
            source={{ uri: selectedPost.urlToImage }}
          ></Image>
          <Text style={styles.blurb}>{selectedPost.description}</Text>
          <Text style={styles.content}>{selectedPost.content}</Text>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
  },
  button: {
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  buttontext: {
    fontFamily: "OpenSans",
    fontWeight: "bold",
  },
  storyimage: {
    heiht: 300,
    width: "100%",
  },
  title: {
    fontFamlily: "OpenSans",
    fontWeight: "bold",
    fontSize: 20,
    padding: 20,
  },
  blurb: {
    fontFamily: "OpenSans",
    fontSize: 14,
    padding: 20,
    fontStyle: "italic",
  },
  content: {
    flex: 1,
    fontFamily: "OpenSans",
    fontSize: 16,
    paddingTop: 30,
    paddingBottom: 100,
    paddingLeft: 20,
    paddingRight: 20,
  },
});
