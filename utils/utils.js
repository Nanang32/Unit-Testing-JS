module.exports.add = (a, b) => a + b
module.exports.addAsyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b)
    }, 1000)
}
module.exports.perkalian = (x, y, callback) => {  
    setTimeout(() => {
        callback(x * y)
    }, 1000)
}
module.exports.setName = (user, Namapangjang) => {
    var nama = Namapangjang.split(' ')
    user.Namadepan = nama[0]
    user.Namabelakang = nama[1]
    return user
}