import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "CommentLayout",
    description: "",
};
type Props = { children: React.ReactNode }

const CommentLayout  = ({children} : Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentLayout;