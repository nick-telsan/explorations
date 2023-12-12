import { useCardStore } from "./cardStore";

function App({ id }: { id: string }) {
  const element = document.getElementById(id)?.getAttribute("data-value") as
    | "clubs"
    | "diamonds"
    | "hearts"
    | "spades";
  const value = useCardStore((state) => state[element]);

  return (
    <div>
      <h1>Hello from {element}!</h1>
      <div>
        Current {element}: {value}
      </div>
    </div>
  );
}

export default App;
