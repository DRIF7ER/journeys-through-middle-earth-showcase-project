/**
 
name: "The Fellowship Of The Ring"
  book id: "5cf5805fb53e011a64671582"
  movie id: ""
    END POINTS: {
      BOOK: /book/5cf5805fb53e011a64671582
      MOVIE: 
    }


name: "The Two Towers"
  book id: "5cf58077b53e011a64671583"
  movie id: ""
    END POINTS: {
      BOOK: /book/5cf58077b53e011a64671583
      MOVIE: 
    }


name: "The Return Of The King"
  book id: "5cf58080b53e011a64671584"
  movie id: ""
    END POINTS: {
      BOOK: /book/5cf58080b53e011a64671584
      MOVIE: 
    }


 */

export async function fetchCharacters() {
  let fetchCharacters = fetch('https://the-one-api.dev/v2/movie', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${import.meta.env.VITE_BEARER_ACCESS_TOKEN}`
    }
  });
  let charactersFetched = (await fetchCharacters).json()
  console.log(await charactersFetched, '<-- FROM FETCH CHARACTERS')
};