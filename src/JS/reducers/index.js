import React from 'react';
import { combineReducers } from 'redux';
import {authenticate} from './authenticate'
import {renderDogs} from './authenticate'

export default combineReducers({
	authentic: authenticate,
	//renderD: renderDogs
})