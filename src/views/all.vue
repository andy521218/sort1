<template>
  <table>
    <thead>
      <tr>
        <th>序号</th>
        <th>专业</th>
        <th>政治</th>
        <th>英语</th>
        <th>专业一</th>
        <th>专业二</th>
        <th>总分</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in all" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ item.majorType }}</td>
        <td>{{ item.politics }}</td>
        <td>{{ item.english }}</td>
        <td>{{ item.majorOne }}</td>
        <td>{{ item.majorTwo }}</td>
        <td>{{ total(item) }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      all: "",
    };
  },
  mounted() {
    let isAll = JSON.parse(localStorage.getItem("all"));
    if (!this.$store.state.all && !isAll) {
      this.$router.push("login");
      return;
    }
    this.getData();
  },
  methods: {
    getData() {
      this.axios
        .get("/customer/list", {
          params: {
            limit: 2000,
            page: 1,
          },
        })
        .then((res) => {
          if (res.code == "0") {
            this.all = res.data;
            console.log(this.all);
          } else {
            confirm("遇到未知错误,请联系管理员!");
          }
        });
    },
    total(item) {
      return (
        Number(item.politics) +
        Number(item.english) +
        Number(item.majorOne) +
        Number(item.majorTwo)
      );
    },
  },
  beforeRouteLeave(to, form, next) {
    localStorage.removeItem("all");
    next();
  },
};
</script>


<style lang="less">
table {
  width: 99%;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0;
  th,
  td {
    width: 14%;
  }
  tr {
    height: 2.5rem;
  }
  tr:nth-child(even) {
    background: rgb(240, 246, 255);
  }
}
</style>