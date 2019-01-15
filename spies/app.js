var db = require('./db.js')
module.exports.handleSignup = (email,password)=>{
	// cek email jika sudah ada
	// simpan data user
	db.saveuser({email,password})
	// kirim pesan selamat datang ke email
}