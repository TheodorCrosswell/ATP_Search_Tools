import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [preacher, setPreacher] = useState('');
  const [title, setTitle] = useState('');
  const [searchType, setSearchType] = useState('full-text');
  const [numResults, setNumResults] = useState(20);
  const [numRerankResults, setNumRerankResults] = useState(5);
  const [results, setResults] = useState([]);

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearch = () => {
    // In a real application, you would fetch data from a server here.
    // For demonstration, we'll use some mock data.
    const mockResults = [
      {
        id: 1,
        title: 'Sermon on the Mount',
        preacher: 'Jesus Christ',
        content: 'Blessed are the meek, for they will inherit the earth.',
      },
      {
        id: 2,
        title: 'I Have a Dream',
        preacher: 'Martin Luther King Jr.',
        content: 'I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.',
      },
      {
        id: 3,
        title: 'The Power of Now',
        preacher: 'Eckhart Tolle',
        content: 'Realize deeply that the present moment is all you have. Make the NOW the primary focus of your life.',
      },
    ];
    setResults(mockResults);
  };

  return (
    <div className="container">
      <h1>Document Search</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Enter your search query..."
          className="search-box"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="filters-container">
        <h2>Metadata Filters</h2>
        <div className="filter">
          <label htmlFor="preacher">Preacher:</label>
          <input
            type="text"
            id="preacher"
            value={preacher}
            onChange={(e) => setPreacher(e.target.value)}
          />
        </div>
        <div className="filter">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      <div className="search-options-container">
        <h2>Search Type</h2>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="full-text"
              checked={searchType === 'full-text'}
              onChange={handleSearchTypeChange}
            />
            Full-text Search
          </label>
          <label>
            <input
              type="radio"
              value="vector"
              checked={searchType === 'vector'}
              onChange={handleSearchTypeChange}
            />
            Vector Search
          </label>
          <label>
            <input
              type="radio"
              value="vector-rerank"
              checked={searchType === 'vector-rerank'}
              onChange={handleSearchTypeChange}
            />
            Vector Search with Reranking
          </label>
        </div>
      </div>

      <div className="sliders-container">
        <h2>Result Options</h2>
        <div className="slider">
          <label htmlFor="numResults">Number of Results: {numResults}</label>
          <input
            type="range"
            id="numResults"
            min="1"
            max="100"
            value={numResults}
            onChange={(e) => setNumResults(e.target.value)}
          />
        </div>
        {searchType === 'vector-rerank' && (
          <div className="slider">
            <label htmlFor="numRerankResults">Number of Rerank Results: {numRerankResults}</label>
            <input
              type="range"
              id="numRerankResults"
              min="1"
              max="20"
              value={numRerankResults}
              onChange={(e) => setNumRerankResults(e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="results-container">
        <h2>Results</h2>
        {results.length > 0 ? (
          results.map((result) => (
            <div key={result.id} className="result-item">
              <h3>{result.title}</h3>
              <p><strong>Preacher:</strong> {result.preacher}</p>
              <p>{result.content}</p>
            </div>
          ))
        ) : (
          <p>No results to display.</p>
        )}
      </div>

      <div className="links-container">
        <h2>Other Resources</h2>
        <ul>
          <li><a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">Project Repo</a></li>
          <li><a href="mailto:your-email@example.com">Contact Us</a></li>
          <li><a href="https://www.your-church-website.com" target="_blank" rel="noopener noreferrer">Church Website</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;