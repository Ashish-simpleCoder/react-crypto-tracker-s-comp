import { memo } from "react";

const MainWrapper = memo(({children})=>{
    return (
        <main>
            {children}
        </main>
    )
})
export default MainWrapper