System.register([],function(exports,module){'use strict';return{execute:function(){exports('f',fn$1);function fn () {
  console.log('lib2 fn');
}function fn$1 () {
  fn();
  console.log('dep2 fn');
}}}});