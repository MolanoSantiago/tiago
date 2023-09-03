import React, { useEffect, useState } from "react";
import {
  getAnimesPopularApi,
  getAnimesSearchApi,
} from "../../config/animesApi";
import AnimeSearchList from "../../components/animes/AnimeSearchList";
import { useToggle } from "../../hooks/useToggle";
import _ from "lodash";
import AnimeSearchBar from "../../components/animes/AnimeSearchBar";
import Background from "../../components/Background";
import Loading from "../../components/Loading";
import { StyleSheet, View, Text } from "react-native";
import { COLORS } from "../../utils/constants";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Animes() {
  const [animes, setAnimes] = useState([]);
  const [loading, toggleLoading] = useToggle();
  const [pagination, setPagination] = useState({
    currentPage: null,
    hasNextPage: null,
    nextPage: null,
    totalPages: null,
    search: null,
  });
  const [search, setSearch] = useState("");
  const [isMounted, toggleMounted] = useToggle();

  const clearStates = async (withSearch) => {
    setAnimes([]);
    setPagination({
      currentPage: null,
      hasNextPage: null,
      nextPage: null,
      totalPages: null,
      search: null,
    });
    if (withSearch) {
      setSearch("");
    }
  };

  const handlerSearch = async (search) => {
    await clearStates();
    loadAnimesSearch(search);
  };

  const loadAnimesSearch = async (search, page) => {
    try {
      if (search !== "") {
        toggleLoading();

        const response = await getAnimesSearchApi(search, page);

        if (search !== pagination.search) {
          setAnimes(response.data);
        } else {
          setAnimes([...animes, ...response.data]);
        }

        setPagination({
          currentPage: response.meta.currentPage,
          hasNextPage: !_.isNull(response.meta.next),
          nextPage: response.meta.next,
          totalPages: response.meta.total,
          search: search,
        });
      } else {
        toggleLoading();

        const response = await getAnimesPopularApi(page);

        if (search !== pagination.search) {
          setAnimes(response.data);
        } else {
          setAnimes([...animes, ...response.data]);
        }

        setPagination({
          currentPage: response.meta.currentPage,
          hasNextPage: !_.isNull(response.meta.next),
          nextPage: response.meta.next,
          totalPages: response.meta.total,
          search: search,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      toggleLoading();
    }
  };

  useEffect(() => {
    (async () => {
      await clearStates(true);
      await loadAnimesSearch(search);
    })();
    setTimeout(() => {
      toggleMounted();
    }, 1500);
  }, []);

  return (
    <Background>
      {isMounted ? (
        <>
          <AnimeSearchBar
            search={search}
            setSearch={setSearch}
            pagination={pagination}
            animes={animes}
            handlerSearch={handlerSearch}
            clearStates={clearStates}
            loading={loading}
          />
          {pagination.search === "" ? (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Popular </Text>
              <Icon name="fire" color={COLORS.ternary} size={20} />
            </View>
          ) : !_.isEmpty(animes) ? (
            <View style={styles.headerContainer}>
              <Text style={styles.headerText}>Results</Text>
            </View>
          ) : null}
          <AnimeSearchList
            animes={animes}
            loadMoreAnimes={loadAnimesSearch}
            loading={loading}
            pagination={pagination}
            search={search}
          />
        </>
      ) : (
        <Loading />
      )}
    </Background>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerText: {
    color: COLORS.textLight,
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 5,
  },
});
