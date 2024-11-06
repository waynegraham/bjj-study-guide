import React from 'react';

function Filter({ onBeltFilter, onCategoryFilter, moves }) {
  const belts = ['Blue', 'Purple', 'Brown', 'Black'];
  const categories = [...new Set(moves.map(move => move.category))];

  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <select 
        onChange={(e) => onBeltFilter(e.target.value)} 
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Belts</option>
        {belts.map(belt => (
          <option key={belt} value={belt}>{belt}</option>
        ))}
      </select>
      <select 
        onChange={(e) => onCategoryFilter(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
