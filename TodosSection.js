export default {
  template: /*html*/ `
  <div class="inProgress" v-if="InProgress.length">
  <h1>In Progress</h1>
  <ul>
    <li v-for="todo in InProgress" :key="todo.id">
      <label>
        {{ todo.title }}
        <input type="checkbox" v-model="todo.isComplete" />
      </label>
    </li>
  </ul>
</div>
<div class="done" v-show="Done.length">
  <h1>Done</h1>
  <ul>
    <li v-for="todo in Done" :key="todo.id">
      <label>
        {{ todo.title }}
        <input type="checkbox" v-model="todo.isComplete" />
      </label>
    </li>
  </ul>
</div>
  `,
  data() {
    return {
      todos: [
        { id: 1, title: "study the vue lesson", isComplete: false },
        { id: 2, title: "Do the homework", isComplete: false },
        { id: 3, title: "Read from the Docs", isComplete: true },
      ],
    };
  },
  computed: {
    InProgress() {
      return this.todos.filter((todoItem) => !todoItem.isComplete);
    },
    Done() {
      return this.todos.filter((todoItem) => todoItem.isComplete);
    },
  },
};
