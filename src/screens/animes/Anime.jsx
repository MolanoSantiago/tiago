import { ScrollView, View, StyleSheet, Image } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Background from "../../components/Background";
import { COLORS, screenHeight } from "../../utils/constants";
import { getAnimeByIdApi } from "../../config/animesApi";
import { useToggle } from "../../hooks/useToggle";
import _ from "lodash";
import Loading from "../../components/Loading";
import AnimeContent from "../../components/animes/AnimeContent";

export default function Anime(props) {
  const {
    navigation,
    route: { params },
  } = props;

  const [anime, setAnime] = useState({});
  const [loading, toggleLoading] = useToggle();

  const loadAnime = async (id) => {
    try {
      toggleLoading();
      const response = await getAnimeByIdApi(id);
      setAnime(response);
    } catch (error) {
      console.error(error);
      navigation.goBack();
    } finally {
      toggleLoading();
    }
  };

  useEffect(() => {
    (async () => {
      await loadAnime(params.id);
    })();
  }, [params]);

  return (
    <Background>
      {_.isEmpty(anime) || loading ? (
        <Loading />
      ) : (
        <>
          <View style={styles.coverImageContainer}>
            <Image
              source={{ uri: anime.coverImage }}
              style={styles.coverImage}
            />
          </View>

          <ScrollView>
            <AnimeContent anime={anime} />
          </ScrollView>
        </>
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  coverImageContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  coverImage: {
    width: "100%",
    height: screenHeight * 0.6,
  },
});
