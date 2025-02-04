import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CommentsLayout",
    description: "",
};
type Props = { children: React.ReactNode }

const CommentsLayout  = ({children} : Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentsLayout;