<template>
  <div class="sub-router-container exercises-sub-router">
    <h2>Classes</h2>

    <div class="default-select-period">
      <Select label="Time interval :">
        <option value="today" selected>Today</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>

      <Select label="Course subject :">
        <option value="today" selected>All</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>
    </div>

    <div class="dashboard-default-table exercises-table">
      <h2>List</h2>

      <div class="dashboard-default-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Exercise</th>

              <th>Discipline</th>

              <th>Requested at</th>

              <th>Delivery date</th>

              <th>Status</th>

              <th>Response</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <time> Project in flask + Mysql </time>
              </td>

              <td class="exercises-table-discipline-row">
                <p>APLICATIVOS PARA DESENVOLVIMENTO DE SISTEMAS LOCAL E WEB</p>
              </td>

              <td>
                <time>2020/10/01</time>
              </td>

              <td>
                <time>2020/10/02</time>
              </td>

              <td>Pending</td>

              <td>
                <div class="dashboard-default-table-button-wrapper">
                  <button class="dashboard-default-table-button">
                    <fa icon="paperclip" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { Select } from '../../components/from'

export default {
  components: {
    Select
  }
}
</script>
