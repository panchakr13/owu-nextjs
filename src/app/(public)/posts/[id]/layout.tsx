import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "PostLayout",
    description: "",
};
type Props = { children: React.ReactNode }

const PostLayout  = ({children} : Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostLayout;