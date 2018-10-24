import React from 'react';
import {SET_TOKEN} from '../constants/actionTypes';

const token = {
	tokens: []
};

export const authenticate = (state = token, action ) =>{
	switch (action.type){
		case SET_TOKEN:
			return { ...state, tokens: [...state.tokens, action.token_element] };
		default:
			return state;
	} 
}