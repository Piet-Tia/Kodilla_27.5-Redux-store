import { combineReducers } from 'redux';
import {comments} from './comments.js';
import users from './users.js';


export const reducer = combineReducers({
    comments,
    users
});


/* - DLACZEGO TE DWIE RZECZY PONIŻEJ I POWYŻEJ "TO TO SAMO" ???
function app(state = initialState, action) {
	return {
		comments: comments(state.comments, action),
		users: users(state.users, action)
	};
}



const initialState = {
	comments: [],
	users: []
};

*/
