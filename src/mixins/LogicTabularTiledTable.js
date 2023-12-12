import Swal from 'sweetalert2';
import { mapGetters } from 'vuex';

export default {
  props: {
    filter: {
      type: String,
    },
    searchName: {
      type: String,
    },
    searchGender: {
      type: String,
    },
    searchNational: {
      type: String,
    },
    page: {
      type: Number,
    },
    limit: {
      type: Number,
    },
  },
  data() {
    return {
      options: {
        weekday: 'long',
      },
      options2: {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      },
      options3: {
        hour: 'numeric',
        minute: 'numeric',
      },
      counter: 0,
    };
  },
  computed: {
    ...mapGetters(['allContacts']),
    contacts() {
      const arr = this.$store.getters.allContacts;
      if (this.filter === 'name' && this.searchName) {
        this.$store.commit('filterByNameContacts', this.searchName);
        const filteredArr = this.$store.getters.filteredContacts;
        return filteredArr;
      } if (this.filter === 'gender' && this.searchGender) {
        this.$store.commit('filterByGenderContacts', this.searchGender);
        const filteredArr2 = this.$store.getters.filteredContacts;
        return filteredArr2;
      } if (this.filter === 'national' && this.searchNational) {
        this.$store.commit('filterByNationalContacts', this.searchNational);
        const filteredArr3 = this.$store.getters.filteredContacts;
        return filteredArr3;
      }
      return arr;
    },
    paginationContacts() {
      // eslint-disable-next-line prefer-const
      let from = (this.page - 1) * this.limit;
      // eslint-disable-next-line prefer-const
      let to = from + this.limit;
      if (this.filter) {
        const number = this.contacts.length;
        this.$store.commit('actualLengthContacts', number);
      }
      return this.contacts.slice(from, to);
    },
    // * сортировка происходит на каждой странице
    PagSortContacts() {
      const arr = this.paginationContacts;
      if (this.counter === 1) {
        // ! sort() для того, чтобы работать с клоном ммассива и исходный не мутировать
        // eslint-disable-next-line max-len
        const sortedAz = arr.slice().sort((a, b) => a.name.first.toLowerCase().localeCompare(b.name.first.toLowerCase()));
        return sortedAz;
      }
      if (this.counter === 2) {
        // eslint-disable-next-line max-len
        const sortedZa = arr.slice().sort((a, b) => b.name.first.toLowerCase().localeCompare(a.name.first.toLowerCase()));
        return sortedZa;
      }
      if (this.counter === 3) {
        // eslint-disable-next-line max-len
        return arr;
      }
      return this.paginationContacts;
    },
    sizeCollection() {
      return this.$store.getters.allContactsLength;
    },
    AmountMaleGender() {
      return this.$store.getters.AmountMaleGender;
    },
    AmountFemaleGender() {
      return this.$store.getters.AmountFemaleGender;
    },
    isMore() {
      if (this.AmountMaleGender > this.AmountFemaleGender) {
        return 'мужчин';
      }
      return 'женщин';
    },
    amountContacts() {
      const contacts = Object.entries(this.$store.getters.getAllNationalities);
      return contacts;
    },
  },
  methods: {
    copyValue(value) {
      navigator.clipboard.writeText(value);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Скопировано!',
        showConfirmButton: false,
        timer: 1500,
      });
    },
    sortContacts(value) {
      this.counter += value;
      if (this.counter === 3) {
        this.counter = 0;
      }
    },
  },
};
