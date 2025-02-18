import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import { GameQuery } from "../pages/Layout";
import APIClient, { FetchResponse } from "../services/api-client";
import { Game } from "../entities/Game";


const apiClient = new APIClient<Game>('/games')

const  useGames = (gameQuery: GameQuery) => 
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      console.log("Fetching page:", pageParam); // BAXAQ NEÇƏNCİ SƏHİFƏ YÜKLƏNİR
      return apiClient.getAll({
        params: {
          genres: gameQuery.genreId, 
          parent_platforms: gameQuery.platformId, 
          ordering: gameQuery.sortOrder, 
          search: gameQuery.searchText, 
          page: pageParam
        },
      }).then((data) => {
        console.log("Fetched data:", data); // SERVERDƏN GƏLƏN MƏLUMATLARI YOXLA
        return data;
      });
    },
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,  
    staleTime: ms('24h')
  })
  
  
export default useGames;