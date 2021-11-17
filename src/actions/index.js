import * as act from "../constant"


export const actHandleChange = (payload) => {
    return {
        type : act.CHANGE_INPUT,
        payload:payload
    }
}

export const actAddJob = payload => {
    return {
        type: act.ADD_JOB,
        payload: payload
    }
}

export const actDeleteJob = payload => {
    return {
        type: act.DELETE_JOB,
        payload,
    }
}

export const actAddItemJob = payload => {
    return {
        type: act.ADD_ITEM_JOB,
        payload,
    }
}

export const actDeleteItemJob = payload => {
    return {
        type: act.DELETE_ITEM_JOB,
        payload,
    }
}

export const actUpdateTitle = payload => {
    return {
        type: act.UPDATE_TITLE_JOB,
        payload,
    }
}

