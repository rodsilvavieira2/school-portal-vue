<template>
  <div class="sub-router-container classes-sub-router">
    <h2>Classes</h2>

    <div class="default-select-period">
      <Select label="Time interval :">
        <option value="today" selected>Today</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>

      <Select label="Course subject :">
        <option value="today" selected>Today</option>

        <option value="this-week">This week</option>

        <option value="this-month">This month</option>
      </Select>
    </div>

    <div class="dashboard-default-table classes-table">
      <h2>List</h2>

      <div class="dashboard-default-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Date</th>

              <th>Discipline</th>

              <th>Content</th>

              <th>Material</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <time> 21/10/09 </time>
              </td>

              <td class="classes-table-discipline">
                <p>APLICATIVOS PARA DESENVOLVIMENTO DE SISTEMAS LOCAL E WEB</p>
              </td>

              <td class="classes-table-content">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim
                  inventore consectetur Lorem ipsum dolor sit, amet consectetur
                  adipisicing elit. Tempore aspernatur, architecto numquam
                  impedit nam voluptate quod sunt cumque veritatis similique ad
                  aliquam eaque nihil voluptatem nemo fuga magnam officiis
                  dolore?
                </p>
              </td>

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
