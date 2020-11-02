import fetch from 'node-fetch'

const requestURL = 'https://jsonplaceholder.typicode.com/users/1/todos'

export default {
    async fetchTasks({ commit }: {commit: Function}){
        const response = await fetch(requestURL)
        const tasks = await response.json()
        commit('setTasks', tasks)    
  }
}