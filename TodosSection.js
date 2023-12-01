import TodosList from "./Components/TodosList.js";
import TodosAdd from "./Components/TodosAdd.js";
export default {
  components: { TodosList, TodosAdd },
  template: /*html*/ `
  <h1 class="main-title">Vue3 Todo App</h1>
 <todos-add @addToTheArray="add"></todos-add>
  <todos-list 
  title="In Progress" 
  className="inProgress"
  v-bind:todosArray="InProgress">
  </todos-list>
  <todos-list 
  title="Done" 
  className="done"
  v-bind:todosArray="Done">
  </todos-list>
  `,
  data() {
    return {
      todos: [
        { id: 1, title: "study the vue lesson", isComplete: false , tag:'course' },
        { id: 2, title: "Do the homework", isComplete: false      , tag:'course' },
        { id: 3, title: "Read from the Docs", isComplete: false  , tag:'study'},
        { id: 4, title: "Make mony", isComplete: true  ,           tag:'work'},
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
  methods: {
    add(addThisTitle , addThisTag) {
      this.todos.push({
        id: this.todos.length + 1,
        title: addThisTitle,
        isComplete: false,
        tag:addThisTag,
      });
    },
  },
};
