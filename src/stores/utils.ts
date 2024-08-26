export interface IStudents {
  uuid: number
  name: string
  identity: string // 身分證
  birthday: string // 生日
  score: number // 分數
  department: string // 科系
  lowest: number // 最低錄取分數
}
export interface IScoreStore {
  data: {
    students: IStudents[]
  }
  current?: IStudents
  isLogin: boolean
}
