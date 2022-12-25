<template>
  <li class="px-2 py-1" v-for="tag in tags" :key="tag.id">
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        :value="tag.id"
        v-model="sortByTags"
        @change="sort_by_tags(sortByTags)"
        :id="'flexCheck' + tag.id"
      />
      <label class="form-check-label ms-1" :for="'flexCheck' + tag.id">
        {{ tag.name }}
      </label>
    </div>
  </li>
</template>

<script>

export default {
  name: "Tags",
  props: ["tags"],
  methods: {
    sort_by_tags(sortByTags) {
      this.$emit('sortByTags', sortByTags)
    }
  },
  data() {
    return {
      sortByTags: [],
    };
  },

};
</script>

<style lang="scss" scoped>
li {
  font-size: 14px;
  label {
    cursor: pointer;
    color: #444;
    transition: 0.3s;
    &:hover {
      color: #0066ff;
    }
  }
}
</style>
