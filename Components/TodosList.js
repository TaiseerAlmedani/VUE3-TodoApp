import TodosItem from "./TodosItem.js";
import TodosTag from "./TodosTag.js";
export default {
  components: {
    TodosItem, TodosTag
  },
  /*html*/
  template: `
  <div :class="className" v-if="todosArray.length">
  <h1>{{ title }}</h1>
  <todos-tag 
  v-model:currentTag="currentTag"
  :initalTags="todosArray.map(a=>a.tag)"
   ></todos-tag>
  <ul>
    <todos-item 
     v-for="todo in filteredArray"
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
  data() {
    return {
      currentTag: "all",
    };
  },
  computed: {
    // tags() {
    //   let arr = new Set(this.todosArray.map((a) => a.tag))
    //   let allItems = ["all"]
    //   arr.forEach(a => {
    //     allItems.push(a)
    //   });
    //   return allItems
    // },
   
    filteredArray(){
      if(this.currentTag === 'all') return this.todosArray
      return this.todosArray.filter(a=>a.tag === this.currentTag)
    }
  },
  // methods:{
  //   change(tagFromChield){
  //     this.currentTag = tagFromChield
  //   }
  // }
};
