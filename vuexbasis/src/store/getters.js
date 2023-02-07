export default {
      getMyInfo(state) {
            let info = `我叫${state.name}，今年${state.age}岁！`;
            return info;
      }
}