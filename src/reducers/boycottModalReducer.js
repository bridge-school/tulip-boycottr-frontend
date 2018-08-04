import { MODAL_ACTIONS } from '../actions/boycottModalActions';

export const INITIAL_MODAL_STATE = {
    isActive: false
}

export const boycottModalReducer = (state = INITIAL_MODAL_STATE, action = {}) => {
    switch(action.type) {
        case MODAL_ACTIONS.IS_ACTIVE: {
            return {
                ...state,
                isActive: action.payload.isActive,
            }
        }
        case MODAL_ACTIONS.IS_INACTIVE: {
            return {
                ...state,
                isActive: action.payload.isActive
            }
        }
        default: {
            return state;
        }
    }
}
