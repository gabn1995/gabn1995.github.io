const initialState = {
    email: ''
};

export default (state=initialState, action)=>{
    if(action.type == 'SET_EMAIL'){
        return {...state, email: state.payload.email};
    }

    return state;
};