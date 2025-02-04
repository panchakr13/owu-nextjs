import type {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: "UserLayout",
    description: "",
};
type Props = { children: React.ReactNode }

const UserLayout  = ({children} : Props) => {
    return (
        <>
            {children}
        </>
    );
};

export default UserLayout;