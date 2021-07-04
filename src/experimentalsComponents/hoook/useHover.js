import {useEffect, useState} from "react";

const useHover = ref => {
	const [isHovering, setIsHovering] = useState(false);
	const on = () => setIsHovering(true);
	const off = () => setIsHovering(false);
	useEffect(()=>{
		if(!ref.current) return;
		ref.current.addEventListener('mouseenter', on);
		ref.current.addEventListener('mousemove', on);
		ref.current.addEventListener('mouseleave', off);
		return () => {
			ref.current.removeEventListener('mouseenter', on);
			ref.current.removeEventListener('mousemove', on);
			ref.current.removeEventListener('mouseleave', off);
		};
	}, []);

	return isHovering;
};

export default useHover;
