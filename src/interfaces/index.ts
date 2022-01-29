export interface ITotal<T> {
    _id?: T
    total?: number
}
export interface IQuery {
    isMale?: boolean
    gradeId?: number
    subjectId?: string
}
export interface IPaginationQuery {
    text?: string
    page?: number
    pageSize?: number
}
export interface IPaginationData<T> {
    data: T
    totalCount: number
}
