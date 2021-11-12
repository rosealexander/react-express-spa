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
      process.env.NODE_ENV === "production" ? "build/model/**/*.js" : "src/model/**/*.ts"
   ],
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "seeds": [
      "src/seeds/**/*.ts"
   ],
   "factories": [
      "src/factories/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
};
