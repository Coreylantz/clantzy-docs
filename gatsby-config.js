const dotenv = require("dotenv");

if (process.env.ENVIROMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    `@contentful/gatsby-transformer-contentful-richtext`,
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    }
  ]
};
