const generateSvg = require('./shapes/shapes')


test('checks for black strings', ()=> {

 expect(generateSvg( {
    "text":"cir","textcolor":"black","shape":["circle"],"shapecolor":"blue"
 })).toContain('black');

})

test('checks for blue strings', ()=> {

    expect(generateSvg( {
       "text":"cir","textcolor":"blue","shape":["circle"],"shapecolor":"blue"
    })).toContain('blue');
   
   })
   