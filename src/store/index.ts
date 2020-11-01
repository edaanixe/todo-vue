/* eslint-disable no-mixed-spaces-and-tabs */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Task {
  title: string;
  completed: boolean;
  id: number;
}
const requestURL = 'https://jsonplaceholder.typicode.com/users/1/todos'

export default new Vuex.Store({
  state: {
  	tasks: new Array<Task>()
  },  
  mutations: {
    setTasks(state, tasks){
    	state.tasks = tasks
    },
    addTask(state, title){
    	const newTask = {
      	title,
        completed: false,
        id: Math.random(),
      }
    	state.tasks = [...state.tasks, newTask]  
    },
    removeTask(state, taskId){
    	state.tasks = state.tasks.filter(t=> t.id!==taskId)
    },
    resolveTask(state, taskId){
    	state.tasks = state.tasks.map(t=> {
      	if(t.id === taskId){
        	return {...t, completed: !t.completed}
        }
        
        return t
      })
    }
  },
  actions: {
  	fetchTasks({ commit }){
      return fetch(requestURL)
        .then(response => response.json())
        .then(tasks => {
          commit('setTasks', tasks)
        })    
    }
  }
})
