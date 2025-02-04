import React, {FC} from 'react';

type Props = {
    params: {id: string}
}

const PostPage:FC<Props> = ({params}) => {

    const {id} = params;
    
    return (
        <div>
            Post page content, id: {id}
        </div>
    );
};

export default PostPage;