import React from 'react';
//import SET_TOKEN from '../constants/actionTypes';

export const setToken = token =>({
	type: 'SET_TOKEN',
	token_element: token
}) 

export const addListDogs = dogs =>({
	type: 'RENDER_DOGS',
	dogs: dogs
})