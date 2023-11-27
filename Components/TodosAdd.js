export default {
  /*html*/
  template: `
  <form v-on:submit.prevent="addNewTodo">
  <input type="text" v-model="newTodo" placeholder="Add new Todo">
  <input type="submit" value="Add..➕">
  </form>
  `,
  data() {
    return {
      newTodo: "",
    };
  },

  methods: {
    addNewTodo() {
      if(!this.newTodo){
        alert('type todo plz!')
        return
      }
      this.$emit("addToTheArray", this.newTodo);
      this.newTodo = "";
    },
  },
};
