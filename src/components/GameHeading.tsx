import { GameQuery } from "../App";

interface Prop {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Prop) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <h1 className="text-3xl flex font-bold">{heading}</h1>;
};

export default GameHeading;
