import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { GET_ISSUES } from '../query/query';
import SetComment from './SetComment';


export default function GetIssues({ link }) {

    const [showField, setShowField] = useState(false)

    

    const repoInfo = link.split("/")
    const repoName = repoInfo.pop()
    const repoOwner = String(repoInfo.pop())
    const { loading, error, data } = useQuery(GET_ISSUES, { variables: { repoName, repoOwner } })

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
        <div>
            <h1>{repoName}</h1>
            <hr />
            {
                data.repository.issues.nodes.map((item, index) => (
                    <div key={index} >
                        <h2>{item.author.login} --- {item.title}</h2>
                        <h3>{item.body}</h3>
                        <h2>Comments: </h2>
                        {item.comments.nodes.map((comment, i) => (
                            <div key={i}>
                                <h3>{comment.author.login}:</h3>
                                <p>{comment.body}</p>
                            </div>

                        ))}
                        {
                            showField === `true${item.id}` ?
                                <SetComment id={item.id} repoName={repoName} repoOwner={repoOwner} />
                                :
                                <button className='buttonComment'
                                    onClick={() => (
                                        setShowField(true + item.id)
                                    )}
                                >
                                    ADD NEW COMMENT
                                </button>
                        }

                        <hr />
                    </div>
                ))
            }
        </div>
    );
}

