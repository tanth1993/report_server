import { Schema, model } from 'mongoose'
interface ISubjectModel {
    // _id?: string
    subjectId?: string
    subjectName?: string
    subjectNameVN?: string
}

const SubjectModelSchema = new Schema<ISubjectModel>({
    // _id: String,
    subjectId: String,
    subjectName: String,
    subjectNameVN: String,
})

export const SubjectModel = model<ISubjectModel>("SubjectModel", SubjectModelSchema, 'SubjectModel');