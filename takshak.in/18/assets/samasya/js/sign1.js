$("document").ready(function(){

    var start=$("#sta");
    start.hide();
    var sign=$("#sig");
    sign.hide();

    var curt=new Date;
    var newt=new Date("oct 31 2018 19:30:00");
    var diff=(newt.getTime()-curt.getTime());
    //diff=10000;

    setTimeout(function(){

        start.fadeIn(600); 


    },diff);

    
    var newt=new Date("oct 31 2018 12:00:00");
    var diff=(newt.getTime()-curt.getTime());
    //diff=10000;

    setTimeout(function(){
       
        sign.fadeIn(600); 


    },diff);


  var countDownDate = new Date("Oct 31, 2018 19:30:00").getTime();

                // Update the count down every 1 second
                var x = setInterval(function() {

                    // Get todays date and time
                    var now = new Date().getTime();

                    // Find the distance between now and the count down date
                    var distance = countDownDate - now;

                    // Time calculations for days, hours, minutes and seconds
                    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    if (days>0){
                        // Output the result in an element with id="demo"
                        document.getElementById("demo").innerHTML ="GAME STARTS IN : "+ days + "d " + hours + "h "
                            + minutes + "m " + seconds + "s ";
                    }
                    if(days==0 && hours>0){
                        document.getElementById("demo").innerHTML ="GAME STARTS IN : "+ hours + "h "
                            + minutes + "m " + seconds + "s ";
                    }
                    if(days==0 && hours==0){
                        document.getElementById("demo").innerHTML ="GAME STARTS IN : "
                            + minutes + "m " + seconds + "s ";
                    }
                    if(days==0 && hours==0 && minutes==0){
                      document.getElementById("demo").innerHTML ="GAME STARTS IN : "
                       + seconds + "s ";
                    }
                    // If the count down is over, write some text 
                    if (distance <=0) {
                        clearInterval(x);
                        $("#demo").remove();
                    }
                }, 1000);


});