import React, {useState} from 'react';
import useDebounce from "./hoook/useDebounce";

const Search = () => {
	const [value, setValue] = useState('');

	const search = (query)=>{
		fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
			 .then(response => response.json())
			 .then(json => {
				console.log(json)
			 })
	};
	const debouncedSearch = useDebounce(search, 500);
	const onChange = event => {
		setValue(event.target.value);
		debouncedSearch(event.target.value)
	};
	return (
		 <div>
			 <h1>Debounce hook</h1>
			 <input type="text" value={value} onChange={onChange}/>
		 </div>
	);
};
export default Search;