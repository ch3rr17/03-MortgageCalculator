$(document).ready(function(){
    $("#calcMonthly").click(function() { //Click event to calculate monthly mortgage upon click
    
        //Grabs user's input
        var loan = $('#balance').val();
        loan = parseInt(loan);
        var rate = $('#irate').val();
        rate = parseInt(rate);
        var term = $('#term').val();
        term = parseInt(term);
        var period = $('#period').find(':selected').val();
        period = parseInt(period);

        //Calculates number of payments on a given period
        var numOfPayments = term * period;

        //Calculates the monthly interest
        var monthlyInterestRate = (rate/100)/period;

        //Calculates the compounded interest rate
        var compoundedInterestRate = Math.pow((1 + monthlyInterestRate),numOfPayments);

        //Calculates the interest quotient
        var intQuotient = (monthlyInterestRate * compoundedInterestRate)/(compoundedInterestRate-1);

        //Calculates the monthly payment
        var monthlyPayment = Math.round(loan * intQuotient).toFixed(2);
        
        //Conditional statement if monthly payment is NaN
        if(isNaN(monthlyPayment)){
            $("#result").text("Please provide a valid entry.");
        }
        else{
            $("#result").text("Your monthly payment is: $" + monthlyPayment);
            console.log("Your monthly payment is: $" + monthlyPayment); // verify result in the console
        }

    });
   
});