const reThinkPlus = require('rethink-plus')
var superagent = require('superagent')
const dbData = new reThinkPlus({
  })
async function getDetails(){
try{
  var details = await superagent.get('http://pplapi.com/random.json');
  var response = details.body;
   var inserted = await dbData.db('randomdata').table('datadetails').insert(response).run();
  return inserted;
}
 catch(e){
   console.log(e)
 }
}
getDetails().then(function(Data){
    //console.log('Data',Data);
})