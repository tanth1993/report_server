import { Schema, model } from 'mongoose'

interface IGradeTenScoreModel {
    // _id?: string
    gradeId?: string
    subjectId?: string
    score?: number
    studentId?: string

}

const GradeTenScoreModelSchema = new Schema<IGradeTenScoreModel>({
    // _id: String,
    gradeId: String,
    subjectId: String,
    score: Number,
    studentId: String,
})

export const GradeTenScoreModel = model<IGradeTenScoreModel>("GradeTenScoreModel", GradeTenScoreModelSchema, 'GradeTenScoreModel');