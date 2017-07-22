var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    todo: null,
    editTodo: null,
    todos: []
  },
  methods: {
    addTodo(todo) {
      if(!this.todoIsValid) {
        return;
      }

      this.todos.push({content: todo, finished: false, isEdited: false});
      this.todo = null;
    },
    edit(todo) {
      this.editTodo = todo.content;
      todo.isEdited = true;
    },
    update(todo) {
      if(!this.editTodoIsValid) {
          return;
      }

      todo.content = this.editTodo;
      todo.isEdited = false;
    },
    deleteTodo(todo) {
      this.todos = this.todos.filter( item => item != todo);
    }
  },
  computed: {
    todoIsValid() {
      return !!this.todo;
    },
    editTodoIsValid() {
      return !!this.editTodo;
    },
    beingEdited() {
      return this.todos.filter(todo => todo.isEdited).length > 0;
    }
  }
})
