import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "PostsLayout",
    description: "",
};
type Props = { children: React.ReactNode }

const PostsLayout  = ({children} : Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostsLayout;