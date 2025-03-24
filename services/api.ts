export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`,
    }
}
 
export const fetchMovies = async ({query} : {query: string}) => {
    const endpoint = query ?  `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`: `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

    const response = await fetch(endpoint,{
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    })

    if(!response.ok){
        // @ts-ignore
        throw new Error('Failed to fetch movies',response.statusText);
    }

            // @ts-ignore

    const data  = await response.json();

    return  data.results;

    
}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNTMxYTg4NDJjOTJhYjFkMTI4NDA2MmI0YjJiZmNiMiIsIm5iZiI6MTc0MjczOTcwMS41MjgsInN1YiI6IjY3ZTAxOGY1YzBiNDM4N2E2ZWM3MjI3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CFP1Uj6bhWNYrK0wIOk2LaTGyXKGcY2lkHMVOva_mBM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));