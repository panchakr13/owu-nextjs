import React, {FC} from 'react';

type Props = {
    params: {id: string}
}

const UserPage:FC<Props> = ({params}) => {

    const {id} = params

    return (
        <div>
            User page content, id: {id}
        </div>
    );
};

export default UserPage;