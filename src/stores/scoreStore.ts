import { defineStore } from 'pinia'
import type { IScoreStore } from './utils'
import cryptojs from 'crypto-js'
import { resource } from '../config/data'

const scoreStore = defineStore('ScoreStore', {
  state: (): IScoreStore => ({
    data: {
      students: []
    },
    current: undefined,
    isLogin: false
  }),
  getters: {
    getUsers: (state) => state.data.students,
    isAuth: (state) => state.isLogin,
    getRegister: (state) => {
      const registers = []
      for (const student of state.data.students) {
        //
        if (student.identity === state.current?.identity) {
          registers.push(student)
        }
      }
      return registers
    }
  },
  actions: {
    init(secretKey: string) {
      const message = resource.message

      this.data.students = JSON.parse(
        cryptojs.AES.decrypt(message, secretKey + 'Rq9cGYeyWwKW').toString(cryptojs.enc.Utf8)
      )
    },
    login(username: string, password: string) {
      const { students } = this.data
      console.log(!username, !password)

      if (!username || !password) return false

      for (const student of students) {
        const pwd = student.birthday
        console.log(student.identity, pwd)

        if (student.identity === username && password === pwd) {
          this.isLogin = true
          this.current = student
          break
        }
      }
    },
    logout() {
      this.isLogin = false
      this.current = undefined
    }
  }
})

export default scoreStore
export { scoreStore }
