


module.exports = function(lines){
  var stuff = []
  var slines = lines.sort(function(a, b){
    return a.length - b.length
  })
  stuff.push(slines.shift())

  while(slines.length){
    stuff = stuff.sort(function(a, b){
      return a.length - b.length
    })

    if(stuff[0].length + 1 + slines[slines.length - 1].length < 140){
      stuff[0] = stuff[0] + ' ' + slines.pop()
    } else {
      stuff.push(slines.pop())
    }
  }

  return stuff
}