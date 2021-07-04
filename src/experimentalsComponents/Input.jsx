import React, {useState} from "react";
import useInput from "./hoook/useInput";

const Input = React.memo(() => {
	console.log('fun');
	const username = useInput('');
	const password = useInput('');
	const [showEnteredData, setShowEnteredData] = useState(false);
	return(
		 <div>
			 <h1>Input hook</h1>
			 <input {...username} type="text" placeholder="User name"/>
			 <input {...password} type="text" placeholder="E-mail"/>
			 <button onClick={()=>setShowEnteredData(!showEnteredData)}>Save</button>
			 <div>
				 <h3>User name: </h3><div>{username.value}</div>
				 <h3>E-mail: </h3><div>{password.value}</div>
			 </div>
		 </div>
	)
});

export default Input;