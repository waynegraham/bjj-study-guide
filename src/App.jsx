import { useState, useEffect } from "react";
import MoveList from "./components/MoveList";
import Search from "./components/Search";
import Filter from "./components/Filter";
import movesData from "./data/moves.json";

function App() {
  const [moves, setMoves] = useState([]);
  const [filteredMoves, setFilteredMoves] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBelt, setSelectedBelt] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    setMoves(movesData);
    setFilteredMoves(movesData);
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    filterMoves(term, selectedBelt, selectedCategory);
  };

  const handleBeltFilter = (belt) => {
    setSelectedBelt(belt);
    filterMoves(searchTerm, belt, selectedCategory);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    filterMoves(searchTerm, selectedBelt, category);
  };

  const filterMoves = (term, belt, category) => {
    let filtered = moves;
    if (term) {
      filtered = filtered.filter(
        (move) =>
          move.name.toLowerCase().includes(term.toLowerCase()) ||
          move.category.toLowerCase().includes(term.toLowerCase())
      );
    }
    if (belt) {
      filtered = filtered.filter((move) => move.belt === belt);
    }
    if (category) {
      filtered = filtered.filter((move) => move.category === category);
    }
    setFilteredMoves(filtered);
  };

  const shuffleMoves = () => {
    const shuffled = [...filteredMoves].sort(() => Math.random() - 0.5);
    setFilteredMoves(shuffled);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">
        Gracie Belt Demonstration Study Guide
      </h1>
      <p className="mb-8">
        This is my study guide for the Gracie Belt Demonstration. The list
        contains the moves (to help you remember the names) and the videos (to
        help you learn them).
      </p>
      <p className="mb-8">
       This is a work in progres...please share feedback with me!.
      </p>
      <div className="mb-8">
        <Search onSearch={handleSearch} />
        <Filter
          onBeltFilter={handleBeltFilter}
          onCategoryFilter={handleCategoryFilter}
          moves={moves}
        />
        <button
          onClick={shuffleMoves}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
          Shuffle Moves
        </button>

        <a href="gracie-jiu-jitsu_compress.pdf" class="ms-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Curriculum Book</a>

      </div>
      <MoveList moves={filteredMoves} />
    </div>
  );
}

export default App;
