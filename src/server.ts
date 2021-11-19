import app from "./app";

const PORT = process.env.PORT;

//Listen Port
if (require.main == module) {
  app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT [--- ${PORT} ---]`);
  });
}
