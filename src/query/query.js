import { gql } from '@apollo/client';



  export const GET_ISSUES =  gql`
  query Issues($repoName: String!, $repoOwner: String!) {
    repository(name: $repoName, owner: $repoOwner) {
      issues(first: 50, states: OPEN) {
        nodes {
          title
          body
          author {
            login
          }
          comments(first: 50) {
            nodes {
              author {
                login
              }
              body
            }
          }
          id
        }
      }
    }
  }
`

  export const SET_COMMENT = gql `
  mutation Mutation($input: AddCommentInput!) {
    addComment(input: $input) {
      clientMutationId
    }
  }
`