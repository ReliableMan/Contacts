<template>
   <b-dropdown text="Вид">
      <b-dropdown-item @click="setView('tabular')">табличный</b-dropdown-item>
      <b-dropdown-item @click="setView('tiled')">плиточный</b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
  name: 'ChooseTableView',
  methods: {
    setView(value) {
      this.$store.commit('setTableView', value);
      localStorage.setItem('tableView', value);
      this.$emit('updateTable', value);
    },
  },
};
</script>
