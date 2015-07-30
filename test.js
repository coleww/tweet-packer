var tap = require('tape')
var slicey = require('./')

tap.test('does the things',function(t){
  t.plan(3)
  t.deepEqual(slicey(['whatever ok so here the thing', 'potatoes', 'elephants']), ["whatever ok so here the thing elephants potatoes"])
  var one_oh_nine = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasasdasdasdasdasdasdasdasdasdasd'
  var thirty = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  var thirty_one = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
  t.deepEqual(slicey([one_oh_nine, thirty, thirty_one]), [one_oh_nine + ' ' + thirty, thirty_one])
  t.deepEqual(slicey([one_oh_nine, thirty, thirty_one], 141), [one_oh_nine + ' ' + thirty_one, thirty], "WoW")
})
