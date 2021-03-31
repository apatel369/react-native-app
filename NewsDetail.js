import React, {useEffect, useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Image,
    TouchableOpacity,
  } from "react-native";

export default function NewsDetail({route, navigation}) {
    const [dataLoading, setDataLoading] = useState(true);
    const [allOostData, setAllPostData] = useState([]);
    const { url } = route.params;
    const selectedPost = allPostData.Find(post => post.url === url);
    useEffect(() => {
        fetch(
          "https://newsapi.org/v2/everything?q=tech&from=${apiKey}"
        ).then((response) => response.json())
          .then((json) => setNewsData(json.articles))
          .catch((error) => console.error(error))
          .finally(() => setDataLoading(false));
      }, []);
    return (
        <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
            <Text style={styles.buttontext}>Go back</Text>
        </TouchableOpacity>
        {dataLoading ? (
        <ActivityIndicator></ActivityIndicator>
      ) : (
      <ScrollView>
          <Text style={styles.title}>
             {selectedPost.title}
          </Text>
          <Image style={styles.storyimage} source={{uri: selectedPost.urlToImage}}></Image>
          <Text style={styles.blurb}>{selectedPost.description}</Text>
          <Text style={styles.content}>{selectedPost.content}</Text>
      </ScrollView>
      )}
        </View>
    )
}
