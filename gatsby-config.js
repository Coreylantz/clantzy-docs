const dotenv = require("dotenv");

if (process.env.ENVIROMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    `@contentful/gatsby-transformer-contentful-richtext`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    }
  ]
};
