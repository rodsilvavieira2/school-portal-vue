<template>
  <div class="dashboard-default-table">
    <h2>Next tests</h2>

    <div class="dashboard-default-table-wrapper home-table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Discipline</th>

            <th>Professor</th>

            <th>Note</th>

            <th>Test date</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.discipline }}</td>

            <td>{{ item.professor }}</td>

            <td>{{ item.note }}</td>

            <td>{{ item.testDate }}</td>
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
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 2,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 3,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 4,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 5,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 6,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 7,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        },
        {
          id: 8,
          professor: 'Andre',
          discipline: 'Web development',
          note: 10,
          testDate: new Date().toLocaleString()
        }
      ]
    }
  }
}
</script>
