process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    
    var s = ""
    
    for(var i=0; i<b; i++){
        for(var j=0; j<a; j++){
            s += "*"
        }
        s += "\n";
    }
    
    console.log(s);
});