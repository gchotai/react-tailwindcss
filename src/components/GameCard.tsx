import { game } from "../hooks/useGames";
import getCropeedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import PlatformIconList from "./PlatformIconList";

interface Prop {
  game: game;
}
const GameCard = ({ game }: Prop) => {
  return (
    <div className="bg-gray-700 rounded-xl overflow-hidden ">
      <img
        src={getCropeedImageUrl(game.background_image)}
        className="object-fill h-56 w-auto"
      />
      <div className="flex flex-col p-3">
        <div className="text-white items-start justify-start flex font-medium text-xl">
          {game.name}
        </div>
        <div className="flex flex-row justify-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <Emoji rating={game.rating_top}></Emoji>
          <CriticScore score={game.metacritic}></CriticScore>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
