
import React from 'react';

const IndianPlayers = () => {
  const oddTeam = ['Virat', 'Gill', 'Pant', 'Jadeja', 'Bumrah'];
  const evenTeam = ['Rohit', 'Rahul', 'Hardik', 'Shami', 'Kuldeep', 'Ashwin'];

  const [odd1, odd2, ...oddRest] = oddTeam;
  const [even1, even2, ...evenRest] = evenTeam;

  const T20Players = ['SKY', 'Sanju Samson'];
  const RanjiTrophyPlayers = ['Pujara', 'Iyer'];
  const allPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        <li>{odd1}</li>
        <li>{odd2}</li>
        {oddRest.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        <li>{even1}</li>
        <li>{even2}</li>
        {evenRest.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <h2>Merged Players (T20 + Ranji)</h2>
      <ul>
        {allPlayers.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
};

export default IndianPlayers;
