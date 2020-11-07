import mutations from '../../../src/store/mutations'
import {State} from '../../../src/store/'

describe('mutations', () => {
    const mockTask = { id: 1, completed: false, title: 'buy milk'}
    let state: State

    beforeEach(() => {
        state = {
            tasks: [],
            user: {
                isLogged: false
            }
        }
    })

    test('setTasks sets state.tasks to tasks', () => {
        const tasks = [mockTask]

        mutations.setTasks(state, tasks)

        expect(state.tasks).toEqual(tasks)
    });

    test('addTask adds task into state.tasks', () => {
        mutations.addTask(state, 'play guitar')

        expect(state.tasks).toHaveLength(1)
    });

    test('removeTask removes task from state.tasks', () => {
        state.tasks = [mockTask]        

        mutations.removeTask(state, mockTask.id)

        expect(state.tasks).toHaveLength(0)        
    });   
    
    test('resolveTask toggle completed property', () => {
        state.tasks = [mockTask]        

        mutations.resolveTask(state, mockTask.id)

        expect(state.tasks[0].completed).toBeTruthy()

        mutations.resolveTask(state, mockTask.id)

        expect(state.tasks[0].completed).toBeFalsy()
    });      
});