var price = 1.87;
var cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

window.price = price;
window.cid = cid;

const currencyUnits = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];

const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const changeDue = document.getElementById("change-due");
const total = document.getElementById("total");
const cashDrawerDisplay = document.getElementById("cash-drawer-display");

total.innerText = `Total: $${price}`;

let drawerText = "";
cid.forEach((element) => {
  drawerText += `${element[0]}: $${element[1]}\n`
});
cashDrawerDisplay.innerText = drawerText;

purchaseBtn.addEventListener("click", () => {
  let cash = parseFloat(cashInput.value);
  
  if(cash < price){
    alert("Customer does not have enough money to purchase the item");
  } else if(cash === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  } else {
    let changeValue = cash - price;
    let totalCid = 0;
    cid.forEach((element) => {
      totalCid += element[1]
    });

    totalCid = Math.round(totalCid * 100) / 100;
    changeValue = Math.round(changeValue * 100) / 100;

    if(totalCid < changeValue){
      changeDue.innerText = "Status: INSUFFICIENT_FUNDS"
    } else if(totalCid === changeValue){  
      let result = "Status: CLOSED"
      cid.forEach((element) => {
        if(element[1] > 0){
          result += ` ${element[0]}: $${element[1]}`;
        }
      });

      changeDue.innerText = result;
    }else{
      let change = [];

      for(let i = currencyUnits.length - 1; i >= 0; i--){
        const name = currencyUnits[i][0];
        const unitValue = currencyUnits[i][1];
        const availableInDrawer = cid[i][1];

        let amountToGive = 0

        while(changeValue >= unitValue && amountToGive < availableInDrawer){
          amountToGive += unitValue;
          changeValue -= unitValue;
          changeValue = Math.round(changeValue * 100) / 100;
        }

        if(amountToGive > 0) {
          change.push([name, amountToGive]);
        }
      }

      if(changeValue > 0){
        changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
      }else{
        let result = "Status: OPEN";
        change.forEach((element) => {
          result += ` ${element[0]}: $${element[1]}`
        });
        changeDue.innerText = result;
      }
    }
  }
});