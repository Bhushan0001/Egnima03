function shortener_name(name, maxlength){
    if(name.length > maxlength){
        return name.substring(0,maxlength)+'...';
    }
    return name;
}

console.log(shortener_name("bhushan@123xyz",10));