import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { GET_ISSUES, SET_COMMENT } from '../query/query';


export default function SetComment({ id, repoName, repoOwner }) {


    const [inputValue, setInputValue] = useState('')

    const onChange = (event) => {
        setInputValue(event.target.value);
    };

    const [addComment, { loading, error }] = useMutation(SET_COMMENT, {
        refetchQueries: [
            {
                query: GET_ISSUES,
                variables: { repoName, repoOwner }
            }
        ],
        awaitRefetchQueries: true,
    })

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className='comment'>
            <textarea id={"comment" + id} className='commentInput' onChange={onChange} />
            <button className='buttonComment'
                onClick={() => (
                    addComment({ variables: { input: { subjectId: id, body: inputValue } } })
                )}
            >
                ADD COMMENT
            </button>
        </div>
    );
}

