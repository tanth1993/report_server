import { Schema, model } from 'mongoose'
export interface INewsModel {
    title?: string
    content?: string
    imageUrl?: string
}

const NewsModelSchema = new Schema<INewsModel>({
    title: String,
    content: String,
    imageUrl: String
})

export const NewsModel = model<INewsModel>("NewsModel", NewsModelSchema, 'NewsModel');