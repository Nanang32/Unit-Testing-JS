const request = require('supertest')
const expect = require('expect')
var app = require('./server.js').app
// case
describe('#SERVER', () => {
    describe('GET /', () => {
        it('should return index response', (done) => {
            request(app)
                .get('/')
                .expect(404)
                .expect((res) => {
                    expect(res.body).toInclude({
                        error: 'halaman tidak ditemukan'
                    })
                })
                .end(done)
        })
    })
    describe('GET /Users', () => {
        it('should return users response', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        nama: 'ardi',
                        umur: 33
                    })
                })
                .end(done)
        })
    })
})