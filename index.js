module.exports = function(lines, max, sep){
  var maximum = max !== undefined ? max : 140
  var separator = sep !== undefined ? sep : " "
  var slines = lines.sort(function(a, b){
    return b.length - a.length
  })

  var go = true
  while(go && slines.length > 1){
    go = slines.some(function(line, i){
      return slines.slice(i + 1).some(function(other_line, j){
        if(line.length + separator.length + other_line.length <= maximum){
          slines[i] = line + separator + other_line
          slines.splice(j + i + 1, 1)
          return true
        }
      })
    })
  }
  return slines
}
