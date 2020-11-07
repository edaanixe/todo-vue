import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const mapState = Vuex.mapState(['tasks', 'user'])
export const mapActions = Vuex.mapActions(['fetchTasks', 'fetchUser']) 
export const mapMutations = Vuex.mapMutations([
  'addTask', 
  'removeTask',
  'resolveTask',
  'setLoggedInUser',
  'logout'
])

export interface Task {
  title: string;
  completed: boolean;
  id: number;
}

export interface State {
  tasks: Task[];
  user: {
    isLogged: boolean;
    data?: object;
  };
}

const state: State = {
  tasks: new Array<Task>(),
  user: {
    isLogged: false
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
