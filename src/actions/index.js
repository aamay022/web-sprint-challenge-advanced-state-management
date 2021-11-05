import axios from 'axios';

export const getSmurfs = ()=> {
    return (dispatch) => {
        dispatch(fetchSmurfs());

        axios.get('http://localhost:3000/smurfs')
          .then(resp => {
            dispatch(fetchSuccess(resp.data));
        })
        .catch(err => {
            dispatch(fetchError(err));
        })
    }
}

export const FETCH_SMURFS = "FETCH_START";

export const fetchSmurfs = () => {
    return({type: FETCH_SMURFS});
}

export const FETCH_SUCCESS = "FETCH_SUCCESS";

export const fetchSuccess = (smurfs)=> {
    return({type: FETCH_SUCCESS, payload:smurfs});
}

export const FETCH_ERROR = "FETCH_ERROR";

export const fetchError = (errorMessage)=> {
    return({type: FETCH_ERROR, payload:errorMessage});
}

export const ADD_SMURF = 'ADD_SMURF'

export const addSmurf = (values) => {
    return({type: ADD_SMURF, payload:values})
}

export const ADD_ERROR = 'ADD_ERROR'

export const addError = (err) => {
    return({type: ADD_ERROR, payload:err})
}
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.