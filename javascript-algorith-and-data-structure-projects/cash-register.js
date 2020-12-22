function checkCashRegister(price, cash, cid) {
  //create object for return with status & change keys

  let output = {
    status: "",
    change: []
  }
  
  //if cid < change || cannot return exact change: status "INSUFFICIENT_FUNDS"
  //else if cid == change


  //var change;
  console.log(output);
  return output;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
