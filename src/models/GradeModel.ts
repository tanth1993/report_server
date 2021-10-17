import { Schema, model } from 'mongoose'

interface IGradeModel {
    _id?: string
    gradeId?: string
    name?: string
}

const GradeModelSchema = new Schema<IGradeModel>({
    _id: String,
    gradeId: String,
    name: String,
})

export const GradeModel = model<IGradeModel>("GradeModel", GradeModelSchema, 'GradeModel');