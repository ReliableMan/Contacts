<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<template>
  <div class="main" :class="classes">
    <div class="w-75"
      style="display: flex; justify-content: space-evenly; align-items: center; cursor: pointer">
        <h4>Contacts</h4>
          <choose-table-view @updateTable="updateTableView"/>
          <b-icon @click="updateAllContent" icon="arrow-clockwise" font-scale="3"></b-icon>
    </div>

    <div class="w-50 mt-4" v-if="isAdmin">
      <div>
        <b-form-select v-model="selected" class="mb-3">
          <template #first>
            <b-form-select-option value="null">Не выбрано</b-form-select-option>
          </template>
            <b-form-select-option value="name">По полному имени</b-form-select-option>
            <b-form-select-option value="gender">По половому признаку</b-form-select-option>
            <b-form-select-option value="national">По национальности</b-form-select-option>
        </b-form-select>

        <!-- Search by name -->
        <b-form-input
          v-if="selected === 'name'"
          v-model="searchName"
          placeholder="Введите имя">
        </b-form-input>

        <!-- Search by gender -->
          <b-form-group
            v-if="selected === 'gender'"
            label="Введите пол"
            v-slot="{ ariaDescribedby }">

            <b-form-radio
              v-model="searchGender"
              :aria-describedby="ariaDescribedby"
              name="some-radios" value="male">
                мужской
            </b-form-radio>
            <b-form-radio
              v-model="searchGender"
              :aria-describedby="ariaDescribedby"
              name="some-radios" value="female">
                женский
            </b-form-radio>
          </b-form-group>

          <!-- Search by national -->
          <b-form-input
            v-if="selected === 'national'"
            v-model="searchNational"
            placeholder="Введите национальность">
          </b-form-input>
      </div>
   </div>

    <keep-alive>
      <!-- табличный вид -->
      <div v-if="tableView === 'tabular'" class="mt-4">
        <tabular-table
          :page="page"
          :limit="limit"
          :filter="selected"
          :searchName="searchName"
          :searchGender="searchGender"
          :searchNational="searchNational"/>
      </div>
      <!-- плиточный вид -->
      <div v-else class="mt-4">
        <tiled-table
          :page="page"
          :limit="limit"
          :filter="selected"
          :searchName="searchName"
          :searchGender="searchGender"
          :searchNational="searchNational"/>
      </div>
    </keep-alive>

      <!-- pagination -->
      <div class="mt-3 page__wrapper">
          <div
            v-for="pageNumber in filteredPages"
            :key="pageNumber"
            class="page"
            :class="{'current-page': page === pageNumber}"
            @click="changePage(pageNumber)"
            > {{ pageNumber }}
          </div>
      </div>

  </div>
</template>

<script>
import ChooseTableView from '@/components/ContactPage/ChooseTableView.vue';
import TabularTable from '@/components/ContactPage/TabularTable.vue';
import TiledTable from '@/components/ContactPage/TiledTable.vue';

export default {
  name: 'ContactPage',
  components: {
    ChooseTableView,
    TabularTable,
    TiledTable,
  },
  data() {
    return {
      tableView: localStorage.getItem('tableView') || 'tabular',
      page: 1,
      limit: 10,
      selected: '',
      totalPage: '',
      searchName: '',
      totalPages: null,
      searchGender: '',
      searchNational: '',
      countAllContacts: 200,
    };
  },
  computed: {
    isAdmin() {
      const admin = localStorage.getItem('role');
      if (admin === 'admin') return true;
      return false;
    },
    classes() {
      return {
        'main-tiled': this.tableView === 'tiled' && !this.selected,
      };
    },
    filteredPages() {
      const number = this.$store.getters.countFilteredContacts;
      if (number) {
        const value = Math.ceil(number / this.limit);
        return value;
      } if (number === 0) {
        const value = 0;
        return value;
      }
      const defaultNum = Math.ceil(this.countAllContacts / this.limit);
      return defaultNum;
    },
  },
  async mounted() {
    this.totalPages = Math.ceil(this.countAllContacts / this.limit);
    this.$store.dispatch('fetchContacts');
  },
  methods: {
    updateTableView(value) {
      this.tableView = value;
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    updateAllContent() {
      this.$store.dispatch('fetchContacts');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/contact-page.styles.scss';
</style>
