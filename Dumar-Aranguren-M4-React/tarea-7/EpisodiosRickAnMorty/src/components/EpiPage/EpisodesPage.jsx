import React, { useEffect, useState } from 'react';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode?page=1')
      .then(response => response.json())
      .then(data => {
        setEpisodes(data.results);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching episodes:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Episodes</h1>
      <ul>
        {episodes.map(episode => (
          <li key={episode.id}>{episode.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodesPage;
