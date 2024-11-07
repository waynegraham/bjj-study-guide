import { useState, useEffect } from "react";
import movesData from "../data/moves.json";


import Search from './Search'
import Filter from './Filter'

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedBelt, setSelectedBelt] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  const [moves, setMoves] = useState([]);

  useEffect(() => {
    setMoves(movesData);
  }, []);


  const handleSearch = (term) => {
    setSearchTerm(term)
    filterMoves(term, selectedBelt, selectedCategory)
  }

  const handleBeltFilter = (belt) => {
    setSelectedBelt(belt)
    filterMoves(searchTerm, belt, selectedCategory)
  }

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category)
    filterMoves(searchTerm, selectedBelt, category)
  }

  const shuffleMoves = () => {
    const shuffled = [...filteredMoves].sort(() => Math.random() - 0.5);
    setFilteredMoves(shuffled);
  };

  return (
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

      <a
        href="gracie-jiu-jitsu_compress.pdf"
        className="ms-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Curriculum Book
      </a>
    </div>
  )
}

export default SearchSection
