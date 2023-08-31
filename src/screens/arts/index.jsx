import React, { useEffect, useState } from "react";
import { NSFW, SFW } from "../../utils/constants";
import { postAnimePicsApi } from "../../config/artApi";
import AnimePicsList from "../../components/arts/AnimePicsList";
import Loading from "../../components/Loading";
import { useToggle } from "../../hooks/useToggle";
import Background from "../../components/Background";
import AnimePicsTags from "../../components/arts/AnimePicsTags";

export default function Animes() {
  const [animePics, setAnimePics] = useState([]);
  const [sfwTags, setSfwTags] = useState(SFW);
  const [nsfwTags, setNsfwTags] = useState(NSFW);
  const [loading, toggleLoading] = useToggle();
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState({
    type: "sfw",
    tag: "waifu",
  });

  const loadAnimePics = async (filter) => {
    try {
      toggleLoading();
      const response = await postAnimePicsApi(filter);

      const animePicsArray = [];

      for await (const pic of response.files) {
        animePicsArray.push({
          image: pic,
          type: "sfw",
          tag: "waifu",
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
    loadAnimePics(filter);
  };

  useEffect(() => {
    (async () => {
      await loadAnimePics(filter);
    })();
  }, [filter]);

  return (
    <Background>
      <AnimePicsTags
        filter={filter}
        setFilter={setFilter}
        nsfw={nsfwTags}
        sfw={sfwTags}
        loadAnimePics={loadAnimePics}
      />
      {loading ? (
        <Loading />
      ) : (
        <AnimePicsList
          pics={animePics}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      )}
    </Background>
  );
}
