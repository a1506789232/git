<template>
  <div>
    <ul>
      <li>{{ obj.base }}</li>
      <li>{{ obj.title }}</li>
      <li>{{ obj.fenxiang }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    obj: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
div {
  height: 30px;
  background-color: #ddd;
  line-height: 30px;
}
ul {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content:space-between;
  list-style: none;
  font-size: 12px;
}
</style>
