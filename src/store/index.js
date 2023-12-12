/* eslint-disable max-len */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    role: '',
    contacts: [],
    numberOfUser: null,
    tableView: 'tabular',
    filteredContacts: [],
    defaultNumberOfUser: 200,
  },
  getters: {
    allContacts(state) {
      return state.contacts;
    },
    allContactsLength(state) {
      return state.contacts.length;
    },
    AmountMaleGender(state) {
      return state.contacts.filter((el) => el.gender.toLowerCase() === 'male').length;
    },
    AmountFemaleGender(state) {
      return state.contacts.filter((el) => el.gender.toLowerCase() === 'female').length;
    },
    countFilteredContacts(state) {
      return state.numberOfUser;
    },
    filteredContacts(state) {
      return state.filteredContacts;
    },
    contactsCount(state) {
      return state.contacts.length;
    },
    getAllNationalities(state) {
      const array = state.contacts.map((item) => item.nat);
      return array.reduce((acc, el) => {
        acc[el] = (acc[el] || 0) + 1;
        return acc;
      }, {});
    },
  },
  mutations: {
    setRole(state, value) {
      state.role = value;
    },
    setTableView(state, value) {
      state.tableView = value;
    },
    updateContacts(state, arr) {
      state.contacts = arr;
    },
    filterByNameContacts(state, value) {
      state.filteredContacts = state.contacts.filter((el) => el.name.first.toLowerCase().includes(value.toLowerCase()));
    },
    filterByGenderContacts(state, value) {
      state.filteredContacts = state.contacts.filter((el) => el.gender.toLowerCase() === value.toLowerCase());
    },
    filterByNationalContacts(state, value) {
      state.filteredContacts = state.contacts.filter((el) => el.nat.toLowerCase().includes(value.toLowerCase()));
    },
    actualLengthContacts(state, value) {
      state.numberOfUser = value;
    },
  },
  actions: {
    async fetchContacts(ctx) {
      const number = ctx.state.defaultNumberOfUser;
      const response = await fetch(`https://randomuser.me/api/?results=${number}`);
      const arr = await response.json();
      const { results } = arr;
      ctx.commit('updateContacts', results);
    },
  },
});
