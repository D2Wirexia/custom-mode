import React from 'react';
import axios from "axios";
import useRequest from "./hoook/useRequest";

const Request = () => {

	const fetchTodo = ()=>{
		return axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=5&page=1`)
	};
	const [todo, loading, error] = useRequest(fetchTodo);

	const todoStyle = {
		padding: 20,
		border: '2px solid black',
		display: 'flex',
		justifyContent: 'space-between'
	};
	if(loading) return <h2>Loading...</h2>;
	if(error) return <h2>Error!</h2>;
	return (
		 <div>
			 <h1>Request hook</h1>
			 {todo?.map((todo, i) => {
				 return <div key={todo.id} style={todoStyle}>
					 <div>{i+1}.</div>
					 <div>{todo.title}</div>
					 <div><input type="checkbox" defaultChecked={todo.completed}/></div>
				 </div>
			 })}
		 </div>
	);
};
export default Request;