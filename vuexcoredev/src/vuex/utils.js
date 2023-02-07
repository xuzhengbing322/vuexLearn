export function forEachValueKey (obj, callback) { //callback就是为了获取obj[key] 和 key
      // mutations['addTodo']/fn addTodo
      Object.keys(obj).forEach(key => callback(obj[key], key))
}

// forEachValueKey(mutations, function (mutationFn, mutationKey) {})