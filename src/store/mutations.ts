import { Task, State } from './index'

export default    {
    setTasks(state: State, tasks: Task[]){
    	state.tasks = tasks
    },
    addTask(state: State, title: string){
    	const newTask = {
      	title,
        completed: false,
        id: Math.ceil(Math.random() * 100),
      }
    	state.tasks = [...state.tasks, newTask]  
    },
    removeTask(state: State, taskId: number){
    	state.tasks = state.tasks.filter(t=> t.id!==taskId)
    },
    resolveTask(state: State, taskId: number){
    	state.tasks = state.tasks.map(t=> {
      	if(t.id === taskId){
        	return {...t, completed: !t.completed}
        }
        
        return t
      })
    }
  }