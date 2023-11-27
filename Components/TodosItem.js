export default {
  /*html*/
  template: `
  <li>
      <label>
        {{ todoItem.title }}
        <input type="checkbox" v-model="todoItem.isComplete" />
      </label>
    </li>
  `,
  props: {
    todoItem: Object,
  },
};
