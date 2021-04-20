let fs = require("fs");
let input = process.argv.slice(2);
console.log("input", input);
let options=[];
let filepaths=[];
for(let i=0;i<input.length;i++){
    if(input[i] == "-s"|| input[i]=="-b" || input[i]=="-n"){

        options.push(input[i]);
    }
    else{
        filepaths.push(input[i]);
    }
    
}
//console.log("options",options);
//console.log("filePath",filepaths);
//check alll file paths exist
for(let i=0; i<filepaths.length;i++){
    let isFilePresent =fs.existsSync(filepaths[i]);
    if(isFilePresent == false){
        console.log("filepath",filepaths[i], "does not exist  . check path");
        return;
    }
}


//to read content from file path
let totalContent = "";
for(let i=0;i<filepaths.length;i++){
    let contentOFCurrent = fs.readFileSync(filepaths[i]);
    totalContent += contentOFCurrent + "\r\n";

}
//console.log(totalContent);
let isSoption = options.includes("-s");
if(isSoption==true){
    let contentArr = totalContent.split("\r\n");
    //idfy remove empty line break
    let tempArr = [];
    for(let i=0;i<contentArr.length;i++){

       
    if(contentArr[i]!== ""){
        tempArr.push(contentArr[i]);
        
    }    
}
//outputArr = tempArr;
//console.log("tempArr",tempArr);
 totalContent = tempArr.join("\r\n");
}
//put a number to every line
let isN = options.includes("-n");

let isB = options.includes("-b");
let finalOption;
if(isN == true){
    if(isB == true){

        let idxB = options.indexOf("-b");
        let idxN = options.indexOf("-n");

         finalOption = idxB < idxN ? "-b" : "-n";
    }else{
        finalOption= "-n";
    }
} else if(isB == true){
    finalOption ="-b"
}

if(finalOption=="-n"){

    let count = 1;
    let contentArr = totalContent.split("\r\n");



    for(let i=0;i<contentArr.length;i++){
        
            contentArr[i]=count +"."+contentArr[i];
            count++;
      
    }
    totalContent =contentArr.join("\r\n");

}

if(finalOption == "-b"){
    let count = 1;
    let contentArr = totalContent.split("\r\n");



    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!= ""){
            contentArr[i]=count +"."+contentArr[i];
            count++;
        }
    }
    totalContent =contentArr.join("\r\n");
    //console.log(contentArr);
}
   
console.log(totalContent);
























