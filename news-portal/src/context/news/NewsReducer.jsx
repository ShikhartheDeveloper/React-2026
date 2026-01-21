export const NewsReducer = (state, action) => {

    switch (action.type) {
        case  "FETCH_NEWS" :
            return{
                ...state,
                newsData : action.payload
            }
        default:
            return state
    }

}