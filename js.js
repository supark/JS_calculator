var nAccum=0.0, readyCal=0, clearDisplay=0.0, pendingoperation = 0;

function op(nNumber) {
  nNumber = Number(nNumber);  //convert parameter to a Number

  if(readyCal == 1 || pendingoperation != 0) {
    switch (pendingoperation) {
      case 15:
        if(nNumber != 0)
          nAccum = nAccum / nNumber;
        break;
      case 14:
        nAccum = nAccum * nNumber;
        break;
      case 13:
        nAccum = nAccum - nNumber;
        break;
      case 12:
        nAccum = nAccum + nNumber;
        break;
    }
    jsCalc.txtDisplay.value = nAccum;
    pendingoperation = 0;
  }
  else {
    nAccum = Number(jsCalc.txtDisplay.value);
  }
  readyCal = 1;
}

function bt_adder(token) {
  switch (token) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
      if (readyCal == 1 || readyCal == 2) {
        jsCalc.txtDisplay.value = token;
        readyCal = 0;
        if (readyCal == 2)
          nAccum = 0;

      }
      else
        if (jsCalc.txtDisplay.value == '0') {
          jsCalc.txtDisplay.value = token;
        }
        else {
        jsCalc.txtDisplay.value = jsCalc.txtDisplay.value + token;
        }

      break;
    case 10:
      if (readyCal == 1 || readyCal == 2) {
        jsCalc.txtDisplay.value = '.';
        readyCal = 0;
        if(readyCal == 2) {
          nAccum = 0;
        }
      }
      else {
        if(jsCalc.txtDisplay.value.indexOf(".", 0) == -1) {
          jsCalc.txtDisplay.value = jsCalc.txtDisplay.value + ".";
        }
      }
      break;

    case 11:
      jsCalc.txtDisplay.value = "0";
      nAccum = 0;
      break;

    case 12:
    case 13:
    case 14:
    case 15:
      op(jsCalc.txtDisplay.value);
      pendingoperation = token;
      break;

    case 16:
      op(jsCalc.txtDisplay.value);
      readyCal = 2;
      break;


  }
}
