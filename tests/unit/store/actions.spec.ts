import actions from '@/store/actions'
import nock from 'nock';

describe('actions', () => {
    const getInterceptor =  nock('https://jsonplaceholder.typicode.com')
        .filteringPath(() => '/')
        .get('/');    

    const mockTask = { id: 1, completed: false, title: 'buy milk'}

    test('fetchTasks triggers commit with fetched tasks', async () => {
        const payload = [mockTask]
        const context = {
            commit: jest.fn()
        }
        const scope = getInterceptor.reply(200, payload)

        await actions.fetchTasks(context)

        scope.done()

        expect(context.commit).toHaveBeenCalledWith('setTasks', payload)
    });
});