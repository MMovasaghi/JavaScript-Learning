const fs = require('fs');
const path = require('path');
let file = {
    FileJson: function(address){
        this.result = [];
        this.address = address;
        this.FileLoader(this.result,this.address);
        return this.result;
    },
    FileLoader: function(arg,address){
        let tmp = fs.readdirSync(address);
        for(item of tmp){
            let stat = fs.statSync(address);
            if(stat.isDirectory()){
                address = path.join(address,item);
                arg.push({item: this.FileLoader(arg,address)});
            } else {
                arg.push(item);
            }
        }
    },

};
let address = './sample';
let res = file.FileJson(address);
console.log(res);