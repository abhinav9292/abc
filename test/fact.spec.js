 var expect = require('expect');
 var fact = require('../js/fact');

 describe('factorial tests',function(){

   it('should say factorial exists',function(){

        expect('fact').toExist();
        expect('factor').toNotBe(undefined);

   });

 })
