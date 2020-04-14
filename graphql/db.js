export let movies = [
    {
        name : "부산행",
        score : 25,
        id : 1
    },
    {
        name : "신과 함께",
        score : 1,
        id : 2
    },
    {
        name : "미스 슬로운",
        score : 100,
        id : 3
    }
]

export const getMovies = () => movies

export const getById = id =>{
    const filterMovie = movies.filter(movie => id === movie.id);
    return filterMovie[0];
}

export const deleteMovie = id =>{
    const cleanedMovies = movies.filter(movie => id !== movie.id);
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }
    return false;
}

export const addMovie = (name, score)=>{
    const newMovie = {
        id : `${movies.length + 1}`,
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}

