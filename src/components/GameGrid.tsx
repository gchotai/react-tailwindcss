import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Prop {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Prop) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <p>{error}</p>;
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-row gap-4">
      {!isLoading &&
        data.map((game) => <GameCard key={game.id} game={game}></GameCard>)}
      {isLoading &&
        skeletons.map((skeleton) => (
          <GameCardSkeleton key={skeleton}></GameCardSkeleton>
        ))}
    </div>
  );
};

export default GameGrid;
