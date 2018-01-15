exports.pwd = function (){
  //console.log(process.cwd());
  var output = process.cwd();
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
}
