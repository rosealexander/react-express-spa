require("dotenv").config();

module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL.replace("://", "ql://", 1),
   "ssl": {
      "rejectUnauthorized": false
   },
   "synchronize": true,
   "logging": false,
   "entities": [
      process.env.NODE_ENV === "production" ? "build/model/**/*{.ts,.js}" : "src/model/**/*{.ts,.js}"
   ],
   "migrations": [
      "src/migration/**/*{.ts,.js}"
   ],
   "subscribers": [
      "src/subscriber/**/*{.ts,.js}"
   ],
   "cli": {
      "entitiesDir": "src/model",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};
