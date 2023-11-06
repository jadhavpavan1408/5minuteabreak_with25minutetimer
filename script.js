    var min = 25;
      var sec = 0;
      var count = 0;
      var timer = false;
      function StartClick() {
        timer = true;
        StopWatch();
      }
      function StopClick() {
        timer = false;
      }
      function ResetClick() {
        timer = false;
        alert("You have Reseted all");
        document.getElementById("min").innerHTML = "00";
        document.getElementById("sec").innerHTML = "00";
        
        document.querySelector("h1").innerHTML = "";
        document.querySelector("h2").innerHTML = "";
      }
      function StopWatch() {
        if (timer == true) {
          count = count + 1;
          if (count == 100) {
            sec = sec + 1;
            count = 0;
          }
          if (sec == 60) {
            min = min - 1;
            sec = 0;
          }
          if (min == 0) {
            document.querySelector("h1").innerHTML = "<b>this is 5 min break timer</b>";
            document.querySelector("h2").style.display = "block";
            document.querySelector("body").style.background = "red";
            document.querySelector("body").style.color = "white";
            min=5;
            sec = 0;
            count = 0;
            timer == true;
            if(count == 100){
                sec = sec +1;
                count = 0;
            }
            if(sec == 60){
                min = min-1;
                sec =0;
            }if(min == 0){
                timer == false;
                alert("break timer end")
            }
          }
          
          document.getElementById("sec").innerHTML = sec;
          document.getElementById("min").innerHTML = min;
          setTimeout("StopWatch()", 10);
        }
      }