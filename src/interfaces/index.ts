export interface ITotal<T> {
    _id?: T
    total?: number
}
export interface IQuery {
    isMale?: boolean
    gradeId?: number
    subjectId?: string
}