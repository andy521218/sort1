<template>
  <div class="home">
    <header>成绩排名</header>
    <ul class="message">
      <li>
        <label for="">报考学校:</label>
        <span>西南政法大学</span>
      </li>
      <li>
        <label for="">报考学校:</label>
        <span>学术型硕士</span>
      </li>
      <li>
        <label for="">报考专业:</label>
        <span>{{ numberData.majorType }}</span>
      </li>
    </ul>
    <ul class="number">
      <li>
        <label for="">政治:</label>
        <span>{{ numberData.politics }}</span>
      </li>
      <li>
        <label for="">英语:</label>
        <span>{{ numberData.english }}</span>
      </li>
      <li>
        <label for="">专业一:</label>
        <span>{{ numberData.majorOne }}</span>
      </li>
      <li>
        <label for="">专业二:</label>
        <span>{{ numberData.majorTwo }}</span>
      </li>
      <li>
        <label for="">总成绩:</label>
        <span>{{ total }}</span>
      </li>
    </ul>
    <div class="sort">
      <div class="srot_title">您的总成绩目前在本院校本专业的排位为:</div>
      <div class="sort_number">
        <h1>{{ Ranking }}</h1>
        <span>/{{ totlaNumber }}名</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numberData: "",
      total: "",
      Ranking: "",
      totlaNumber: "",
    };
  },
  mounted() {
    if (!this.$store.state.sort) {
      this.$router.push("/");
      return;
    }
    this.axios
      .get("/customer/list", {
        params: {
          limit: 2000,
          page: 1,
        },
      })
      .then((res) => {
        let index = res.data.length;
        this.numberData = res.data[index - 1];
        let type = res.data[index - 1].majorType;
        this.total =
          Number(res.data[index - 1].politics) +
          Number(res.data[index - 1].english) +
          Number(res.data[index - 1].majorOne) +
          Number(res.data[index - 1].majorTwo);
        let arr = [];
        res.data.forEach((item) => {
          if (item.majorType == type) {
            let total = "";
            total =
              Number(item.politics) +
              Number(item.english) +
              Number(item.majorOne) +
              Number(item.majorTwo);
            arr.push(total);
          }
        });
        arr = arr.sort((a, b) => {
          return b - a;
        });
        this.totlaNumber = arr.length;
        this.Ranking = arr.indexOf(this.total) + 1;
      });
  },
};
</script>

<style lang="less">
.sort {
  margin: 0 0;
  margin-top: 5%;
  border-radius: 10px;
  width: 95%;
  height: 20%;
  background: rgba(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;

  .srot_title {
    height: 40%;
    display: flex;
    align-items: center;
  }
  .sort_number {
    color: rgb(248, 54, 87);
    display: flex;
    height: 60%;
    align-items: center;
  }
}
</style>
