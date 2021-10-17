import { Schema, model } from 'mongoose'

interface IGradeElevenScoreModel {
    _id?: string
    gradeId?: string
    subjectId?: string
    score?: number
    studentId?: string

}

const GradeElevenScoreModelSchema = new Schema<IGradeElevenScoreModel>({
    _id: String,
    gradeId: String,
    subjectId: String,
    score: Number,
    studentId: String,
})

export const GradeElevenScoreModel = model<IGradeElevenScoreModel>("GradeElevenScoreModel", GradeElevenScoreModelSchema, 'GradeElevenScoreModel');