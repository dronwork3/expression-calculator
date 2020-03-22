function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
numb = "1234567890"
signs = "()+-*/"
    str = expr.replace( / /g, "")

        var id = true;
        var ob = 0;
        var cb = 0;
        for (i=0; i<str.length; i++){
                if (str[i]=="/" && str[i+1]=="0") throw new Error("TypeError: Division by zero.")
                if (str[i] == "(") {ob++;}
                if (str[i] == ")") {cb++;}
        }  
        if (ob != cb) throw new Error("ExpressionError: Brackets must be paired");
        
    str = str.split('')
    for(i=0;i<str.length;i++){
        if(numb.includes(str[i]) && numb.includes(str[i+1]) && numb.includes(str[i+2])){
            str[i] += str[i+1] + str[i+2]
            str.splice(i+1, 2)
        }
        if(numb.includes(str[i]) && numb.includes(str[i+1])){
            j=i+1;
            while(numb.includes(str[j-1])){
                str[i]+= str[j]
                str.splice(j, 1);
                j++
            }
        }
        
    }
function first(xstr){
    for(i=0;i<xstr.length;i++){
        if(xstr[i]=="*" && signs.includes(xstr[i-1])==false && signs.includes(xstr[i+1])==false && xstr[i-2] != "/"){
            xstr[i-1] = +xstr[i-1]*+xstr[i+1]
            xstr.splice(i, 2);
            i--
        }
        if(xstr[i]=="/" && signs.includes(xstr[i-1])==false && signs.includes(xstr[i+1])==false && xstr[i-2] != "/"){
            xstr[i-1] = +xstr[i-1]/+xstr[i+1]
            xstr.splice(i, 2);
            i--
        }
    }
  return xstr
}    

function second(xstr){
    for(i=0;i<xstr.length;i++){
        if(xstr[i]=="+" && signs.includes(xstr[i-1])==false && signs.includes(xstr[i+1])==false && xstr[i+2] != "*" && xstr[i+2] != "/" && xstr[i-2] != "*" && xstr[i-2] != "/" && xstr[i-2] != "-"){
          xstr[i-1] = +xstr[i-1] + +xstr[i+1]
            xstr.splice(i, 2);
            i--
        }
        if(xstr[i]=="-" && signs.includes(xstr[i-1])==false && signs.includes(xstr[i+1])==false && xstr[i+2] != "*" && xstr[i+2] != "/" && xstr[i-2] != "*" && xstr[i-2] != "/" && xstr[i-2] != "-"){
          xstr[i-1] = +xstr[i-1] - +xstr[i+1]
            xstr.splice(i, 2);
            i--
        }
    }
  return xstr
}    

first(str)
second(str)
while(str.length>1){
  for(i=0;i<str.length;i++){
    if(str[i]=="(" && typeof str[i+1] == "number" && str[i+2] == ")"){
      str.splice(i, 1);
      str.splice(i+1, 1);
      i=0
    }
  }
  first(str)
  second(str)
}

return str[0]
 
    
}

module.exports = {
    expressionCalculator
}