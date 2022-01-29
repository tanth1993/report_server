import { Schema, model } from 'mongoose'

interface IGradeTwelveScoreModel {
    // _id?: string
    gradeId?: string
    subjectId?: string
    score?: number
    studentId?: string

}

const GradeTwelveScoreModelSchema = new Schema<IGradeTwelveScoreModel>({
    // _id: String,
    gradeId: String,
    subjectId: String,
    score: Number,
    studentId: String,
})

export const GradeTwelveScoreModel = model<IGradeTwelveScoreModel>("GradeTwelveScoreModel", GradeTwelveScoreModelSchema, 'GradeTwelveScoreModel');