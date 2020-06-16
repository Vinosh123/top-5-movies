const getData = (data) => {
    return {
        type: "GET_MOVIES_DATA",
        data
    }
}
export function getMoviesData() {
    let fetchData = {
        method: 'GET',
        headers: new Headers()
    }
    return (dispatch) => {
        fetch("./top-5-movies.json", fetchData)
            .then(response => response.json())
            .then(result => dispatch(getData(result)))
            .catch(error => error);
    }
}
