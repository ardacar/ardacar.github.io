function fonksiyon() {
    var input = document.getElementById("input").value; 
    var input2 = input.toLowerCase();

    if (input2.indexOf("http://") > -1){
      var a1 = input2.replaceAll("http://", "domain:");
      var a2 = a1.split(" ");
      a3 = [a2];
      console.log(a3);
    } else {
        console.log("Else if 1");
    }

    if (input2.indexOf("https://") > -1){
      var b1 = input2.replaceAll("https://", "domain:");
      var b2 = b1.split(" ");
      b3 = [b2];
      console.log(b3);
    } else {
        console.log("Else if 2");
    };
