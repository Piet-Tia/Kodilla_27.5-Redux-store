import {
	ADD_COMMENT,
	REMOVE_COMMENT,
	EDIT_COMMENT,
	THUMB_UP_COMMENT,
	THUMB_DOWN_COMMENT
} from './actions.js';

export function comments(state = [], action) {
	switch (action.type) {
		case ADD_COMMENT:
			return [{
				id: action.id,
				text: action.text,
				votes: 0
			}, ...state];
		case REMOVE_COMMENT:
			return state.filter(comment => comment.id !== action.id);
		case EDIT_COMMENT:
			return state.map(comment =>
					comment.id === action.id ? {
						...comment,
						...action
					} : comment);
		case THUMB_UP_COMMENT:
			return state.map(comment =>
					comment.id === action.id ? {
						...comment,
						votes: comment.votes + 1
					} : comment);
		case THUMB_DOWN_COMMENT:
		return state.map(comment =>
				comment.id === action.id ? {
					...comment,
					votes: comment.votes - 1
				} : comment);
		default:
			return state;
	}
}

/* zostawiam, zeby wiedziec skad sie wzielo to na gorze :) 
function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [{
					id: action.id,
					text: action.text,
					votes: 0
				}, ...state] // does this add only "comments" from "state" or whole "state"?
			});
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		case EDIT_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.map(comment =>
					comment.id === action.id ? {
						...state, // is this correct?
						text: action.text
					} : comment)
			});
		case THUMB_UP_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.map(comment =>
					comment.id === action.id ? {
						...state, // is this correct?
						votes = state.votes + 1
					} : comment)
			});
		case THUMB_DOWN_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.map(comment =>
					comment.id === action.id ? {
						...state, // is this correct?
						votes = state.votes - 1
					} : comment)
			});
		default:
			return state;
	}
}
*/
