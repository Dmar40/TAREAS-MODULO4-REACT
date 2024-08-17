import React, { useEffect, useState } from 'react';
import HomePage from '../Home/HomePage';

function EpisodesPage() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/episode?page=1')
      .then(response => response.json())
      .then(data => {
        setEpisodes(data.results);
        setLoading(false);
        console.log(data );
      })
      .catch(error => console.error('Error fetching episodes:', error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    
    <div>
       <HomePage/>
       
      <h1>Episodes</h1>
      <ul className='EpisodePage'>
      
        {episodes.map(episode => (
          <li className='Epi' 
          key={episode.id}> <br />
            {episode.name} <br /> 
            {episode.episode} <br />
            {episode.air_date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EpisodesPage;
