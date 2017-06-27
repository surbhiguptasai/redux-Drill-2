import {ADD_ITEM, UPDATE_ITEM, DELETE_ITEM} from '../actions';

const initialState = {
    items: []
};

export const crudReducer = (state=initialState, action) => {
    // Add code which handles each action here
    if (action.type === ADD_ITEM) {
    	  return Object.assign({}, state, {
            items: [...state.items, {
                item: action.item
                
            }]
        });
    }
    else if (action.type === UPDATE_ITEM) {
    	 return Object.assign({}, state, {
            items: state.items.map(item =>
                item.id === action.item.id ? action.item : item
            )
        });
    }
    else if (action.type === DELETE_ITEM) {
    	
    	 return Object.assign({}, state, {
            items: state.items.filter(item => item.id !== action.item.id)
        });
    }
    return state;
};
