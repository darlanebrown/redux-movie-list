
const initialState = null;

const movieListReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REMOVE_MOVIE_FROM_LIST': {
            movieList = JSON.parse(movieList);
            const updatedList = movieList.list.filter((movieFromList) => movieFromList.imdbID !== action.payload.imdbID);
            if(updatedList.length) {
                movieList.list = updatedList;
                localStorage.setItem('movieList', JSON.stringify(movieList));
            }   else {
                localStorage.removeItem('movieList');
            }
            //const movieList = localStorage.getItem('movieList');

            return movieList
                //? JSON.parse(movieList)
                //: state;
        }
        default:
            return state;
    }
}

export default movieListReducer;