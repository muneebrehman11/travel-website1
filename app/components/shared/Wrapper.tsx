import { FC } from "react";

const Wrapper:FC<{children:React.ReactNode}>=  ({children})=>{
    return (
        <div className="px-28 max-w-screen-2xl mx-auto">
            {children} 
        </div>
    )
}
export default Wrapper