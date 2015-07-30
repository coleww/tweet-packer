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

tap.test('a separator can be specified', function(t){
  t.plan(1)
  var lines = [
  "where am i",
  "how did i get here",
  "letting the days go by"
  ]
  t.deepEqual(slicey(lines, 140, "\n"), ["letting the days go by\nhow did i get here\nwhere am i"])
})

tap.test('a real life stress test', function(t){
  t.plan(1)
  var things = [ '123456789: ARES EMO THESE SUP TIES SHUTE USER THE USE EASE SEA ARE HUT RASE SEEM TIE',
  '1234567: HEM PUSH REA RASH SHEER PIES EAR SEAR TUE ARSE BET REE HEMS EARS HUP TUSH',
  '1234567: RES SUE SEME SHE ARB HES',
  '123: PUS BREEM PIT MEES SEER',
  '1234556: TUP PUT BRAS PIE TIP SHUT PITH',
  '97657890: MEERS BRASH SHET REEM MESH MEER',
  'vo2424: BRA MOE THEM' ]

  var expected = [ '123456789: ARES EMO THESE SUP TIES SHUTE USER THE USE EASE SEA ARE HUT RASE SEEM TIE 97657890: MEERS BRASH SHET REEM MESH MEER',
  '1234567: HEM PUSH REA RASH SHEER PIES EAR SEAR TUE ARSE BET REE HEMS EARS HUP TUSH 1234556: TUP PUT BRAS PIE TIP SHUT PITH',
  '1234567: RES SUE SEME SHE ARB HES 123: PUS BREEM PIT MEES SEER vo2424: BRA MOE THEM' ]

  t.deepEqual(slicey(things), expected)
})