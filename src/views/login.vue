<template>
  <ul class="login">
    <li>
      <label for="">用户名:</label>
      <input type="text" v-model="account" placeholder="请输入用户名" />
    </li>
    <li>
      <label for="">密码:</label>
      <input type="text" v-model="password" placeholder="请输入密码" />
    </li>
    <li>
      <button class="submit" @click="submit">登入</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    submit() {
      if (!this.account) {
        confirm("请输入用户名");
        return;
      }
      if (!this.password) {
        confirm("请输入密码");
        return;
      }
      this.axios
        .post("/user/login", {
          account: this.account,
          password: this.password,
        })
        .then((res) => {
          if (res.code == 0) {
            this.$router.push("all");
            this.$store.state.all = true;
            localStorage.setItem("all", true);
          } else {
            confirm("用户名或密码错误!");
          }
        });
    },
  },
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 0;
  margin: 0 0;
  li {
    width: 95%;
    height: 3em;
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      margin-right: 1rem;
      width: 15%;
    }
    input {
      width: 60%;
      height: 2rem;
    }
  }

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