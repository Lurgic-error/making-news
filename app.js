const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('a94eb0bf40fb4673b027dbd81b20e736');
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
newsapi.v2.topHeadlines({
  sources: 'bbc-news,the-verge',
//   q: 'bitcoin',
//   category: 'business',
  language: 'en',
//   country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});