// Auth
db.getSiblingDB("admin").auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD,
);

// New user and DB
db.createUser({
    user: process.env.MONGO_USERNAME,
    pwd: process.env.MONGO_PASSWORD,
    roles: [
        {
          role: "readWrite",
          db: process.env.MONGO_INITDB_DATABASE,
        },
    ],
});