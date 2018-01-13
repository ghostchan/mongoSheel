// var db=connect('company')
// db.workmate.update({name:'MinJie'},{sex:0})
 
// print('[update]: The data was updated successfully');

2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
var db=connect('company')
 
var workmate3={
    name:'MinJie',
    age:20,
    sex:0,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}
db.workmate.update({name:'MinJie'},workmate3)
 
 
print('[update]: The data was updated successfully');