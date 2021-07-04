import React, {useRef} from "react";
import useHover from "./hoook/useHover";

const Hover = () => {
	const ref = useRef();
	const isHover = useHover(ref);
	console.log('hover', isHover);
	return(
		 <div>
			 <h1>Hover hook</h1>
			 <div ref={ref} style={{width: 300, height: 300,
				 background: isHover ? 'green' : 'red', margin: '0 auto'}}/>
		 </div>
	)
};

export default Hover;