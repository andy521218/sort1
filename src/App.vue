<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
html,
body,
#app {
  margin: 0 0;
  padding: 0 0;
  width: 100%;
  height: 100%;
  background: rgba(196, 196, 196, 0.1);
  li {
    list-style: none;
  }
  header {
    width: 100%;
    height: 5%;
    background: rgb(248, 248, 248);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
  }
  .title {
    margin-top: 5%;
    width: 95%;
    background: rgba(255, 255, 255);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5% 0%;
    span {
      width: 81%;
    }
    h6,
    h4 {
      margin: 2% 0%;
    }
    h4 {
      color: rgb(248, 54, 87);
    }
  }
  .message,
  .number {
    margin: 0 0;
    margin-top: 5%;
    border-radius: 10px;
    width: 95%;
    background: rgba(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    li {
      width: 95%;
      display: flex;
      height: 3rem;
      align-items: center;
      text-align: left;
      label {
        width: 25%;
        padding-left: 0.3rem;
      }
      .select {
        width: 66%;
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
          background: rgba(238, 238, 238);
          top: 2rem;
          left: 0;
          ul {
            margin: 0 0;
            padding: 0 2%;
            li {
              height: 1.8rem;
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
      span,
      select,
      input {
        width: 70%;
      }
      select,
      input {
        height: 2rem;
      }
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
