tweet-packer
----------------

[![NPM](https://nodei.co/npm/tweet-packer.png)](https://nodei.co/npm/tweet-packer/)

[![Build Status](https://secure.travis-ci.org/coleww/tweet-packer.png)](http://travis-ci.org/coleww/tweet-packer)

given an array of strings, tweet-packer will return a new array with those strings compacted to all be as close to 140 chars as possible (or whatever number you pass). I use this to compress tweets emitted by [The Botgle Beat](https://twitter.com/theBotgleBeat), which is an internet newspaper about games of boggle played over twitter.


### API

`tweetPacker(arrayOfLines, maxLength:optional, separator:optional)`

- arrayOfLines: smaller lines will be optimally joined together with the separator such that they are all less than the maxLength
- maxLength: defaults to 140, the max length that a line can be.
- separator: defaults to `" "`, perhaps `"\n"` is more your style? Or instead, mayhaps you prefer `" : "`? Have at it!


### EXAMPLE

```
var tweetPacker = require('tweet-packer')

// GIVEN: 100 a's, 40 b's, and 30 c's
tweetPacker(["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "cccccccccccccccccccccccccccccc"])

// it tries to maximize space by combining the a's and the b's
=> ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "cccccccccccccccccccccccccccccc"]
```