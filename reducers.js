import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';
import {
	ADD_COMMENT,
	REMOVE_COMMENT,
	EDIT_COMMENT,
	THUMB_UP_COMMENT,
	THUMB_DOWN_COMMENT
} from './actions';


const initialState = {
	comments: [],
	users: []
};

const app = combineReducers({
    comments,
    users
});

export default app;

/* - DLACZEGO TE DWIE RZECZY PONIŻEJ I POWYŻEJ "TO TO SAMO" ???
function app(state = initialState, action) {
	return {
		comments: comments(state.comments, action),
		users: users(state.users, action)
	};
}
*/
