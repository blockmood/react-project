import * as actionTypes from '../constants/index'

export default (state = {} ,action) => {
    switch(action.type){
        case actionTypes.USERINFO_UPDATE:{
            return action.data
        }
        default:{
            return state
        }
    }
}