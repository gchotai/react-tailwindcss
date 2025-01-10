import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatform";

  export interface game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic:number;
    rating_top:number;
  }



const useGames = (gameQuery:GameQuery) => useData<game>('/games', { params: { genres:gameQuery.genre?.id ,parent_platforms:gameQuery.platform?.id, ordering: gameQuery.sort, search: gameQuery.searchText} },[gameQuery])


export default useGames;