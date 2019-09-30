import React, { useEffect } from "react";

let renderCount = 0;
const child = () => {
    useEffect(() => {
        renderCount++;
    })
    return <div>render count : {renderCount}</div>
}

export default child;