// jshint esversion:6

// document.getElementById("minute").innerText = "1";

var ms = 0;
var s = 0;
var m = 0;
let int;


function time() {
  ms++;
  if (ms >= 100) {
    s++;
    ms = 0;
  }
  if (s >= 60) {
    m++;
    s = 0;
  }

  is_s_String = typeof s == 'string';
  is_m_String = typeof m == 'string';
  is_ms_String = typeof ms == 'string';

  if (!is_s_String) {
    if (s < 10) {
      s = "0" + s;
    }
  }

  if (!is_m_String) {
    if (m < 10) {
      m = "0" + m;
    }
  }

  if (ms < 10) {
    ms = "0" + ms;
  }

  // console.log(m, + " " + s, + " " + ms);
  document.getElementById("millisecond").innerText = ms;
  document.getElementById("second").innerText = s;
  document.getElementById("minute").innerText = m;
}

function dualBtn() {
  let btnTxt = document.getElementById("start-stop-Btn").innerText;
  if (btnTxt == "Start") {
    document.getElementById("start-stop-Btn").innerText = "Stop";
    int = setInterval(time, 10);
    console.log("Start");
    document.getElementById("start-stop-Btn").style.borderColor = "#F15412";
  } else {
    document.getElementById("start-stop-Btn").innerText = "Start";
    clearInterval(int);
    console.log("Stop");
    document.getElementById("start-stop-Btn").style.borderColor = "#34B3F1";
  }
}

function reset() {
  clearInterval(int);
  document.getElementById("millisecond").innerText = "00";
  document.getElementById("second").innerText = "00";
  document.getElementById("minute").innerText = "00";
  ms = 0;
  s = 0;
  m = 0;
  document.getElementById("start-stop-Btn").innerText = "Start";
  document.getElementById("start-stop-Btn").style.borderColor = "#34B3F1";
  console.log("Reset");
}
