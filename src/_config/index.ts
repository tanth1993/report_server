import { connect, Schema, model, Document } from 'mongoose'

const userName = 'tan2cang'
const pass = 'tan123456'
const dbName = 'reports'
const uri = `mongodb+srv://${userName}:${pass}@cluster0.3ecjs.mongodb.net/${dbName}?retryWrites=true&w=majority`


export function connectDB() {
    connect(uri);
}

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