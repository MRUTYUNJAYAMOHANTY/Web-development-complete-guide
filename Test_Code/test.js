var a = 10;
function test(params) {
    let a = 102;
    console.log(a,'line 4');
} 
test();
console.log(a,'line 6');
var b = 11;
function test1(params) {
    console.log(b,'line 10');
}
test1();

function test3(params) {
     let a1 = 12;
     var b1 = 20;
}
//console.log(a1,'line 15'); // error , a1 is not defined
//console.log(b1,'line 19'); // error, b1 is not defined
test3();
console.log(a2,'line 21'); // undefined
var a2 = 20;

let obj1 = {text:'abc'}
let obj2 = {text:'abc'}

console.log(obj1 == obj2, 'line 27');

var x = 'Syam';  
var y= new String('Syam');  
console.log("A==",x==y,'line 31'); 
console.log("B==",x===y,'line 32');

(function() {
    var a = b = 5;
  })();
  console.log(b,'line 37');

  function sum(x) {
    if (arguments.length == 2) {
      return arguments[0] + arguments[1];
    } else {
      return function(y) { return x + y; };
    }
  }
  console.log(sum(2,3),'line 46');  
  console.log(sum(2)(3),'line 47');

  console.log("A::",false == '0','line 49')
  console.log("B::",false === '0','line 50')

var a={},
    b={key:'b'},
    c={key:'c'};
a[b]=123;
a[c]=456;
console.log(a[b],'line 57');

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();

var x = 21;
var girl = function() {
  console.log(x,'lin 82');
  var x = 20;
    
};
girl ();

for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i,'line 89'); }, i * 1000 );
  }
for (var i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i,'line 92'); }, i * 1000 );
  }

function display() {
  var a = b = 10;
  }
  display();
  console.log('b', typeof b === 'undefined','line 99');
  console.log('a', typeof a === 'undefined','line 100');
