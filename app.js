const closingTakaD1 = document.getElementById("tcd1");
const closingTakaD2 = document.getElementById("tcd2");
const closingTakaD3 = document.getElementById("tcd3");
const closingTakaD4 = document.getElementById("tcd4");
const closingTakaTotal = document.getElementById("tctotal");

const OpeningTakaD1 = document.getElementById("tod1");
const OpeningTakaD2 = document.getElementById("tod2");
const OpeningTakaD3 = document.getElementById("tod3");
const OpeningTakaD4 = document.getElementById("tod4");
const OpeningTakaTotal = document.getElementById("tototal");

const dailyTakaD1 = document.getElementById("tdd1");
const dailyTakaD2 = document.getElementById("tdd2");
const dailyTakaD3 = document.getElementById("tdd3");
const dailyTakaD4 = document.getElementById("tdd4");
const dailyTakaTotal = document.getElementById("tdtotal");

//thief logic ============================================
const tclosingTakaD1 = document.getElementById("ttcd1");
const tclosingTakaD2 = document.getElementById("ttcd2");
const tclosingTakaD3 = document.getElementById("ttcd3");
const tclosingTakaD4 = document.getElementById("ttcd4");
const tclosingTakaTotal = document.getElementById("ttctotal");

const tOpeningTakaD1 = document.getElementById("ttod1");
const tOpeningTakaD2 = document.getElementById("ttod2");
const tOpeningTakaD3 = document.getElementById("ttod3");
const tOpeningTakaD4 = document.getElementById("ttod4");
const tOpeningTakaTotal = document.getElementById("ttototal");

const tdailyTakaD1 = document.getElementById("ttdd1");
const tdailyTakaD2 = document.getElementById("ttdd2");
const tdailyTakaD3 = document.getElementById("ttdd3");
const tdailyTakaD4 = document.getElementById("ttdd4");
const tdailyTakaTotal = document.getElementById("ttdtotal");

const tclosingUnitD1 = document.getElementById("tucd1");
const tclosingUnitD2 = document.getElementById("tucd2");
const tclosingUnitD3 = document.getElementById("tucd3");
const tclosingUnitD4 = document.getElementById("tucd4");
const tclosingUnitTotal = document.getElementById("tuctotal");

const tOpeningUnitD1 = document.getElementById("tuod1");
const tOpeningUnitD2 = document.getElementById("tuod2");
const tOpeningUnitD3 = document.getElementById("tuod3");
const tOpeningUnitD4 = document.getElementById("tuod4");
const tOpeningUnitTotal = document.getElementById("tuototal");

const tdailyUnitD1 = document.getElementById("tudd1");
const tdailyUnitD2 = document.getElementById("tudd2");
const tdailyUnitD3 = document.getElementById("tudd3");
const tdailyUnitD4 = document.getElementById("tudd4");
const tdailyUnitTotal = document.getElementById("tudtotal");

const tcalculationUnit = document.getElementById("tunit");
const tcalculationTk = document.getElementById("tTk");

const dispansary = document.getElementById("Des");
const subsctrac = document.getElementById("thief_in");
//===================================================================

const saveBtn = document.querySelector(".save");
const importBtn = document.querySelector(".import");
const thiefBtn = document.querySelector(".thief");

const container = document.querySelector(".container");
const thiefContainer = document.querySelector(".thief_container");

thiefBtn.addEventListener("click", changeView);

saveBtn.addEventListener("click", save);
importBtn.addEventListener("click", importData);
closingTakaD1.addEventListener("input", ClosingTaka);
closingTakaD2.addEventListener("input", ClosingTaka);
closingTakaD3.addEventListener("input", ClosingTaka);
closingTakaD4.addEventListener("input", ClosingTaka);

OpeningTakaD1.addEventListener("input", OpeningTaka);
OpeningTakaD2.addEventListener("input", OpeningTaka);
OpeningTakaD3.addEventListener("input", OpeningTaka);
OpeningTakaD4.addEventListener("input", OpeningTaka);

tclosingTakaD1.addEventListener("input", tClosingTaka);
tclosingTakaD2.addEventListener("input", tClosingTaka);
tclosingTakaD3.addEventListener("input", tClosingTaka);
tclosingTakaD4.addEventListener("input", tClosingTaka);

tOpeningTakaD1.addEventListener("input", tOpeningTaka);
tOpeningTakaD2.addEventListener("input", tOpeningTaka);
tOpeningTakaD3.addEventListener("input", tOpeningTaka);
tOpeningTakaD4.addEventListener("input", tOpeningTaka);

function ClosingTaka() {
  let D1, D2, D3, D4;
  D1 = Number(closingTakaD1.value);
  D2 = Number(closingTakaD2.value);
  D3 = Number(closingTakaD3.value);
  D4 = Number(closingTakaD4.value);
  let total = D1 + D2 + D3 + D4;
  closingTakaTotal.value = total.toFixed(2);
  dailyBalance();
}

function OpeningTaka() {
  let D1, D2, D3, D4;
  D1 = Number(OpeningTakaD1.value);
  D2 = Number(OpeningTakaD2.value);
  D3 = Number(OpeningTakaD3.value);
  D4 = Number(OpeningTakaD4.value);
  OpeningTakaTotal.value = (D1 + D2 + D3 + D4).toFixed(2);
  dailyBalance();
}

function dailyBalance() {
  dailyTakaD1.value = (Number(closingTakaD1.value) - Number(OpeningTakaD1.value)).toFixed(2);
  dailyTakaD2.value = (Number(closingTakaD2.value) - Number(OpeningTakaD2.value)).toFixed(2);
  dailyTakaD3.value = (Number(closingTakaD3.value) - Number(OpeningTakaD3.value)).toFixed(2);
  dailyTakaD4.value = (Number(closingTakaD4.value) - Number(OpeningTakaD4.value)).toFixed(2);
  dailyTakaTotal.value = (Number(closingTakaTotal.value) - Number(OpeningTakaTotal.value)).toFixed(
    2,
  );
}

//unit logic≠================

const closingUnitD1 = document.getElementById("ucd1");
const closingUnitD2 = document.getElementById("ucd2");
const closingUnitD3 = document.getElementById("ucd3");
const closingUnitD4 = document.getElementById("ucd4");
const closingUnitTotal = document.getElementById("uctotal");

const OpeningUnitD1 = document.getElementById("uod1");
const OpeningUnitD2 = document.getElementById("uod2");
const OpeningUnitD3 = document.getElementById("uod3");
const OpeningUnitD4 = document.getElementById("uod4");
const OpeningUnitTotal = document.getElementById("uototal");

const dailyUnitD1 = document.getElementById("udd1");
const dailyUnitD2 = document.getElementById("udd2");
const dailyUnitD3 = document.getElementById("udd3");
const dailyUnitD4 = document.getElementById("udd4");
const dailyUnitTotal = document.getElementById("udtotal");

const calculationUnit = document.getElementById("unit");
const calculationTk = document.getElementById("Tk");

closingUnitD1.addEventListener("input", ClosingUnit);
closingUnitD2.addEventListener("input", ClosingUnit);
closingUnitD3.addEventListener("input", ClosingUnit);
closingUnitD4.addEventListener("input", ClosingUnit);

OpeningUnitD1.addEventListener("input", OpeningUnit);
OpeningUnitD2.addEventListener("input", OpeningUnit);
OpeningUnitD3.addEventListener("input", OpeningUnit);
OpeningUnitD4.addEventListener("input", OpeningUnit);

tclosingUnitD1.addEventListener("input", tClosingUnit);
tclosingUnitD2.addEventListener("input", tClosingUnit);
tclosingUnitD3.addEventListener("input", tClosingUnit);
tclosingUnitD4.addEventListener("input", tClosingUnit);

tOpeningUnitD1.addEventListener("input", tOpeningUnit);
tOpeningUnitD2.addEventListener("input", tOpeningUnit);
tOpeningUnitD3.addEventListener("input", tOpeningUnit);
tOpeningUnitD4.addEventListener("input", tOpeningUnit);

function ClosingUnit() {
  let D1, D2, D3, D4;
  D1 = Number(closingUnitD1.value);
  D2 = Number(closingUnitD2.value);
  D3 = Number(closingUnitD3.value);
  D4 = Number(closingUnitD4.value);
  let total = D1 + D2 + D3 + D4;
  closingUnitTotal.value = total.toFixed(2);
  dailyUnit();
}

function OpeningUnit() {
  let D1, D2, D3, D4;
  D1 = Number(OpeningUnitD1.value);
  D2 = Number(OpeningUnitD2.value);
  D3 = Number(OpeningUnitD3.value);
  D4 = Number(OpeningUnitD4.value);
  OpeningUnitTotal.value = (D1 + D2 + D3 + D4).toFixed(2);
  dailyUnit();
}

function dailyUnit() {
  dailyUnitD1.value = (Number(closingUnitD1.value) - Number(OpeningUnitD1.value)).toFixed(2);
  dailyUnitD2.value = (Number(closingUnitD2.value) - Number(OpeningUnitD2.value)).toFixed(2);
  dailyUnitD3.value = (Number(closingUnitD3.value) - Number(OpeningUnitD3.value)).toFixed(2);
  dailyUnitD4.value = (Number(closingUnitD4.value) - Number(OpeningUnitD4.value)).toFixed(2);
  let unittotal = (Number(closingUnitTotal.value) - Number(OpeningUnitTotal.value)).toFixed(2);
  dailyUnitTotal.value = unittotal;
  calculationUnit.textContent = unittotal;
  calculationTk.textContent = (43 * unittotal).toFixed(2);
}

function save() {
  if (
    !closingTakaD1.value ||
    !closingTakaD2.value ||
    !closingTakaD3.value ||
    !closingTakaD4.value ||
    !closingUnitD1.value ||
    !closingUnitD2.value ||
    !closingUnitD3.value ||
    !closingUnitD4.value
  ) {
    alert("All Closing Data is not Entered yet!");
    return;
  }
  const units = {
    d1: Number(closingUnitD1.value),
    d2: Number(closingUnitD2.value),
    d3: Number(closingUnitD3.value),
    d4: Number(closingUnitD4.value),
  };
  const taka = {
    d1: Number(closingTakaD1.value),
    d2: Number(closingTakaD2.value),
    d3: Number(closingTakaD3.value),
    d4: Number(closingTakaD4.value),
  };

  const data = [units, taka];
  const finalData = JSON.stringify(data);
  localStorage.setItem("data", finalData);
  alert("Data Saved!");
}

function importData() {
  const data = JSON.parse(localStorage.getItem("data"));
  const unit = data[0];
  const taka = data[1];
  OpeningTakaD1.value = taka.d1;
  OpeningTakaD2.value = taka.d2;
  OpeningTakaD3.value = taka.d3;
  OpeningTakaD4.value = taka.d4;
  OpeningUnitD1.value = unit.d1;
  OpeningUnitD2.value = unit.d2;
  OpeningUnitD3.value = unit.d3;
  OpeningUnitD4.value = unit.d4;
  let D11, D22, D33, D44;
  D11 = Number(OpeningTakaD1.value);
  D22 = Number(OpeningTakaD2.value);
  D33 = Number(OpeningTakaD3.value);
  D44 = Number(OpeningTakaD4.value);
  OpeningTakaTotal.value = (D11 + D22 + D33 + D44).toFixed(2);
  let D1, D2, D3, D4;
  D1 = Number(OpeningUnitD1.value);
  D2 = Number(OpeningUnitD2.value);
  D3 = Number(OpeningUnitD3.value);
  D4 = Number(OpeningUnitD4.value);
  OpeningUnitTotal.value = (D1 + D2 + D3 + D4).toFixed(2);
}

let n = 0;

function changeView() {
  if (n == 0) {
    container.style.display = "none";
    thiefContainer.style.display = "block";
    getData();
    tOpeningTaka();
    tOpeningUnit();
    tClosingTaka();
    tClosingUnit();
    n++;
  } else if (n == 1) {
    container.style.display = "block";
    thiefContainer.style.display = "none";
    n = 0;
  }
}

function getData() {
  tOpeningTakaD1.value = OpeningTakaD1.value;
  tOpeningTakaD2.value = OpeningTakaD2.value;
  tOpeningTakaD3.value = OpeningTakaD3.value;
  tOpeningTakaD4.value = OpeningTakaD4.value;
  tOpeningTakaTotal.value = OpeningTakaTotal.value;

  tclosingTakaD1.value = closingTakaD1.value;
  tclosingTakaD2.value = closingTakaD2.value;
  tclosingTakaD3.value = closingTakaD3.value;
  tclosingTakaD4.value = closingTakaD4.value;
  tclosingTakaTotal.value = closingTakaTotal.value;

  //unit
  tOpeningUnitD1.value = OpeningUnitD1.value;
  tOpeningUnitD2.value = OpeningUnitD2.value;
  tOpeningUnitD3.value = OpeningUnitD3.value;
  tOpeningUnitD4.value = OpeningUnitD4.value;
  tOpeningUnitTotal.value = OpeningUnitTotal.value;

  tclosingUnitD1.value = closingUnitD1.value;
  tclosingUnitD2.value = closingUnitD2.value;
  tclosingUnitD3.value = closingUnitD3.value;
  tclosingUnitD4.value = closingUnitD4.value;
  tclosingUnitTotal.value = closingUnitTotal.value;
}

function tdailyUnit() {
  tdailyUnitD1.value = (Number(tclosingUnitD1.value) - Number(tOpeningUnitD1.value)).toFixed(2);
  tdailyUnitD2.value = (Number(tclosingUnitD2.value) - Number(tOpeningUnitD2.value)).toFixed(2);
  tdailyUnitD3.value = (Number(tclosingUnitD3.value) - Number(tOpeningUnitD3.value)).toFixed(2);
  tdailyUnitD4.value = (Number(tclosingUnitD4.value) - Number(tOpeningUnitD4.value)).toFixed(2);
  let unittotal = (Number(tclosingUnitTotal.value) - Number(tOpeningUnitTotal.value)).toFixed(2);
  tdailyUnitTotal.value = unittotal;
  tcalculationUnit.textContent = unittotal;
  tcalculationTk.textContent = (43 * unittotal).toFixed(2);
}

function tdailyBalance() {
  tdailyTakaD1.value = (Number(tclosingTakaD1.value) - Number(tOpeningTakaD1.value)).toFixed(2);
  tdailyTakaD2.value = (Number(tclosingTakaD2.value) - Number(tOpeningTakaD2.value)).toFixed(2);
  tdailyTakaD3.value = (Number(tclosingTakaD3.value) - Number(tOpeningTakaD3.value)).toFixed(2);
  tdailyTakaD4.value = (Number(tclosingTakaD4.value) - Number(tOpeningTakaD4.value)).toFixed(2);
  tdailyTakaTotal.value = (
    Number(tclosingTakaTotal.value) - Number(tOpeningTakaTotal.value)
  ).toFixed(2);
}

function tOpeningTaka() {
  let D1, D2, D3, D4;
  D1 = Number(tOpeningTakaD1.value);
  D2 = Number(tOpeningTakaD2.value);
  D3 = Number(tOpeningTakaD3.value);
  D4 = Number(tOpeningTakaD4.value);
  tOpeningTakaTotal.value = (D1 + D2 + D3 + D4).toFixed(2);
  tdailyBalance();
}

function tOpeningUnit() {
  let D1, D2, D3, D4;
  D1 = Number(tOpeningUnitD1.value);
  D2 = Number(tOpeningUnitD2.value);
  D3 = Number(tOpeningUnitD3.value);
  D4 = Number(tOpeningUnitD4.value);
  tOpeningUnitTotal.value = (D1 + D2 + D3 + D4).toFixed(2);
  tdailyUnit();
}

function tClosingUnit() {
  let D1, D2, D3, D4;
  D1 = Number(tclosingUnitD1.value);
  D2 = Number(tclosingUnitD2.value);
  D3 = Number(tclosingUnitD3.value);
  D4 = Number(tclosingUnitD4.value);
  let total = D1 + D2 + D3 + D4;
  tclosingUnitTotal.value = total.toFixed(2);
  tdailyUnit();
}

function tClosingTaka() {
  let D1, D2, D3, D4;
  D1 = Number(tclosingTakaD1.value);
  D2 = Number(tclosingTakaD2.value);
  D3 = Number(tclosingTakaD3.value);
  D4 = Number(tclosingTakaD4.value);
  let total = D1 + D2 + D3 + D4;
  tclosingTakaTotal.value = total.toFixed(2);
  tdailyBalance();
}
