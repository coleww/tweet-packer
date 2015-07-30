tweet-packer
----------------

[![NPM](https://nodei.co/npm/tweet-packer.png)](https://nodei.co/npm/tweet-packer/)

given an array of strings, tweet-packer will return a new array with those strings compacted to all be as close to 140 chars as possible (or whatever number you pass). I use this to compress tweets emitted by [The Botgle Beat](https://twitter.com/theBotgleBeat), which is an internet newspaper about games of boggle played over twitter.


### API

`tweetPacker(arrayOfLines, maxLength:optional)`

- arrayOfLines: smaller lines will be joined with a `" "`. you should probably be able to pass a custom separator, but you can't.
- maxLength: defaults to 140, the max length that a line can be.

### EXAMPLE

```
var tweetPacker = require('tweet-packer')

// GIVEN: 100 a's, 40 b's, and 30 c's
tweetPacker(["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "cccccccccccccccccccccccccccccc"])

// it tries to maximize space by combining the a's and the b's
=> ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", "cccccccccccccccccccccccccccccc"]
```