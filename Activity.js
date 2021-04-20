 let fs= require('fs');
let path = require('path');
let extensions={
    "Images":['.png','.jpg','.jpeg','.gif'],
    'Audio':['.mp3'],
    'Documents':['.pdf','.txt','.doc'],
    'Compressed':['.zip','.rar'],
    'Videos':['.mkv','.mp4']
}
let input = process.argv.slice(2);
let folderPath = input[0];
console.log(input[0]);
let extFolderPath = folderPath;
function createFolder()
{
    console.log(extFolderPath);
    fs.mkdirSync(extFolderPath);
}
function checkFolder(extension,folderPath)
{
    for(let key in extensions)
    {
        let arr = extensions[key];

        let eon = arr.includes(extension);
        if(eon==true)
        {
            console.log(key);
            extFolderPath = path.join(folderPath,key);
            console.log(extFolderPath);

            break;    
        }
        
    }
    return fs.existsSync(extFolderPath);
    
}

let content = fs.readdirSync(folderPath);
for(let i=0;i<content.length;i++)
{
    //  console.log(content[i]);
    //extensions
     console.log(path.extname(content[i]));
    let extensionName = path.extname(content[i]);
    let extensionFolderExist =checkFolder(extensionName,folderPath);
    if(extensionFolderExist==false){
        createFolder();
  //  }
    //  console.log(extensionFolderExist);
//}
 // console.log(extensionFolderExist);
    }
     //file move kra dena iss folder k andar
 
 else
 {
     move_uploaded_file(content, folderpath )

     //file move kra dena
 }
}


























