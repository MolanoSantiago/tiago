import React, { useEffect, useState } from "react";
import { NSFW, SFW, COLORS } from "../../utils/constants";
import { postAnimePicsApi } from "../../config/artApi";
import AnimePicsList from "../../components/arts/AnimePicsList";
import Loading from "../../components/Loading";
import { useToggle } from "../../hooks/useToggle";
import Background from "../../components/Background";

export default function Animes() {
  const [animePics, setAnimePics] = useState([]);
  const [sfwTags, setSfwTags] = useState([]);
  const [nsfwTags, setNsfwTags] = useState([]);
  const [loading, toggleLoading] = useToggle();
  const [refreshing, setRefreshing] = useState(false);

  const loadAnimePics = async () => {
    try {
      toggleLoading();
      const response = await postAnimePicsApi();

      const animePicsArray = [];

      for await (const pic of response.files) {
        animePicsArray.push({
          image: pic,
          type: "sfw",
          tag: "waifu",
          by: "default",
        });
      }

      setAnimePics(animePicsArray);
    } catch (error) {
      console.error(error);
    } finally {
      toggleLoading();
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true); // Comienza la actualización
    loadAnimePics();
  };

  useEffect(() => {
    (async () => {
      await loadAnimePics();
    })();
    setSfwTags(SFW);
    setNsfwTags(NSFW);
  }, []);

  return (
    <Background>
      {loading ? <Loading /> : <AnimePicsList pics={animePics} onRefresh={onRefresh} refreshing={refreshing} />}
    </Background>
  );
}
