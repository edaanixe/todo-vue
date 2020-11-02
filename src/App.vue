<template>

<div class="container d-flex justify-content-center" id="app">
  <div class="card px-3 mt-5 w-100">
    <div class="card-body">
      <h4 class="card-title">Todo list</h4>
      
      <task-form @add-task="title => addTask(title)"></task-form>

      <task-list>
          <task v-for="task in tasks" 
            :key="task.id"
            :id="task.id"
            :title="task.title"              
          	:completed="task.completed"
            @resolved="taskId => resolveTask(taskId)"
            @remove="taskId => removeTask(taskId)"
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
import TaskForm from './containers/TaskForm'
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
    Task,
    TaskForm
  },
  data() {
    return {
      taskTitle: '1'
    }
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
