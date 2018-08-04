export const MODAL_ACTIONS = {
    IS_ACTIVE: "IS_ACTIVE",
    IS_INACTIVE: "IS_INACTIVE"
}

export const openModal = dispatch => {
    dispatch({
        type: MODAL_ACTIONS.IS_ACTIVE,
        payload: {
            isActive: true
        }
    })
}

export const closeModal = dispatch => {
    dispatch({
        type: MODAL_ACTIONS.IS_INACTIVE,
        payload: {
            isActive: false
        }
    })
}
