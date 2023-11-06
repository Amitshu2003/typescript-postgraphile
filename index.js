const express = require("express");
const { postgraphile } = require("postgraphile");

const app = express();

app.use(
  postgraphile(
    process.env.DATABASE_URL || "postgres://postgres:8989@localhost:5433/demo",
    "public",
    {
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true,
      // dynamicJson: true
    }
  )
);

app.listen(process.env.PORT || 4000);