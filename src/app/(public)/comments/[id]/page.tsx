import React, {FC} from 'react';

type Props = {
    params: {id: string}
}

const CommentPage: FC<Props> = ({params}) => {

    const {id} = params;

    return (
        <div>
            Comment page content, id: {id}
        </div>
    );
};

export default CommentPage;