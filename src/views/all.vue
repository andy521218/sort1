<template>
  <div class="all">
    <ul>
      <li>
        <div class="select">
          <div class="select_title" @click="majorShow = true">
            <p>{{ majorType }}</p>
            <i></i>
          </div>
          <div class="select_main" v-show="majorShow">
            <ul>
              <li
                v-for="(item, index) in array"
                :key="index"
                @click="select(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </li>
      <li>
        <button class="submit" @click="srot">确定</button>
      </li>
    </ul>
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
          <td>{{ item.totale }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      all: [],
      array: [
        "经济法",
        "民法",
        "商法",
        "刑法",
        "刑诉",
        "环资",
        "国经",
        "国私",
        "国公",
        "人工智能法",
        "宪行",
        "法理学",
        "民诉",
        "知产",
        "法制史",
        "人权法",
        "侦查学",
      ],
      majorType: "请选择报考专业",
      majorShow: false,
      allData: "",
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
    select(e) {
      this.majorType = e;
      this.majorShow = false;
    },
    srot() {
      this.all = [];
      this.allData.forEach((ele, index) => {
        if (ele.majorType == this.majorType) {
          let arr = ele;
          arr.totale = this.total(ele);
          this.all.push(arr);
        }
        if (index == this.allData.length - 1) {
          this.all.sort((a, b) => {
            return b.totale - a.totale;
          });
        }
      });
    },
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
            this.allData = JSON.parse(JSON.stringify(res.data));
            let arr1 = [];
            res.data.forEach((item, index) => {
              let arr = item;
              arr.totale = this.total(item);
              arr1.push(arr);
              if (index == res.data.length - 1) {
                this.all = arr1.sort((a, b) => {
                  return b.totale - a.totale;
                });
              }
            });
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
.all {
  ul {
    margin: 0 0;
    padding: 0 1%;
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      height: 2rem;
      width: 45%;
      display: flex;
      align-items: center;
      .submit {
        height: 2rem !important;
        width: 95% !important;
        padding: 0 0 !important;
        margin-top: 0 !important;
      }
      .select {
        width: 100%;
        height: 2rem;
        border: 1px solid rgb(138, 136, 136);
        border-radius: 2px;
        padding: 0 2%;
        position: relative;
        .select_main {
          position: absolute;
          overflow: auto;
          width: 100%;
          height: 10rem;
          background: rgba(255, 255, 255);
          top: 2rem;
          left: -1px;
          border: 1px solid rgb(138, 136, 136);
          ul {
            flex-direction: column;
            height: auto;
            width: 100%;
            padding: 0 0;
            li {
              width: 92%;
              height: 2rem;
            }
          }
        }
        .select_title {
          width: 100%;
          height: 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          P {
            margin: 0 0;
            font-size: 1rem;
          }
          i {
            width: 0.4rem;
            height: 0.4rem;
            border-top: 2px solid rgb(138, 136, 136);
            border-left: 2px solid rgb(138, 136, 136);
            transform: rotate(-135deg);
          }
        }
      }
    }
  }
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
}
</style>