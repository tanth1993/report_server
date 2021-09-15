import { connect, Schema, model, Document, connection } from 'mongoose'

const userName = 'tan2cang'
const pass = 'tan123456'
const dbName = 'reports'
const uri = `mongodb+srv://${userName}:${pass}@cluster0.3ecjs.mongodb.net/${dbName}?retryWrites=true&w=majority`

connect(uri);
// export async function connectDB() {
//     await connect(uri);
// }
const db = connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
interface Test {
    name: string;
    age: number;
    address?: string;
}
const testSchema = new Schema<Test>({
    name: String,
    age: Number,
    address: String
})

export const TestModel = model("reports", testSchema);