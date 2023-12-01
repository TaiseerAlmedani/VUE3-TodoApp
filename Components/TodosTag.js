export default {
  template: /*HTML*/ `
  <button
  :class="{'active': currentTag === tag}"
   @click="$emit('update:currentTag' ,tag)"
   v-for="tag in tags">
   {{ tag }}
   </button>
  `,
  props: {
    initalTags: Array,
    currentTag: String,
  },
  computed: {
    tags() {
      return ["all", ...new Set(this.initalTags)];
    },
  },
};
