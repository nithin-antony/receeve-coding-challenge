<template>
  <div class="hello">
    <h1>Accounts</h1>
    <table id="custom-table">
      <tr>
        <th>Name</th>
        <th>Mobile Phone Number</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
      <tr>
        <td>Ms. Oliver Mcmahon</td>
        <td>+1 (956) 531-2032</td>
        <td>mcmahon.oliver@sureplex.name</td>
        <td>Address</td>
      </tr>
      <tr>
        <td>Berglunds snabbköp</td>
        <td>Christina Berglund</td>
        <td>Sweden</td>
      </tr>
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
      <tr>
        <td>Ernst Handel</td>
        <td>Roland Mendel</td>
        <td>Austria</td>
      </tr>
      <tr>
        <td>Island Trading</td>
        <td>Helen Bennett</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Königlich Essen</td>
        <td>Philip Cramer</td>
        <td>Germany</td>
      </tr>
      <tr>
        <td>Laughing Bacchus Winecellars</td>
        <td>Yoshi Tannamuri</td>
        <td>Canada</td>
      </tr>
      <tr>
        <td>Magazzini Alimentari Riuniti</td>
        <td>Giovanni Rovelli</td>
        <td>Italy</td>
      </tr>
      <tr>
        <td>North/South</td>
        <td>Simon Crowther</td>
        <td>UK</td>
      </tr>
      <tr>
        <td>Paris spécialités</td>
        <td>Marie Bertrand</td>
        <td>France</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class AccountsDetails extends Vue {
  @Prop()
  msg!: string;
}
</script>

<style scoped>
#custom-table {
  border-collapse: collapse;
  width: 100%;
}

#custom-table tr {
  border-bottom: 1px solid #27292e;
}

#custom-table td {
  padding: 10px 0 10px 0;
}

/* #custom-table tr:hover {
  background-color: rgb(56, 55, 55);
} */

#custom-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: #27292e;
}
</style>
