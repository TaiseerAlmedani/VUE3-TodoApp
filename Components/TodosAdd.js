export default {
  /*html*/
  template: `
  <form v-on:submit.prevent="addNewTodo">
  <input type="text" class="addTodo" v-model="newTodo" placeholder="New Todo">
  <input type="text"  class="addTag" v-model="newTag" placeholder="New Tag">
  <input type="submit" value="ADD⚡">
  </form>
  `,
  data() {
    return {
      newTodo: "",
      newTag: "",
    };
  },

  methods: {
    addNewTodo() {
      if (!this.newTodo) {
        alert("type todo plz!");
        return;
      }
      this.$emit("addToTheArray", this.newTodo, this.newTag);
      this.newTodo = "";
      this.newTag = "";
    },
  },
};
