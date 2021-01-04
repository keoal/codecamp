//we need to define the value of each denomination in the till
var denomination = [
      {name: 'ONE HUNDRED', value: 100.00},
      {name: 'TWENTY', value: 20.00},
      {name: 'TEN', value: 10.00},
      {name: 'FIVE', value: 5.00},
      {name: 'ONE', value: 1.00},
      {name: 'QUARTER', value: 0.25},
      {name: 'DIME', value: 0.10},
      {name: 'NICKEL', value: 0.05},
      {name: 'PENNY', value: 0.01}
      ];

      console.log("denom-test", denomination[1].name);

var denom = ['PENNY', 'NICKEL', 'DIME', 'QUARTER', 'ONE', 'FIVE', 'TEN', 'TWENTY', 'ONE HUNDRED'];

var value = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];

function checkCashRegister(price, cash, cid) {
  //create object for return with status & change keys
  let output = {
    status: "",
    change: []
  }
  
  //get change due first by subtracting price from cash
  let changeAmt = cash - price;
  const changeOut = [];
  console.log("price ", price);
  console.log("change = ", changeAmt);
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
    console.log("sum of cash in drawer", cidTotal);

  //let arr = cid.map(x => x[1]);
  //let arr2 = cid.map(x => x[0]);
  //console.log(arr);
  //then get the sum of the mapped numbers
  /*
  var cidSum = cid.reduce(
    function(a, b){
        a.total += b[1]; // a.total = a.total + b[1]
        a[b[0]] = b[1];
        //return a + b;
        return a;
    }, 
    { total: 0}
    );
    */
    //console.log("total", cidSum);
    //var total = cidSum + cid
   //this is the total amount of cash in the drawer 
    //console.log("sum of cash in drawer", total);
    //console.log("sum of cash in drawer", cidSum);


  //We need to loop through the denomination array and update the change with the coins that are available in the till up to the maximum value and store in a variable for change.

 //we need to check the amount of change vs the currency in the till and return the right change. 

//if cid < change || cannot return exact change: status "INSUFFICIENT_FUNDS"
  //else if cid == change: status="CLOSED"
  //else status: Open 

//we need to check the status of the till.
  //exact change
  if (cidSum === changeAmt){
    output.status = "CLOSED";
    output.change = cid;
    console.log("output", output);
    return output;}
  //insufficient funds
  else if (cidSum.toFixed(2) < changeAmt){
    output.status = "INSUFFICIENT_FUNDS";
    console.log("output", output);
    return output;
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
  if (changeAmt > 0) {
      output.status = "INSUFFICIENT_FUNDS";
      output.change = [];
      return output;
  } return {status: "OPEN", change: changeOut};
}



checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
