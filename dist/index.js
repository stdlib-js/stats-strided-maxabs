"use strict";var o=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var m=o(function(D,b){
var g=require('@stdlib/math-base-assert-is-nan/dist'),q=require('@stdlib/math-base-special-abs/dist');function j(a,r,e,s){var u,n,v,i,t,c;if(u=r.data,n=r.accessors[0],a===1||e===0)return q(n(u,s));for(i=s,v=q(n(u,i)),c=1;c<a;c++){if(i+=e,t=q(n(u,i)),g(t))return t;t>v&&(v=t)}return v}b.exports=j
});var x=o(function(E,y){
var k=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-special-abs/dist'),O=require('@stdlib/array-base-arraylike2object/dist'),P=m();function R(a,r,e,s){var u,n,v,i,t;if(a<=0)return NaN;if(v=O(r),v.accessorProtocol)return P(a,v,e,s);if(a===1||e===0)return f(r[s]);for(n=s,u=f(r[n]),t=1;t<a;t++){if(n+=e,i=f(r[n]),k(i))return i;i>u&&(u=i)}return u}y.exports=R
});var l=o(function(F,p){
var h=require('@stdlib/strided-base-stride2offset/dist'),w=x();function z(a,r,e){return w(a,r,e,h(a,e))}p.exports=z
});var A=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=l(),B=x();A(d,"ndarray",B);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
