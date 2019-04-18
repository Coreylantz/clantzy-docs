const dotenv = require("dotenv");

if (process.env.ENVIROMENT !== "production") {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId,
        accessToken
      }
    }
  ]
};
