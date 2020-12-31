import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:23PM"
        content="Great blog!"
        avatar="https://source.unsplash.com/random"
      />
      <hr></hr>
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="It really is nicely done!"
        avatar="https://source.unsplash.com/random"
      />
      <hr></hr>
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 1:53PM"
        content="I tend to disagree."
        avatar="https://source.unsplash.com/random"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
