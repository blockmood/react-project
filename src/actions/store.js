import * as actionTypes from '../constants/index'

export const update = (data) => ({
    type:actionTypes.USER_UPDATE,
    data
})

export const add = (data) => ({
    type:actionTypes.USER_ADD,
    data
})

export const remove = (id) => ({
    type:actionTypes.USER_REMOVE,
    id
})