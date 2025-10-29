 export const fetchMoviesDetails = async (id) => {
    console.log("hello")
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDRjNmM3NDk0MTg4MjFjOWIzZjhkODY3NDgyODA4YiIsIm5iZiI6MTc2MTI4NzE4OC4yMzIsInN1YiI6IjY4ZmIxYzE0NDY2MTZkY2JhNDVkZGJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pqOYjWzuH_8D8bOOS86ai6ghm8xeoTIzywq3UavBIkE",
              accept: "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

       return await response.json();
    };