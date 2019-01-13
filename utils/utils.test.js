// mjackson expect
const expect = require('expect')
const utils = require('./utils')

describe('Utils',()=>{
    describe('#penjumlahan',()=>{
        it('eksekusi dua angka', () => {
            var res = utils.add(33, 53)
            expect(res).toBe(86).toBeA('number')
        })
    })    
    it('should asycn add two number',(done)=>{
      utils.addAsyncAdd(5,5,(sum)=>{
        expect(sum).toBe(10).toBeA('number')
        done()
      })
    })
    it('eksekusi asycn dua angka di kalikan', (done) => {
        utils.perkalian(3,11,(sum)=>{
        expect(sum).toBe(33).toBeA('number')
        done()        
        })
    })
    // selesaikan verifikasi nama bdepan dan belakang
    it('should ver nama depan dan belakang', () => {
        var user = { alamat: 'makassar', umur: 22 }
        var res = utils.setName(user, 'Luqman Fanani')
        expect(res).toInclude({
            Namadepan: 'Luqman',
            Namabelakang: 'Fanani'
        })
    })
})

// it('should expect some value ', () => {
//   // expect(12).toNotBe(12)
//   // expect({name:'NAnang'}).toNotEqual({name:'Nanang'})
//   // expect([1,2,3,4]).toInclude(4)
//   expect({
//     name: 'Luqman',
//     Alamat: 'tabaria',
//     umur: '21'
//   }).toInclude({
//     umur: '21'
//   })
// })