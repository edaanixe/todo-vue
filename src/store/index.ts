import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const mapState = Vuex.mapState(['tasks'])
export const mapActions = Vuex.mapActions(['fetchTasks']) 
export const mapMutations = Vuex.mapMutations([
  'addTask', 
  'removeTask',
  'resolveTask'
])

export interface Task {
  title: string;
  completed: boolean;
  id: number;
}

export interface State {
  tasks: Task[];
}

const state: State = {
  tasks: new Array<Task>()
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
