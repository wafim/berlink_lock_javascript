describe('A berlink clock unit test ', function () {

      //tester les exeptions
        it("should return exeption when input is emty", function () {
            var time="88:99:77";
            expect(function () {berlinClock(time)}).toThrow(new Error("format non correcte"));
        });
        

        it("should return exeption when time is incorrecte", function () {
            var time="";
            expect(function () {berlinClock(time)}).toThrow(new Error("time non fournit"));
        });
        
        //tester les heures
        it("should return berlin clock format when hour is 13",function() {
            var time="13:00:00";
            expect(berlinClock(time)[1]).toEqual("RROO");
            expect(berlinClock(time)[2]).toEqual("RRRO");
    });
      //tester les minutes
    
     it("should return berlin clock format when minute are 17",function() {
        var time="13:17:00";
        expect(berlinClock(time)[3]).toEqual("YYROOOOOOOO");
        expect(berlinClock(time)[4]).toEqual("YYOO");

    });

    
      it("should return berlin clock format when minute are 20",function(){

        var time="13:20:00";
        expect(berlinClock(time)[3]).toEqual("YYRYOOOOOOO");
        expect(berlinClock(time)[4]).toEqual("OOOO");
    });

    //tester les secondes  
       it("should return Y second is 00",function(){
        var time="13:20:00";
        expect(berlinClock(time)[0]).toEqual("Y");
    });
});