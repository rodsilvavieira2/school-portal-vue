<template>
  <div class="dashboard-default-table">
    <h2>Last exercises</h2>

    <div class="dashboard-default-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>
              <CheckBox
                type="checkbox"
                v-model="isAllChecked"
                @click.prevent="toggleAllChecked"
              />
            </th>

            <th>Exercise Name</th>

            <th>Professor</th>

            <th>Discipline</th>

            <th>Status</th>

            <th />
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>
              <CheckBox v-model="item.isChecked" />
            </td>

            <td>{{ item.name }}</td>

            <td>{{ item.professor }}</td>

            <td>{{ item.discipline }}</td>

            <td>{{ item.status }}</td>

            <td>
              <button type="submit" class="dashboard-default-table-view-button">
                <fa icon="eye" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { CheckBox } from '../from'

export default {
  components: {
    CheckBox
  },
  methods: {
    toggleAllChecked () {
      console.log('call')
      if (this.isAllChecked) {
        this.items = this.items.map((item) => ({
          ...item,
          isChecked: false
        }))
      } else {
        this.items = this.items.map((item) => ({
          ...item,
          isChecked: true
        }))
      }
    }
  },
  watch: {
    items: {
      handler () {
        this.isAllChecked = this.items.every((item) => item.isChecked)
      },
      deep: true
    }
  },
  data () {
    return {
      items: [
        {
          id: 1,
          isChecked: false,
          name: 'Create a web page',
          professor: 'Andre',
          discipline: 'Web development',
          status: 'Pending'
        },
        {
          id: 2,
          isChecked: false,
          name: 'Create a flask Rest IPA',
          professor: 'Andre',
          discipline: 'Web development',
          status: 'Pending'
        },
        {
          id: 3,
          isChecked: false,
          name: 'Create a crud with python',
          professor: 'Andre',
          discipline: 'Web development',
          status: 'Pending'
        },
        {
          id: 4,
          isChecked: false,
          name: 'Create database table with SQL',
          professor: 'Andre',
          discipline: 'Web development',
          status: 'Pending'
        }
      ],
      isAllChecked: false
    }
  }
}
</script>
