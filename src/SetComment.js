import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { SET_COMMENT } from './query/query';
import GetIssues from './GetIssues';


export default function SetComment({ id, setRefresh }) {

    const [addComment, { loading, error, data }] = useMutation(SET_COMMENT)

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className='comment'>
            <textarea id={"comment"+id} className='commentInput' />
            <button className='buttonComment'
                onClick={() => (
                    addComment({ variables: {input: { subjectId: id, body: document.getElementById("comment"+id).value }}}),
                    setRefresh(true)
                )}
            >
                ADD COMMENT
            </button>
        </div>
    );
}

