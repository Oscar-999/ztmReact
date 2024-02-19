import "./cardListStyles.css";
import Card from "../card/cardComponent";
const CardList = ({monsters}) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
