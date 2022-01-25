import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;


export const getPosts = async (category, slug) => {
    const query = gql`
    query MyQuery {
        violinUpsConnection {
          edges {
            node {
              authors {
                    name
                    id
                    photo {
                    url
                    }
                }
              }
              createdAt
              slug
              title
              photo {
                url
              }
            }
          }
        }
      }
    `;

    const result = await request(graphqlAPI, query);

    return result.violinUpsConnection.edges;
  };


  export const myPost = `
  query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
          content {
            text
            html
            markdown
            raw
          }
        }
      }
    }
  }
  `;
  