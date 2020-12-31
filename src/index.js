import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Sam"
					timeAgo="Today at 4:23PM"
					content="Great blog!"
					avatar="https://source.unsplash.com/random"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Alex"
					timeAgo="Today at 2:00AM"
					content="It really is nicely done!"
					avatar="https://source.unsplash.com/random"
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail
					author="Jane"
					timeAgo="Yesterday at 1:53PM"
					content="I tend to disagree."
					avatar="https://source.unsplash.com/random"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
