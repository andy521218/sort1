<template>
  <div class="itps" style="padding: 2.5%">
    <h4>【灋研毓秀工作室】考研初试成绩查询系统使用指南：</h4>
    <p v-if="!isShow">
      1.请大家先选择自己的报考专业，然后依次输入政治、英语、法学基础及专业课二的成绩，确认无误后，点击提交成绩。
    </p>
    <p v-if="!isShow">
      2.提交后，会显示【当前】你的成绩排名。随着数据量的积累，排名数据会不断累积，排名才会更加科学。
    </p>
    <p v-if="!isShow">
      3.请考生尽量使用谷歌浏览器或手机打开网址进行填写。如果页面显示不全或无法提交，则说明当前访问量过大，请稍后重试，不要反复刷新页面。
    </p>
    <p v-if="isShow">
      4.请加入【21届】西政考研学硕复试交流总群
      <span style="color: rgb(248, 54, 87)">893677783</span>
      获取各专业排名结果，群内每半天会更新一次后台数据，并适时开展分数线预测讲座。为了数据样本更加全面、准确，也欢迎将本网址分享给你的朋友！
    </p>
    <p v-if="isShow">
      5.qq群内还会有各专业、各分数段成绩投票，欢迎大家前来参与！更有各专业研究生师兄师姐实时进行答疑！
    </p>
    <h5 v-if="isShow">
      注：为保证数据的真实性与有效性，请考生务必认真填写报考专业及各科成绩，因为每位考生只有一次填写机会。已经填写完毕并提交成绩的，将无法再次进行提交。
    </h5>
    <div style="text-align: center">
      <button class="submit" @click="routerTo">{{ text }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      text: "下一步",
    };
  },
  methods: {
    routerTo() {
      if (this.text == "确定") {
        this.$router.push("Home");
        return;
      }
      this.text = "确定";
      this.isShow = true;
    },
  },
};
</script>

<style lang="less">
.itps{
  h4{
    font-size: 0.9rem;
  }
  p{
    font-size: 0.8rem;
  }
}
</style>

