import { ghpages } from 'gh-pages';
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/LFClaro/luiz_react.git";

ghpages.publish(
  pathname,
  {
    branch: "main",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
