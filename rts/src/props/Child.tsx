import React from "react";

interface ChildProps {
    color: string
    onClick: () => void
}

/*Props Approach 1*/
export const Child = ({color, onClick}: ChildProps) => {
    return <div>{color}
        <button onClick={onClick}>Click Me</button>
    </div>
}

/*Props Approach 2*/
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick,children}) => {
    return <div>{color}
        {children }
        <button onClick={onClick}>Click Me</button>
    </div>
}
