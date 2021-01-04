//we need to define the value of each denomination in the till

function checkCashRegister(price, cash, cid) {
  //First we need to define the value of each denomination in the till
    const denomination = {
    "PENNY": .01,
    "NICKEL": .05,
    "DIME": .10,
    "QUARTER": .25,
    "ONE": 1.00,
    "FIVE": 5.00,
    "TEN": 10.00,
    "TWENTY": 20.00,
    "ONE HUNDRED": 100.00
  }

  //Then we need to create the output object for return with status & change keys
  let output = {
    status: "",
    change: []
  }
  
  //get change due first by subtracting price from cash
  let changeAmt = cash - price;
  //and also create a new array for the change out at the end
  const changeOut = [];
  
  //console.log("price ", price);
  //console.log("change = ", changeAmt);
  //console.log("changeOut", changeOut);
  //console.log("cash in drawer ", cid);

  //We need to get the sum of the CID to find out how much money is in the drawer - this will be the sum of the second index in the array.
  //first map the array to get the numbers only
  // Transform CID array into drawer object
  console.log("cid", cid);
  let tillAmt = cid.map(x => x[1]);
  //let arr2 = cid.map(x => x[0]);
  //console.log("arr", tillAmt);
  //then get the sum of the mapped numbers
  var cidSum = tillAmt.reduce(function(a, b){
        //console.log("a", a);
        //console.log("b", b);
        return (a + b);
    }, 0);

  var cidTotal = cidSum.toFixed(2);
   //this is the total amount of cash in the drawer 
    //console.log("sum of cash in drawer", cidTotal);


  //We need to loop through the denomination array and update the change with the coins that are available in the till up to the maximum value and store in a variable for change.

  

  //if cid < change || cannot return exact change: status "INSUFFICIENT_FUNDS"
  //else if cid == change: status="CLOSED"
  //else status: Open 
//we need to check the amount of change vs the currency in the till and return the right change.
//we need to check the status of the till.
  //Status for exact change
  if (cidSum === changeAmt){
    output.status = "CLOSED";
    output.change = cid;
    //console.log("output", output);
    return output;}
  //Status for insufficient funds
  else if (cidSum < changeAmt){
    output.status = "INSUFFICIENT_FUNDS";
    //console.log("output", output);
    return output;
    //Otherwise loop through cid
  } else {
      //reverse cid array;
      cid = cid.reverse();
      for (let elem of cid) {
        let temp = [elem[0], 0];
         while (changeAmt >= denomination[elem[0]] && elem[1] > 0) {
           temp[1] += denomination[elem[0]];
           elem[1] -= denomination[elem[0]];
           changeAmt -= denomination[elem[0]];
           changeAmt = changeAmt.toFixed(2);
            } 
            if (temp[1] > 0) {
                  changeOut.push(temp);
                  }
      }
  }
  //Status if changeAmt is greater than 0
  if (changeAmt > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
      return output;
  //Otherwise open the till and give out the correct change.
  } else {
      output.status = "OPEN"; 
      output.change = changeOut;
      console.log("output", output);
      return output;
    }
}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
