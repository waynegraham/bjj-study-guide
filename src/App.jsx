import { useState, useEffect } from "react";
import MoveList from "./components/MoveList";
import Search from "./components/Search";
// import SearchSection from "./components/SearchSection";
import Hero from "./components/Hero";
import Filter from "./components/Filter";
import Footer from "./components/Footer";

import movesData from "./data/moves.json";

//https://www.npmjs.com/package/react-ga4
import ReactGA from "react-ga4";
ReactGA.initialize("yG-BY5PHZWJXB");

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
    <>
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-8">

        {/* <SearchSection /> */}
        
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

          <a href="gracie-jiu-jitsu_compress.pdf" className="ms-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Curriculum Book</a>
          {/* <a href="gracie-jiu-jitsu_compress.pdf" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Curriculum</a> */}
        </div>
        <MoveList moves={filteredMoves} />
      </div>
    </main>
    <Footer />
    </>
  );
}

export default App;
