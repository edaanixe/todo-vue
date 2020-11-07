<template>
<div>
  <nav-bar @logout="onLogout"></nav-bar>
  <br />
  <div class="container d-flex justify-content-center">
    <div class="card px-3 mt-5 w-100">
      <div class="card-body">
        <h4 class="card-title">Todo list</h4>
        
        <task-form @add-task="title => addTask(title)"></task-form>

        <task-list>
            <task-item v-for="task in tasks" 
              :key="task.id"
              :id="task.id"
              :title="task.title"              
              :completed="task.completed"
              @resolved="taskId => resolveTask(taskId)"
              @remove="taskId => removeTask(taskId)"
              >
            </task-item>    
        </task-list>     
        
      </div>
    </div>
  </div>

</div> 


</template>

<style lang="css">
  @import url(../styles.css);
</style>

<script>

import TaskList from '../components/TaskList'
import TaskItem from '../components/TaskItem'
import TaskForm from '../containers/TaskForm'
import NavBar from '../components/NavBar'
import firebase from 'firebase'

import { mapState, mapActions, mapMutations} from '../store'


export default {

  components: {
    TaskList,
    TaskItem,
    TaskForm,
    NavBar
  },
  computed: {
  	...mapState
  },
  methods: {
  	...mapActions,
    ...mapMutations,
    async onLogout(){
      try {
        await firebase.auth().logout()
        this.logout()
        this.$router.replace({ name: 'Login'})      
      } catch (error) {
        console.log(error) 
      }
    }
  },
	created() {
    this.fetchTasks()
  }
}

</script>
