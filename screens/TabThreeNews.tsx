import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import NewsCard from "../components/NewsCards";
import newAPI from "../apis/News/News";

const TabThreeNews = ({ navigation }:{navigation: any}) => {
  // const [news, setNews] = useState([])
  console.log(navigation)
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNewsFromAPI();
  }, []);

  // const newsResponse = async() =>{
  //     const response = await newAPI.get('top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1')
  //     console.log(response.data)
  // }

  function getNewsFromAPI() {
    newAPI
      .get("top-headlines?country=us&apiKey=aa6a097fb9fb4509958fdabd1942e6d1")
      .then(async function (response) {
        setNews(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  if (!news) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={news.articles}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item }) => {
          return <NewsCard item={item} />;
        }}
      />
    </View>
  );
};

export default TabThreeNews;
