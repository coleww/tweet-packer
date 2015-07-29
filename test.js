var tap = require('tape')
var slicey = require('./')


tap.test('does the things',function(t){

  t.plan(1)
  t.deepEqual(["potatoes whatever ok so here the thing elephants"], slicey(['whatever ok so here the thing', 'potatoes', 'elephants']))

})

// defaults to 140 blocks
// intelligently combines them to maximize space...
