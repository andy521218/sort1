<template>
  <div class="home">
    <header>填写成绩</header>
    <div class="title">
      <h6>请加入【21届】西政考研学硕复试交流</h6>
      <h4>总群893677783</h4>
      <h6>获取各专业排名结果</h6>
    </div>

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
    </ul>

    <ul class="number">
      <li>
        <label for="">政治:</label>
        <input type="text" v-model="politics" placeholder="请输入政治分数" />
      </li>
      <li>
        <label for="">英语:</label>
        <input type="text" v-model="english" placeholder="请输入英语分数" />
      </li>
      <li>
        <label for="">专业一:</label>
        <input type="text" v-model="majorOne" placeholder="请输入专业一分数" />
      </li>
      <li>
        <label for="">专业二:</label>
        <input type="text" v-model="majorTwo" placeholder="请输入专业二分数" />
      </li>
    </ul>

    <button class="submit" @click="submit">提交成绩</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
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
      politics: "",
      english: "",
      majorOne: "",
      majorTwo: "",
      isIp: true,
      ip: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.ip = localStorage.getItem("ip");
      this.axios.get("/customer/ip").then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].ip == this.ip) {
            this.isIp = false;
            break;
          }
        }
      });
    }, 1500);
  },
  methods: {
    select(e) {
      this.majorType = e;
      this.majorShow = false;
    },
    submit() {
      if (this.majorType == "请选择报考专业") {
        confirm("请选择报考专业");
        return;
      }
      if (isNaN(this.politics)) {
        confirm("请输入正确的政治分数");
        return;
      }
      if (isNaN(this.english)) {
        confirm("请输入正确的英语分数");
        return;
      }
      if (isNaN(this.majorOne)) {
        confirm("请输入正确的专业一分数");
        return;
      }
      if (isNaN(this.majorTwo)) {
        confirm("请输入正确的专业二分数");
        return;
      }
      if (!this.isIp) {
        confirm("您已经录入成绩,请不要重复添加!");
        return;
      }
      if (!this.ip) {
        confirm("您的设备存在异常,请更换设备后再试!");
        return;
      }
      this.axios
        .post("/customer/ip", {
          ip: this.ip,
        })
        .then((res) => {
          if (res.code == 0) {
            this.axios
              .post("/customer/add", {
                majorType: this.majorType,
                politics: this.politics,
                english: this.english,
                majorOne: this.majorOne,
                majorTwo: this.majorTwo,
              })
              .then((res) => {
                if (res.code == "0") {
                  this.$store.state.sort = true;
                  this.$router.push("sort");
                } else {
                  confirm("服务器繁忙,请稍后重试!");
                }
              });
          }
        });
    },
  },
};
</script>


<style lang="less">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .submit {
    width: 70%;
    height: 2.2rem;
    color: rgb(255, 255, 255);
    background-color: rgb(64, 158, 255);
    border: rgb(64, 158, 255);
    border-radius: 3px;
    outline: none;
    margin-top: 5%;
    font-size: 1rem;
  }
}
</style>
