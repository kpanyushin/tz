export const fetchGames = (delay = 1500) => fetch('gamesList.json')
  .then(response => new Promise(resolve => {
    setTimeout(() => {
      resolve(response);
    }, delay);
  })).then(res => res.json());