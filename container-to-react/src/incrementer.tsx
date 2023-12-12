import { useCardStore } from "./cardStore";

export const Incrementer = () => {
  const addCard = useCardStore((state) => state.addCard);

  return (
    <div style={{ display: "flex", gap: "8px" }}>
      <button onClick={() => addCard("clubs")}>Add Clubs</button>
      <button onClick={() => addCard("diamonds")}>Add Diamonds</button>
      <button onClick={() => addCard("hearts")}>Add Heart</button>
      <button onClick={() => addCard("spades")}>Add Spades</button>
    </div>
  );
};
