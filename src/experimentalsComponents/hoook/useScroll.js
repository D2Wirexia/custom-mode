import {useEffect, useRef} from "react";

const useScroll = (parentRef, childRef, callback) => {
	const observer = useRef();
	useEffect(()=>{
		const options = {
			root: parentRef.currentTarget,
			rootMargin: '0px',
			threshold: 0
		};
		observer.current = new IntersectionObserver(([target])=>{
			if(target.isIntersecting){
				callback();
				console.log('intersecting');
			}
		}, options);
		observer.current.observe(childRef.current);
		return ()=>{
			observer.current.unobserve(childRef.current);
		}
	}, [callback]);
};

export default useScroll;