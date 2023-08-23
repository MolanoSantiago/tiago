import React, { useEffect, useState } from "react";
import { getAnimesSearchApi } from "../../config/animesApi";
import AnimeSearchList from "../../components/animes/AnimeSearchList";
import { useToggle } from "../../hooks/useToggle";
import _ from "lodash";
import AnimeSearchBar from "../../components/animes/AnimeSearchBar";
import Background from "../../components/Background";
import Loading from "../../components/Loading";

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
          setAnimes(response.results);
        } else {
          setAnimes([...animes, ...response.results]);
        }

        setPagination({
          currentPage: response.currentPage,
          hasNextPage: response.hasNextPage,
          nextPage: response.hasNextPage
            ? Number(response.currentPage) + 1
            : null,
          totalPages: response.totalPages,
          search: search,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      if (search !== "") {
        toggleLoading();
      }
    }
  };

  useEffect(() => {
    (async () => {
      await clearStates(true);
      await loadAnimesSearch(search);
    })();
    toggleMounted();
  }, []);

  return (
    <Background>
      {isMounted ? (
        <>
          <AnimeSearchBar
            search={search}
            setSearch={setSearch}
            animes={animes}
            handlerSearch={handlerSearch}
            clearStates={clearStates}
          />
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
