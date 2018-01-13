var startTime = (new Date()).getTime(); //得到开始时间
var  db = connect('log');  //链接数据库
//开始循环
// for(let i=0;i<1000;i++){
//     db.test.insert({num:i});
// }

var tempArray = []              //声明一个数组
for(let i=0;i<1000;i++){        //循环向数组中放入值
    tempArray.push({num:i});
}
db.test.insert(tempArray)       //批量一次插入
 
var runTime = (new Date()).getTime()-startTime;//计算时间差
print ('This run this is:'+runTime+'ms');//打印出来