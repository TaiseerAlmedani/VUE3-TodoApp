import TodosItem from "./TodosItem.js";
export default {
  components: {
    TodosItem,
  },
  /*html*/
  template: `
  <div :class="className" v-if="todosArray.length">
  <h1>{{ title }}</h1>
  <button 
   v-for="tag in tags">{{ tag }}</button>
  <ul>
    <todos-item 
     v-for="todo in todosArray"
     :key="todo.id"
     :todoItem="todo">
      </todos-item>
  </ul>
</div>
  `,
  props: {
    title: String,
    todosArray: Array,
    className: String,
  },
  data(){
    return{
      currentTag:''
    }
  },
  computed:{
    tags(){
      return new Set(this.todosArray.map(a=>a.tag))
    }
  },
  methods:{
    filteredArray(){
      alert(tag)
    }
  }
};
