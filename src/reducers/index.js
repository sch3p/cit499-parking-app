// Redux Store Reducer

const initState = {
    change: false,
    signedIn: false,
    realUser:{
        name:""
    },
}

const rootReducer = (state=initState, action) => {
    
    if(action.type==="CHECK_SIGN_IN"){
        return{
            ...state,
            signedIn: action.check
        }
    }

    if(action.type==="CURRENT_USER"){
        return{
            ...state,
            realUser: {
                name:action.user.displayName
            }
        }
    }

    return state
}

export default rootReducer;