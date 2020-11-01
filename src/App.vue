<template>

<div class="container d-flex justify-content-center" id="app">
  <div class="card px-3 mt-5 w-100">
    <div class="card-body">
      <h4 class="card-title">Todo list</h4>
      <div class="add-items d-flex">
        <input type="text" class="form-control todo-list-input" placeholder="What do you need to do today?" v-model="taskTitle" />
        <button class="add btn btn-primary font-weight-bold todo-list-add-btn" @click="addTask(taskTitle); taskTitle = ''">
          Add
        </button>
      </div>

      <task-list>
          <task v-for="task in tasks" 
            :key="task.id"
            :id="task.id"
            :title="task.title"              
          	:completed="task.completed"
            @resolved="taskId => $emit('task-resolved', taskId)"
            @remove="taskId => $emit('task-removed', taskId)"
            >
          </task>    
      </task-list>     
      
    </div>
  </div>
</div>

</template>

<style lang="css">
  @import url(https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css);
  @import url(./styles.css);
</style>

<script>
import Vuex from 'vuex'

import TaskList from './components/TaskList'
import Task from './components/Task'
import store from './store'

const mapState = Vuex.mapState(['tasks'])
const mapActions = Vuex.mapActions(['fetchTasks']) 
const mapMutations = Vuex.mapMutations([
  'addTask', 
  'removeTask',
  'resolveTask'
])

export default {
  store,
	components: {
    TaskList,
    Task
  },
  data: function() {
    return {
        taskTitle: ''
      };
  },
  computed: {
  	...mapState
  },
  methods: {
  	...mapActions,
    ...mapMutations
  },
	created() {
    this.fetchTasks()
  }
}

</script>
