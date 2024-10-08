/**
          INFO FROM THE ONE API. KEEP FOR FUTURE REFERENCE. 

name: "The Fellowship Of The Ring"
  book id: "5cf5805fb53e011a64671582"
  movie id: "5cd95395de30eff6ebccde5c"
    END POINTS: {
      BOOK: /book/5cf5805fb53e011a64671582
      MOVIE: /movie/5cd95395de30eff6ebccde5c
    }


name: "The Two Towers"
  book id: "5cf58077b53e011a64671583"
  movie id: "5cd95395de30eff6ebccde5b"
    END POINTS: {
      BOOK: /book/5cf58077b53e011a64671583
      MOVIE: /movie/5cd95395de30eff6ebccde5b
    }


name: "The Return Of The King"
  book id: "5cf58080b53e011a64671584"
  movie id: "5cd95395de30eff6ebccde5d"
    END POINTS: {
      BOOK: /book/5cf58080b53e011a64671584
      MOVIE: /movie/5cd95395de30eff6ebccde5d
    }


Aragorn:
  id: 5cd99d4bde30eff6ebccfbe6
    END POINTS: {
      /character/5cd99d4bde30eff6ebccfbe6
    }


*/

export async function fetchCharacter(anId) {
  
  let fetchCharacter = await fetch(`https://the-one-api.dev/v2/character/${ anId }`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${import.meta.env.VITE_BEARER_ACCESS_TOKEN}`
    }
  });
  let characterFetched = await fetchCharacter.json()
  return characterFetched
};

export async function fetchCharacterQuotes(anId) {

  let fetchQuotes = await fetch(`https://the-one-api.dev/v2/character/${ anId }/quote`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${import.meta.env.VITE_BEARER_ACCESS_TOKEN}`
    }
  });
  let quotesFetched = await fetchQuotes.json()
  return quotesFetched.docs
};

export default {
  fetchCharacter,
  fetchCharacterQuotes,
};