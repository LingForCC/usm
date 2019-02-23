import Module, { state, action } from '../';

class TodoList extends Module {  
  @state list = [{todo: 'Learn Typescript'}]

  @action
  add(todo: object, state?: any) {
    state.list.push(todo);
  }

  async moduleDidInitialize() {
    console.log('moduleDidInitialize');
    this.add({todo: 'Learn C++'});
  }
}


class Index extends Module{}
const todoList = new TodoList();

const index = Index.create({
  modules: [todoList]
});

// TODO store.subscribe
// index.store.subscribe(() => {
//   // @ts-ignore
//   console.log(index.modules.todoList.list, todoList.ready);
// });
