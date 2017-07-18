function berlinClock(input) {

    if (input==null || input==""){
         throw new Error("time non fournit");
    }else{
        var times = input.split(":");
        var  hours   = times[0];
        var  minutes = times[1];
        var  seconds = times[2];
        
        if(hours>24 || hours<0 || minutes>59 ||minutes<0 || seconds>59 || seconds<0){
            throw new Error("format non correcte");
        }else{

        return [getSeconsLamp(seconds), getFiveHoursLamps(hours), getOneHourLamps(hours), getFiveMinutesLamps(minutes), getOneMinuteLamps(minutes)];
            }
        }

    }
      function  getFiveHoursLamps( hours) {
        var result = "";
        var hour=hours/5;
        for (var i = 0; i < hour-1; i++) {
            result +="R";
        }
        for (var i = 0; i < 4-hour; i++) {
            result += "O";
        }
        return result;
    }

        function  getOneHourLamps( hours) {
        var result = "";
        var hour=hours%5;
        for (var i = 0; i < hour; i++) {
           result +="R";
        }
        for (var i = 0; i < 4-hour; i++) {
            result += "O";
        }
        return result;
    }

    function getFiveMinutesLamps( minutes) {
        var  result ="";
        var minute  = minutes/5;
        for (var i = 1; i <= minute; i++) {
            if (i% 3==0 ) {
                result += "R";
            } else {
                result  +="Y";
            }
        }
        for( var i =0;i< 11-minute;i++){
         result  +="O";

        }
        return result;
    }

    function getOneMinuteLamps( minutes) {
        var result = "";
        var minute=minutes % 5;

        for (var i = 0; i < minute; i++) {
            result +="Y";
        }
        for(var i =0; i<  4-minute;i++){
        result +="O";
        }
        return result;
    }

    function getSeconsLamp( seconds) {
        if (seconds % 2 == 0) {
            return "Y";
        }
        return "O";
    }

    

