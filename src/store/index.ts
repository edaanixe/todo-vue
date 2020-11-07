import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

import {
  ADD_TASK,
  FETCH_TASKS,
  FETCH_USER,
  LOGOUT,
  REMOVE_TASK,
  RESOLVE_TASK,
  SET_LOGGEDIN_USER,
} from '../constants'

Vue.use(Vuex)

export const mapState = Vuex.mapState(['tasks', 'user'])
export const mapActions = Vuex.mapActions([FETCH_TASKS, FETCH_USER]) 
export const mapMutations = Vuex.mapMutations([
  ADD_TASK, 
  REMOVE_TASK,
  RESOLVE_TASK,
  SET_LOGGEDIN_USER,
  LOGOUT
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
