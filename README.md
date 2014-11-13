glitchr
=======

For wavepot.

## Usage
#### Glitchr(frequency [, amount=2, base=1, offset=0])

Creating a new instance

``` javascript
import Glitchr from 'potasmic/glitchr';
var glitch = new Glitchr(0.25, 5, 1, 0.25);
```

#### Run it

``` javascript
var glitch = new Glitchr(0.25, 2, 1);
export function dsp(t) {
  return glitch.run(t);
  //returns a square wave with highest peak valued 2, lowest peak valued 1, frequency of 0.25^-1 Hz
}
```

#### Additional stuffs 

``` javascript
var glitch = new Glitchr(0.25, 2 , 1 );
export function dsp(t) {
  if ( t > 10 ) glitch.setAmount(3);

  var gl = glitch.addAmount( Math.floor(t/3)%3 ) .run(t);
  
  return 0 < ( Math.sin(2 * Math.PI * t * 440 * gl) );
  //You can also hook Glitchers together.
}

```
## License
Public Domain
