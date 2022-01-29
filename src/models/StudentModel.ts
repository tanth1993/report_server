import { Schema, model } from 'mongoose'

export interface IStudentModel {
    // _id?: string
    studentId?: string
    name?: string
    birthday?: string
    isMale?: boolean
}

const StudentModelSchema = new Schema<IStudentModel>({
    // _id: String,
    studentId: String,
    name: String,
    birthday: String,
    isMale: Boolean,
})

export const StudentModel = model<IStudentModel>("StudentModel", StudentModelSchema, 'StudentModel');