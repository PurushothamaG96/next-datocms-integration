export const PAGE_CONTENT_QUERY = `query MyQuery{
    allArticles{
      title
      excerpt
      publishDate
      id
      slug
      author{
        name
      }
      coverImage{
        url
      }
      content{
        value
      }
    }
  }`;
