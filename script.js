// Main Container div creation
const contVal = document.createElement('div');
contVal.className = "container";
document.body.appendChild(contVal);

// form creation
const frm = document.createElement('form');
frm.className = "formEle";
frm.setAttribute("name", "frmName");
frm.autocomplete="";
contVal.appendChild(frm);

// firstName div creation
const fNameDiv = document.createElement('div');
fNameDiv.className = "innerDiv";
frm.appendChild(fNameDiv);

const fL = document.createElement('label')
fL.setAttribute("for", "firstName");
fL.innerText = "First Name:";
var brk1 = document.createElement('br');
fL.appendChild(brk1);

const fI = document.createElement('input');
fI.setAttribute("type", "text");
fI.setAttribute("name", "firstName");
fI.setAttribute("id", "firstName");
fI.setAttribute("placeholder", "firstName");
fI.required = "required";

fNameDiv.append(fL, fI);

// lastName div creation
const lNameDiv = document.createElement('div');
lNameDiv.className = "innerDiv";
frm.appendChild(lNameDiv);

const lL = document.createElement('label')
lL.setAttribute("for", "lastName");
lL.innerText = "Last Name:";
var brk2 = document.createElement('br');
lL.appendChild(brk2);

const lI = document.createElement('input');
lI.setAttribute("type", "text");
lI.setAttribute("name", "lastName");
lI.setAttribute("id", "lastName");
lI.setAttribute("placeholder", "lastName");
lI.required = "required";
lNameDiv.append(lL, lI);

// address div creation
const addDiv = document.createElement('div');
addDiv.className = "innerDiv";
frm.appendChild(addDiv);

const aL = document.createElement('label')
aL.setAttribute("for", "address");
aL.innerText = "Address:";
var brk7 = document.createElement('br');
aL.appendChild(brk7);

const aI = document.createElement('textarea');
aI.setAttribute("rows", "3");
aI.setAttribute("name", "address");
aI.setAttribute("cols", "25");
aI.required = "required";
addDiv.append(aL, aI);

// pinCode div creation
const pinDiv = document.createElement('div');
pinDiv.className = "innerDiv";
frm.appendChild(pinDiv);

const pL = document.createElement('label')
pL.setAttribute("for", "pinCode");
pL.innerText = "Pin Code:";
var brk3 = document.createElement('br');
pL.appendChild(brk3);

const pI = document.createElement('input');
pI.setAttribute("type", "number");
pI.setAttribute("name", "pinCode");
pI.setAttribute("id", "pinCode");
pI.required = "required";
pinDiv.append(pL, pI);

// gender div creation
const genDiv = document.createElement('div');
genDiv.className = "innerDiv";
frm.appendChild(genDiv);

const gen = document.createElement('label')
gen.setAttribute("for", "gen");
gen.innerText = "Gender:";
var brk4 = document.createElement('br');
gen.appendChild(brk4);

const mL = document.createElement('label')
mL.setAttribute("for", "male");
mL.className = "innerLabel"
mL.innerText = "Male";

var mI = document.createElement('input');
mI.setAttribute("type", "radio");
mI.setAttribute("name", "gender");
mI.setAttribute("id", "male");
mI.value = "Male"
var genderValue = mI.value;

const feL = document.createElement('label')
feL.setAttribute("for", "female");
feL.innerText = "Female";
feL.className = "innerLabel"

var feI = document.createElement('input');
feI.setAttribute("type", "radio");
feI.setAttribute("name", "gender");
feI.setAttribute("id", "female");
feI.value = "Female";
genderValue = feI.value;

genDiv.append(gen, mL, mI, feL, feI);

// Food div creation
const foodDiv = document.createElement('div');
foodDiv.className = "innerDiv";
frm.appendChild(foodDiv);

const foL = document.createElement('label');
foL.setAttribute("for", "food");
foL.innerText = "Favourite Food:";
var brk5 = document.createElement('br');
foL.appendChild(brk5);

// checkbox creation
const lb1 = document.createElement('label');
lb1.setAttribute("for", "food");
lb1.innerText = "Chicken Biryani";
lb1.className = "innerLabel";
var b1 = document.createElement('br');
lb1.appendChild(b1);

const op1 = document.createElement('input');
op1.type = "checkbox";
op1.setAttribute("name", "chk");
op1.value = "Chicken Biryani";
op1.className = "checkBox";


const lb2 = document.createElement('label');
lb2.setAttribute("for", "food");
lb2.innerText = "Burger";
lb2.className = "innerLabel";
var b2 = document.createElement('br');
lb2.appendChild(b2);

const op2 = document.createElement('input');
op2.type = "checkbox";
op2.setAttribute("name", "chk");
op2.value = "Burger";
op2.className = "checkBox";

const lb3 = document.createElement('label');
lb3.setAttribute("for", "food");
lb3.innerText = "Noodles";
lb3.className = "innerLabel";
var b3 = document.createElement('br');
lb3.appendChild(b3);

const op3 = document.createElement('input');
op3.type = "checkbox";
op3.setAttribute("name", "chk");
op3.value = "Noodles";
op3.className = "checkBox";

const lb4 = document.createElement('label');
lb4.setAttribute("for", "food");
lb4.innerText = "Sandwich";
lb4.className = "innerLabel";
var b4 = document.createElement('br');
lb4.appendChild(b4);

const op4 = document.createElement('input');
op4.type = "checkbox";
op4.setAttribute("name", "chk");
op4.value = "Sandwich";
op4.className = "checkBox";

const lb5 = document.createElement('label');
lb5.setAttribute("for", "food");
lb5.innerText = "Salad";
lb5.className = "innerLabel"
var b5 = document.createElement('br');
lb5.appendChild(b5);

const op5 = document.createElement('input');
op5.type = "checkbox";
op5.setAttribute("name", "chk");
op5.value = "Salad";
op5.className = "checkBox";

// button creation for confirming the food items selection
var foodVal;
const op = document.createElement('input');
op.type = "button";
op.className = "selBtn";
op.setAttribute("onclick", "foodVal = myFunction()");
op.value = "Click here after selecting 2 food items!";

foodDiv.append(foL, op1, lb1, op2, lb2, op3, lb3, op4, lb4, op5, lb5, op);

// validation check that only 2 food items are selected
function myFunction() {
  var coffee = document.frmName.chk;
  var txt = "";
  var newvar = 0;
  var i;
  for (i = 0; i < coffee.length; i++) {
    if (coffee[i].checked) {
      txt = txt + coffee[i].value + "\n";
      newvar++;
      if (newvar >= 3) {
        alert("**Please select only 2 items.")
        return false;
      }
    }

  }
  var str = txt.substring(0, txt.length - 1);
  return str;
}

// state div creation
const stateDiv = document.createElement('div');
stateDiv.className = "innerDiv";
frm.appendChild(stateDiv);

const sL = document.createElement('label')
sL.setAttribute("for", "state");
sL.innerText = "State:";
var brk6 = document.createElement('br');
sL.appendChild(brk6);

const sI = document.createElement('input');
sI.setAttribute("type", "text");
sI.setAttribute("name", "state");
sI.setAttribute("id", "state");
sI.required = "required";
stateDiv.append(sL, sI);

// country div creation
const countryDiv = document.createElement('div');
countryDiv.className = "innerDiv";
frm.appendChild(countryDiv);

const cL = document.createElement('label')
cL.setAttribute("for", "country");
cL.innerText = "Country:";
var brk7 = document.createElement('br');
cL.appendChild(brk7);

const cI = document.createElement('input');
cI.setAttribute("type", "text");
cI.setAttribute("name", "country");
cI.setAttribute("id", "country");
cI.required = "required";
countryDiv.append(cL, cI);

// submit button creation
const submitDiv = document.createElement('div');
submitDiv.className = "btn";
frm.appendChild(submitDiv);

const subI = document.createElement('button');
subI.setAttribute("type", "submit");
subI.setAttribute("name", "submit");
subI.innerText = "Submit";
subI.className = "subBtn";
subI.setAttribute("onclick", "tableFun()");

submitDiv.appendChild(subI);


// tableFun defining - To display form data to table

function tableFun() {

  // checking if required fields are filled before submission
  function validation() {
    var name = fI.value;
    var lName = lI.value;
    var aName = aI.value;
    var stName = sI.value;
    var cName = cI.value;

    if (name === '' || lName === '' || aName === '' || stName === '' || cName === '') {
      return false;
    } else {
      return true;
    }
  }
  if (validation()) // Calling validation function
  {

  // Table creation
    const tab = document.createElement('table');

    const tabHead = document.createElement('thead');

    tabHead.style.bgcolor = "lavender";
    tab.appendChild(tabHead);

    // table heads creation
    const tabHeadRow = document.createElement('tr');
    tabHead.appendChild(tabHeadRow);

    const tabHeadD1 = document.createElement('th');
    tabHeadD1.innerText = "First Name";
    tabHeadD1.className = "tableHead";

    const tabHeadD2 = document.createElement('th');
    tabHeadD2.innerText = "Last Name";
    tabHeadD2.className = "tableHead";

    const tabHeadD3 = document.createElement('th');
    tabHeadD3.innerText = "Address";
    tabHeadD3.className = "tableHead";

    const tabHeadD4 = document.createElement('th');
    tabHeadD4.innerText = "Pincode";
    tabHeadD4.className = "tableHead";

    const tabHeadD5 = document.createElement('th');
    tabHeadD5.innerText = "Gender";
    tabHeadD5.className = "tableHead";

    const tabHeadD6 = document.createElement('th');
    tabHeadD6.innerText = "Favourite Food";
    tabHeadD6.className = "tableHead";

    const tabHeadD7 = document.createElement('th');
    tabHeadD7.innerText = "State";
    tabHeadD7.className = "tableHead";

    const tabHeadD8 = document.createElement('th');
    tabHeadD8.innerText = "Country";
    tabHeadD8.className = "tableHead";


    tabHeadRow.append(tabHeadD1, tabHeadD2, tabHeadD3, tabHeadD4, tabHeadD5, tabHeadD6, tabHeadD7, tabHeadD8);

    // Assigning values from form to table fields
    const tabBody = document.createElement('tbody');
    tab.appendChild(tabBody);

    const tabBodyRow = document.createElement('tr');
    tabBody.appendChild(tabBodyRow);

    const tabBodyD1 = document.createElement('td');
    tabBodyD1.innerText = fI.value;

    const tabBodyD2 = document.createElement('td');
    tabBodyD2.innerText = lI.value;

    const tabBodyD3 = document.createElement('td');
    tabBodyD3.innerText = aI.value;

    const tabBodyD4 = document.createElement('td');
    tabBodyD4.innerText = pI.value;

    const tabBodyD5 = document.createElement('td');
    tabBodyD5.innerText = genderValue;

    const tabBodyD6 = document.createElement('td');
    tabBodyD6.innerText = foodVal;

    const tabBodyD7 = document.createElement('td');
    tabBodyD7.innerText = sI.value;

    const tabBodyD8 = document.createElement('td');
    tabBodyD8.innerText = cI.value;

    tabBodyRow.append(tabBodyD1, tabBodyD2, tabBodyD3, tabBodyD4, tabBodyD5, tabBodyD6, tabBodyD7, tabBodyD8);


    contVal.remove();
    document.body.appendChild(tab);
  } //closing the validation function

} //closing tableFun function
