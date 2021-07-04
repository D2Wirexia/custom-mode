import {useEffect, useState} from "react";

const useRequest = request => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	useEffect(()=>{
		setLoading(true);
		setTimeout(()=>{
			request().then(response => setData(response.data))
				 .catch(error => setError(error))
				 .finally(() => setLoading(false))
		}, 1500);

	}, []);

	return [data, loading, error]
};

export default useRequest;