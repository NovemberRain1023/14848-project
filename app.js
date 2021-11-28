
// 引入readline模块
var readline = require('readline');
 
//创建readline接口实例
var rl = readline.createInterface({ 
 input:process.stdin,
 output:process.stdout
});
 

rl.question("Which function do you want to use?  1. Apache Hadoop 2. Spark 3. Jupyter Notebooks 4. SonarQube 5. SonarScanner ",function(answer){
if (answer == 1) {
console.log("We are running Apache Hadoop: 34.139.125.144:8042");
} 
if (answer == 2) {
console.log("We are running Spark: 34.138.142.58:8080");
} 
if (answer == 3) {
console.log("We are running  Jupyter Notebooks: 34.139.232.31:8888");
} 
if (answer == 4) {
console.log("We are running SonarQube: 34.139.4.77:9000 ");
} 
if (answer == 5) {
console.log("We are running SonarScanner: 34.139.4.77:9000 ");
} 
 // console.log("We are running "+answer);
 // 不加close，则不会结束
rl.close();
});
 
// close事件监听
rl.on("close", function(){ 
 // 结束程序
 process.exit(0);
});