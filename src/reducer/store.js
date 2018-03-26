import * as actionTypes from '../constants/index'

export default (state = [] , action) => {
    switch(action.type){
        case actionTypes.USER_UPDATE:{
            return action.data
        }
        case actionTypes.USER_ADD:{
            state.unshift(action.data)
            return state
        }
        case actionTypes.USER_REMOVE:{
            return state.filter(item=>{
                return item !== action.id
            })
        }
        default:{
            return state
        }
    }
}