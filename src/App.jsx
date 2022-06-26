import CharacterList from "./components/CharacterList";

export default function App() {
  return (
    <div className="bg-dark text-white">
      <h2 className="text-center display-1 py-4">Rick and Morty</h2>
      <CharacterList />
    </div>
  );
}
