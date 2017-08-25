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

async function getDetailsByCode(){
try{
 var code =[
   'us',
   'fr',
   'de',
   'ru',
   'jp'
 ]
 for(i=0; i<code.length;i++){
 var detailsByCode = await superagent.get('http://pplapi.com/country/' + code[i] + '/random.json');
 var responseByCode = detailsByCode.body;
 var insertedByCode = await dbData.db('randomdata').table('datadetails').insert(responseByCode).run();
 }
 return insertedByCode;
}
 catch(e){
   console.log(e)
 }
}
getDetailsByCode().then(function(DataByCode){
     //console.log('DataByCode',DataByCode);
})