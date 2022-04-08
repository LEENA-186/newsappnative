/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { getNewsAPI, getSourceAPI} from './Api'

export const NewsContext = createContext();

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);

  const fetchNews = async (category) => {
    const { data } = await axios.get(getNewsAPI(category));
    setNews(data);
    setIndex(1);
  };

  const fetchNewsfromSource = async (source) => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews(category);
  }, [category]);

  useEffect(() => {
    fetchNewsfromSource(source);
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        setCategory,
        index,
        setIndex,
        setSource,
        darkTheme,
        setDarkTheme,
        fetchNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
