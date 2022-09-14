import db from "./config/database";

db.on("error", console.log.bind(console, "Database connection failed"));
db.once("open", () => {
  console.log("Database connected successfully");
});