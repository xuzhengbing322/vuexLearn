export default {
      // ctx是执行期上下文，通过ctx可以调用mutations中的方法。
      // getDate (ctx, payload) {
      //   const {key, test} = payload;
      //   axios(`/api/jztk/query?model=${key}&test=${test}`
      //   ).then(() => {
      //     ctx.commit('SETDATE', res.data.result)
      //   })
      // }
      increateAsync(context, payload) {
        setTimeout(() => {
          context.commit("increate", payload)
        }, 1000)
  
      }
    }