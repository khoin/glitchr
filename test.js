
/**
 * test
 */

 import Glitch from './index';
 
 //                  freq   | amount  |base| offset
 var glitch  = Glitch(0.2   ,1+ 0.25  , 1  ,     0);
 var glitch2 = Glitch(0.2   ,1+ 0.66  , 1  ,   0.2/3);
 var glitch3 = Glitch(0.2   ,1+ 0.99  , 1  ,   0.2/3*2);
 
 var mainpitch = Glitch((0.2/3)*64,0.8, 1);
 
 export function dsp(t) {
   
   var gl = glitch.run(t);
   var gl2= glitch2.run(t);
   var gl3= glitch3.addAmount( Math.floor(t/2.133)%3 )
                   .run(t);
   
   
   return 0.2 * sqr(t, mainpitch.run(t) * 220 * gl * gl2 *gl3);
 }
 
 function sqr(t,f) {
   return 2*(0> Math.sin(2 * Math.PI * t * f))-1;
 }