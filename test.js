var tap = require('tape')
var slicey = require('./')


tap.test('does the things',function(t){

  t.plan(2)
  t.deepEqual(["potatoes whatever ok so here the thing elephants"], slicey(['whatever ok so here the thing', 'potatoes', 'elephants']))

  var one_oh_nine = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasd'
  var thirty = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  var thirty_one = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'

  t.deepEqual(slicey([one_oh_nine, thirty, thirty_one]), [thirty + ' ' + one_oh_nine, thirty_one])

})
