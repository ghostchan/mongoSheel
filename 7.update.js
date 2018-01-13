// var db=connect('company')
// db.workmate.update({name:'MinJie'},{sex:0})
 
// print('[update]: The data was updated successfully');

var db=connect('company')

// db.workmate.update({"name":"MinJie"},{"$set":{sex:2,age:21}}); 
// db.workmate.update({"name":"MinJie"},{"$set":{"skill.skillThree":'word'}});
// db.workmate.update({"name":"MinJie"},{$unset:{"age":''}});
// db.workmate.update({"name":"MinJie"},{$set:{"age":20}});
// db.workmate.update({"name":"MinJie"},{$inc:{"age":-2}});
// db.workmate.update({},{$set:{interset:[]}});
// db.workmate.update({},{$set:{interset:[]}},{multi:true});
// db.workmate.update({name:'xiaoWang'},{$set:{age:20}});
db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true});
 
print('[update]: The data was updated successfully');