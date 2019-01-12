const express = require('express')
var app = express()
app.get('/',(req,res)=>{
	res.status(404).send({
		error:'halaman tidak ditemukan',
		name: 'Todo App V1.0'
	})
})
// get /user
// give users a name prop age
app.get('/users',(req,res)=>{
	res.status(200).send([{
		nama: 'ardi',
		umur: 33
	},{
		nama: 'lidia',
		umur: 99
	},{
		nama:'murdianto',
		umur: 33
	}])
})

app.listen(3000)
module.exports.app = app