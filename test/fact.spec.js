 var expect = require('expect');
 var fact = require('../js/fact');

 describe('factorial tests',function(){

   it('should say factorial exists',function(){

        expect(fact.factor(4)).toEqual(2);
      // expect(factor).toNotBe(undefined);


   });

 })
