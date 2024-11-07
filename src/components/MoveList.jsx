import MoveCard from './MoveCard';

function MoveList({ moves }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {moves.map(move => (
        <MoveCard key={move.name} move={move} />
      ))}
    </div>
  );
}

export default MoveList;
