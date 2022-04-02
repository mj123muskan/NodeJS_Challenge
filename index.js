const fs = require('fs');

let args = process.argv.slice(2);

//wcat filepath
let options = [];
let files = [];
let isS;
let isB;
let isN;
for(let i =0; i < args.length;i++)
{
    if(args[i].charAt(0) =='-')
    {
        let option = args[i].slice(1);
        if(option == 's')
        {
            isS = true;
        } else if(option == 'n')
        {
            isN = true;
        } else if(option == 'b')
        {
            isB = true;
        }
        options.push();
    } else{
        files.push(args[i]);
    }
}


let content = createContent(files);

if(isN && isB)
{
    console.error("-s and -b cannot be used together. Please use one of the two");
    return;
} else if(options.length ==0)
{
   for(let i =0;i<files.length;i++)
   {
       displayContent(files[i]);
   }
}


//wcat filepath1 filepath2 filepath3... => displays content of all files in the terminal(contactinated form) in the given order.
function displayContent(files)
{   let content;
    for(let i =0;i<files.length;i++)
    {
        let path = files[i];
        if(path == undefined)
        {
            console.error("Kindly enter the correct path");
            return;
        } else {
            let doesFileExists = fs.existsSync(path);
            if(doesFileExists)
            {
                const data = fs.readFileSync(path, 'utf8');
                content += data + "\r\n";
                // console.log(data.replace(/([\r\n]){2,}/g, '\n\n'));
            } else{
                console.error("File does not exist");
                return;
            }
        }
        return content;
    }
    
    
}

// displayContent('/Users/muskanjain/Desktop/practice/NodeJS_Challenge/file1.txt');