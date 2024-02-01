function a(){}
function b(a){}
b(a)
function a(){function b(){}
return b}
const a=function(){}
function a(){}
const obj={}
a.call(obj)
function a(){function b(){function c(){}
c()}
b()}
a()
const rocket=
{
  name:'Falcon 9',
  
  launchMessage: function launchMessage(){
    console.log('🔥')
  }

}
rocket.launchMessage()