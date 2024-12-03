import React from 'react'
import LoadingSkeletonComp from './LoadingSkeletonComp';
import ErrorSkeletonComp from './ErrorSkeletonComp';

interface WrapperCompProps {
    title: String;
    children: any;
    loading?: boolean;
    error?: boolean;
    noData?: boolean;
}


const WrapperComp = (props: WrapperCompProps) => {
    if (props.loading) return <LoadingSkeletonComp />
    if (props.error) return <ErrorSkeletonComp />
    return (
        <div style={{ minHeight: "90vh", background: "#1e2222", display: "flex", flexDirection: "column", padding: "10px" }}>
            {props.children}
        </div>
    )
}

export default WrapperComp