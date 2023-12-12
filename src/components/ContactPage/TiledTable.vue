<template>
  <div class="d-flex tiled-view justify-content-center">
    <div v-for="contact in paginationContacts" :key="contact.email">
      <b-card
        no-body
        style="width: 300px; height: 600px"
        :img-src="contact.picture.large"
        img-alt="Image"
        img-top
      >
        <template #header>
          <h4 class="mb-0">
            {{ contact.name.title }}
            {{ contact.name.first }}
            {{ contact.name.last }}
          </h4>
        </template>

        <b-card-body>
          <b-card-sub-title>
            {{ new Date(contact.dob.date).toLocaleString('ru', options) }},
            {{ new Intl.DateTimeFormat("en-US", options2).format(new Date(contact.dob.date)) }},
            {{ new Date(contact.dob.date).toLocaleString('ru', options3) }},
            {{ contact.dob.age }}
          </b-card-sub-title>
        </b-card-body>

        <b-list-group flush>
          <b-list-group-item @click="copyValue(contact.email)" class="copied-field">
            Email: {{ contact.email }}
          </b-list-group-item>
          <b-list-group-item @click="copyValue(contact.phone)" class="copied-field">
            Phone: {{ contact.phone }}
          </b-list-group-item>
          <b-list-group-item>
            {{ contact.location.country }},
            {{ contact.location.city }}
          </b-list-group-item>
          <b-list-group-item>{{ contact.nat }}</b-list-group-item>
        </b-list-group>
      </b-card>
    </div>
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
@import '@/assets/styles/tiled-table.style.scss';
</style>
