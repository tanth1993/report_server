import { connect, connection } from 'mongoose'

const userName = 'tan2cang'
const pass = 'tan123456'
const dbName = 'reports'
const uri = `mongodb+srv://${userName}:${pass}@cluster0.3ecjs.mongodb.net/${dbName}?retryWrites=true&w=majority`

// const MONGODB_URI = process.env.MONGODB_URI

// if (!MONGODB_URI) {
//     throw new Error(
//         'Please define the MONGODB_URI environment variable inside .env.local'
//     )
// }

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnection() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        // const opts = {
        //   useNewUrlParser: true,
        //   useUnifiedTopology: true,
        //   bufferCommands: false,
        //   bufferMaxEntries: 0,
        //   useFindAndModify: false,
        //   useCreateIndex: true,
        // }

        cached.promise = connect(uri).then((mongoose) => {
            return mongoose
        })
    }
    cached.conn = await cached.promise

    return cached.conn
}

const db = connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Mongo Atlas Connected successfully");
});

export default dbConnection