import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

export default function Homepage({ navigation }) {
  const [dataLoading, setDataLoading] = useState(true);
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tech&apiKey=${apiKey}"
    ).then((response) => response.json())
      .then((json) => setNewsData(json.articles))
      .catch((error) => console.error(error))
      .finally(() => setDataLoading(false));
  }, []);

  const storyItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate("NewsDetail", { url: item.url })}
      >
        <View style={styles.listings}>
          <Text style={styles.title}>{item.title}</Text>
          <Image style={styles.thumbnail} source={{ uri: item.urlToImage }} />
          <Text style={styles.blurb}>{item.description}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      {dataLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
        <FlatList
          data={newsData}
          renderItem={storyItem}
          keyExtractor={(item) => item.url}
        ></FlatList>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '100%',
    padding: 20
  },
  listings: {paddingTop: 15, paddingBottom:25, borderBottomColor:'black', borderBottomWidth:1 },
  title: {paddingBottom:10, fontFamily: 'OpenSans', fontWeight: 'bold'},
  thumbnail: {
    height: 100,
    width: '98%'
  },
  blurb: {fontFamily: 'OpenSans', fontStyle: 'italic'},
});
