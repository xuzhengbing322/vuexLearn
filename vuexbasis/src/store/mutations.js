export default {
      // 如果有两个参数，就要用对象的形式书写
      SETCURIDX(state, payload) {
        let {
          index,
          text
        } = payload
        state.curIdx = index
        console.log("text", text)
      },
      // SETDATE(state,data) {
      //   state.data = data
      // }
      increate(state, payload) {
        state.age += payload;
        console.log(state.age)
      }
    }