
/**
 * @module glitchr
 * @author potasmic
 * @coauth cheery
 * @description 
 *    Glitcher returns a square wave of your defined value. 
 *    Useful for chiptune.
 * @license publicdomain
 */
 export default Glitchr;
 
 //Defaults: Amount:2, Base:1, 
 
 function Glitchr(freq, amount, base, offset) {
   if(!(this instanceof Glitchr)) return new Glitchr(freq,amount,base,offset);
   this.amount = amount || 2;
   this.freq   = freq;
   this.base   = base   || 1;
   this.offset = offset || 0;
   this.addit  = 0;
 }
 
 Glitchr.prototype.setAmount = function(am) {
   this.amount = am;
   return this;
 }
 
 Glitchr.prototype.addAmount = function(am) {
   this.addit = am;
   return this;
 }
 
 Glitchr.prototype.run = function(t) {
   return ((t+this.offset)%this.freq < this.freq/2)? this.amount + this.addit : this.base;
 }
 

