import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatform";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sort: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    // <div className=" dark:bg-black dark:text-white">
    <div className="grid grid-flow-row grid-cols-12">
      <div className="col-span-12">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        ></NavBar>
      </div>
      <div className="hidden lg:items-start lg:justify-start lg:flex lg:col-span-2">
        <GenreList
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery.genre}
        ></GenreList>
      </div>
      <div className="flex flex-col gap-4 col-span-12 lg:col-span-10">
        <GameHeading gameQuery={gameQuery}></GameHeading>
        <div className="flex flex-row justify-between">
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          ></PlatformSelector>
          <SortSelector
            onSortOrder={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
        </div>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </div>
    </div>
    // </div>
  );
}

export default App;
