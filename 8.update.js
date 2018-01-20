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
// db.workmate.update({name:'xiaoWang'},{$set:{interset:[]}});
// db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true});
// db.workmate.update({name:'xiaoWang'},{$push:{interset:'draw'}});
// db.workmate.update({name:'MinJie'},{$push:{"skill.skillFour":'draw'}});
// db.workmate.update({name:"xiaoWang",interset:{$ne:"playGame"}},{$push:{interset:"Game"}})
// db.workmate.update({name:"xiaoWang",interset:{$ne:"Game"}},{$push:{interset:"playGame"}})
// db.workmate.update({name:"xiaoWang"},{$addToSet:{interset:"readBook"}})

// var newIntersets=["Sing","Dance","Code"];
// db.workmate.update({name:"xiaoWang"},{$addToSet:{interset:{$each:newIntersets}}})
// db.workmate.update({name:"xiaoWang"},{$pop:{interset:1}})
db.workmate.update({name:"xiaoWang"},{$set:{"interset.2":"code"}})
 
print('[update]: The data was updated successfully');