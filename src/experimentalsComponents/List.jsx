import React, {useEffect, useRef, useState} from 'react';
import useScroll from "./hoook/useScroll";

const List = () => {
	const [todo, setTodo] = useState([]);
	const [page, setPage] = useState(1);
	const limit = 15;
	const parentRef = useRef();
	const childRef = useRef();

	const fetchTodo = (page, limit)=>{
		fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&page=${page}`)
			 .then(response => response.json())
			 .then(json => {
			 	setTodo(prev => [...prev, ...json]);
			 	setPage(prev => prev + 1);
			 })
	};

	useScroll(parentRef, childRef, ()=>fetchTodo(page, limit));

	const todoStyle = {
		padding: 20,
		border: '2px solid black',
		display: 'flex',
		justifyContent: 'space-between'
	};
	return (
		 <div>
			 <h1>Scroll hook</h1>
			 <div ref={parentRef} style={{height: '60vh', overflow: 'auto', width: '70%', margin: '0 auto'}}>
			 {todo.map((todo, i) => {
				 return <div key={todo.id} style={todoStyle}>
					 <div>{i+1}.</div>
					 <div>{todo.title}</div>
					 <div><input type="checkbox" defaultChecked={todo.completed}/></div>
				 </div>
			 })}
			 <div style={{height: 20, background: 'blue'}} ref={childRef}/>
			 </div>
		 </div>
	);
};
export default List;