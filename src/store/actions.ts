import { SET_LOGGEDIN_USER, SET_TASKS, SET_USER } from '@/constants'
import fetch from 'node-fetch'

const requestURL = 'https://jsonplaceholder.typicode.com/users/1/todos'

export default {
    async fetchTasks({ commit }: {commit: Function}){
        const response = await fetch(requestURL)
        const tasks = await response.json()
        commit(SET_TASKS, tasks)
    },
    fetchUser({ commit }: {commit: Function}, user: { displayName: string; email: string }) {
      commit(SET_LOGGEDIN_USER, user !== null);
      if (user) {
        commit(SET_USER, {
          displayName: user.displayName,
          email: user.email
        });
      } else {
        commit(SET_USER, null);
      }
    }
  }
