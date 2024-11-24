import React from 'react'

interface WrapperCompProps {
    title: String;
    children: any;
}


const WrapperComp = (props: WrapperCompProps) => {
    return (
        <div style={{ minHeight: "90vh", background: "#1e2222", display: "flex", flexDirection: "column", padding: "10px" }}>
            {props.children}
        </div>
    )
}

export default WrapperComp