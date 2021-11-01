<template>
  <div class="dashboard-default-table">
    <h3>Last exercises</h3>

    <div class="dashboard-default-table-wrapper home-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Exercise Name</th>

            <th>Professor</th>

            <th>Discipline</th>

            <th>Status</th>

            <th />
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>

            <td>{{ item.professor }}</td>

            <td>{{ item.discipline }}</td>

            <td>{{ item.status }}</td>

            <td>
              <div class="dashboard-default-table-button-wrapper">
                <button
                  type="submit"
                  class="dashboard-default-table-button"
                >
                  <fa icon="eye" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
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
      ]
    }
  }
}
</script>
