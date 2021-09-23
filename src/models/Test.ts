import { Schema, model } from 'mongoose'

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

interface Geo {
    name: String,
    age: Number,
    address: String
}

const geoSchema = new Schema<Geo>({
    name: String,
    age: Number,
    address: String
})
export const TestModel = model<Test>("reportModel", testSchema, 'reportModel');
export const GeoSchema = model<Geo>("geoModel", geoSchema, 'geoModel');