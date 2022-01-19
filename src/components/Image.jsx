import { memo } from "react";

const Image = memo(({img, width})=>{
    return(
        <img src={img} alt={img} style={width && {width}}/>
    )
})
export default Image