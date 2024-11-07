import PropTypes from "prop-types";

import Belt from './Belt';
import Modal from "./Modal"
function MoveCard({ move }) {
  // const [showDetails, setShowDetails] = useState(false);

  // const toggleDetails = () => {
  //   setShowDetails(!showDetails);
  // };

  return (
    <div className="move max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      
      <img
        className="rounded-t-lg"
        src={`https://i3.ytimg.com/vi/${move.url}/maxresdefault.jpg`}
        alt="{move.name}"
      />

      <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {move.name}
          </h5>

        <Belt belt={ move.belt } />

        <p className="text-gray-700 dark:text-gray-400 font-normal mb-3 font-normal">Category: {move.category}</p>
        <Modal
          title={move.name}
          youtubeUrl={move.url}
          notes={move.notes }
        />
        {/* <a
          href={`https://www.youtube.com/watch?v=${move.url}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Watch
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a> */}


        <p className="text-gray-700 dark:text-gray-400 font-normal mt-3 font-normal">
          
          <a href={`/bjj-study-guide/gracie-jiu-jitsu_compress.pdf#page=${move.page}`}>Reference PDF</a>
        </p>

      </div>
    </div>
  );
}

MoveCard.propTypes = {
  move: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    belt: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    page: PropTypes.number,
    notes:  PropTypes.string,
  }).isRequired,
};

export default MoveCard;
