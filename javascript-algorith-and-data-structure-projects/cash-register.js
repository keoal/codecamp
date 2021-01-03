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

function checkCashRegister(price, cash, cid) {
  //create object for return with status & change keys
  let output = {
    status: "",
    change: []
  }
  
  //get change due first by subtracting price from cash
  let change = cash - price;
  console.log("price ", price);
  console.log("change = ", change);
  //console.log("cash in drawer ", cid);

  //We need to get the sum of the CID to find out how much money is in the drawer - this will be the sum of the second index in the array.
  //first map the array to get the numbers only
  // Transform CID array into drawer object
  var register = cid.reduce(
    function(acc, curr) {
      acc.total += curr[1];
      acc[curr[0]] = curr[1];
      //console.log("acc", acc);
      //console.log("curr", curr);
      return acc;
    },
    { total: 0 }
  );
  console.log("register", register);


  let arr = cid.map(x => x[1]);
  let arr2 = cid.map(x => x[0]);
  //console.log(arr);
  //then get the sum of the mapped numbers
  var cidSum = arr.reduce(function(a, b){
        return a + b;
    }, 0);
    var total = cidSum + cid
   //this is the total amount of cash in the drawer 
    console.log("sum of cash in drawer", total);
  

//we need to define the value of each denomination in the till
  
    
    console.log(arr2);


  

 //we need to check the amount of change vs the currency in the till and return the right change. 

//we need to check the status of the till.
  if (cidSum < change){
    return status = "INSUFFICIENT_FUNDS";
    console.log("INSUFFICIENT_FUNDS");
  } else if (cidSum == change){
    console.log("CLOSED");
  } else {
    console.log("Status: OPEN");
  }

  //if cid < change || cannot return exact change: status "INSUFFICIENT_FUNDS"
  //else if cid == change: status="CLOSED"
  //else status: Open 


  //var change;
  console.log(output);
  return output;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
