import {SET_TOKEN} from '../constants/actionTypes';
import {RENDER_DOGS} from '../constants/actionTypes';

const token = {
	tokens: [],
	isLogged: false
};

const dogList = {
	dogs: []
}

export const authenticate = (state = token, action ) =>{
	switch (action.type){
		case SET_TOKEN:
			return { ...state, tokens: [...state.tokens, action.token_element] };
		case RENDER_DOGS:
			return {...state, dogs: [...state.dogs, action.dogs] };
		default:
			return state;
	} 
}

export const renderDogs = (state= dogList, action) =>{
	switch(action.type){
		case RENDER_DOGS:
			return {...state, dogs: [...state.dogs, action.dogs] }
		default:
			return state;
	}
}

