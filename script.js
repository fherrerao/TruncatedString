function truncateString(str, num) {
    let long = str.substring(0,num);
    if(str.length>num){
      return long+"...";
    }
    return str;
  }
  
  console.log(truncateString("Peter Piper picked a peck of pickled peppers", 8));