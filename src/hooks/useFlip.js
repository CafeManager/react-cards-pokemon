import { useState } from "react";

function useFlip(flippedStart = false){
    const [flipped, setFlipped] = useState(flippedStart)
    
    function toggleFlipped(){
        setFlipped(flipped => !flipped)
    }

    return [flipped, toggleFlipped]
}

export default useFlip