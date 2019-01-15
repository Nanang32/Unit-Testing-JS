const expect = require('expect')
const rewire = require('rewire')

var app = rewire('./app.js')

describe('App', () => {
	var db = {
		saveuser: expect.createSpy()
	}
	app.__set__('db', db)

	it('Should call the spy correctly', () => {
		var spy = expect.createSpy()
		spy('Nanang',25)
		expect(spy).toHaveBeenCalledWith('Nanang',25)
	})

	it('should call saveuser with user object',()=>{
		var email = 'luqman@gmail.com'
		var password = '12abc'

	app.handleSignup(email, password)
	expect(db.saveuser).toHaveBeenCalledWith({email, password})
	
	})
	// app.handleSignup(email, password)
	// expect(db.saveuser).toHaveBeenCalledWith({email, password})
})