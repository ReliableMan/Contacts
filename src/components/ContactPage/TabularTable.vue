<template>
  <!-- eslint-disable vue/require-v-for-key -->
  <div>
    <table class="table">
        <thead>
          <tr>
              <th>Avatar</th>
              <th class="fullname" @click="sortContacts(1)">Fullname</th>
              <th>Birthday</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Национальность</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="contact in PagSortContacts" :key="contact.email">
            <td><img :src="contact.picture.thumbnail" alt="thumbnail"></td>
            <td>{{ contact.name.title }} {{ contact.name.first }} {{ contact.name.last }}</td>
            <td>
              {{ new Date(contact.dob.date).toLocaleString('ru', options) }},
              {{ new Intl.DateTimeFormat("en-US", options2).format(new Date(contact.dob.date)) }},
              {{ new Date(contact.dob.date).toLocaleString('ru', options3) }},
              {{ contact.dob.age }}
            </td>
            <td @click="copyValue(contact.email)" class="copied-field">{{ contact.email }}</td>
            <td @click="copyValue(contact.phone)" class="copied-field">{{ contact.phone }}</td>
            <td>{{ contact.location.country }}, {{ contact.location.city }}</td>
            <td>{{ contact.nat }}</td>
          </tr>
        </tbody>
    </table>
    <br>
    <h3>Статистика</h3>
      <table class="table2">
        <thead>
          <tr>
            <th>Размер<br> коллекции</th>
            <th>Количество<br> мужчин</th>
            <th>Количество<br> женщин</th>
            <th>Количество<br> неопределевшихся</th>
            <th>Больше</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ sizeCollection }}</td>
            <td>{{ AmountMaleGender }}</td>
            <td>{{ AmountFemaleGender }}</td>
            <td>0</td>
            <td><strong>{{ isMore }}</strong></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Количество контактов<br> по каждой национальности</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
            style="display: flex"
            v-for="(value) in amountContacts">
              {{ value[0] }} - {{ value[1] }}
            </td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import LogicTabularTiledTable from '@/mixins/LogicTabularTiledTable';

export default {
  name: 'TiledTable',
  mixins: [LogicTabularTiledTable],
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/tabular-table.style.scss';
</style>
