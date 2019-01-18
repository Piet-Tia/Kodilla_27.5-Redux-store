import React from 'react';
import './App.css';
import props from './CommentsListContainer';
import CommentsList from './CommentsListContainer.js';

const App = () => {
  return (
    <div className="App">
      Tu będzie lista komentarzy!!
      <CommentsList comments={props}/>
    </div>
  );
};

export default App;
