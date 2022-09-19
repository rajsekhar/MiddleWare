class Simulation extends HTMLElement {
    constructor() {
        super();
      }

    studentCnt = 0;

      connectedCallback() {
        this.innerHTML = `
        <fieldset>
        <table id="infotable">
        <tr>
                <td>&nbsp;Room Entrance: <br>&nbsp;Hand Sanitizer Station</td>
                <td rowspan="3" style="text-align: center;">Aisleway</td>
                <td id="Instructor">&nbsp;Instructor Rectangle <br>&nbsp;DESK & Lysol</td>
                <td colspan="2">&nbsp;Student Question Rectangle</td>
            </tr>
            <tr>
                <td id="studentone">&nbsp;Student Rectangle #1 <br>&nbsp;DESK & Lysol</td>
                <td id="studenttwo">&nbsp;Student Rectangle #2 <br>&nbsp;DESK & Lysol</td>
                <td rowspan="2" style="text-align: center;" >Aisleway</td>
                <td id="studentthree">Student Rectangle #3 <br>DESK & Lysol</td>
            </tr>
            <tr>
                <td></td>
                <td id="studentfour">&nbsp;Student Rectangle #4 <br>&nbsp;DESK & Lysol</td>
                <td id="studentfive">&nbsp;Student Rectangle #5 <br>&nbsp;DESK & Lysol</td>
            </tr>
            <tr>
                <td colspan="5"  style="text-align: center;">Aisleway</td>
            </tr>
        </table>

            <br>
            <label for="selectiontype" id="mylabel">Select Type</label>

            <select name="selecttype" id="selecttype" style="border: 6px solid transparent;font-weight: bold;">

                <option value="" disabled selected>-- Please Select A Rectangle --</option>
                <option value="Instructor">Instructor</option>
                <option value="Student">Student</option>

            </select>

            <br><br>

            <label>Face Mask</label>
            
            &nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="facemaskused" onclick="maskused(this.form)"></input>
            <label for="used">Used</label>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="facemasknotused" onclick="masknotused(this.form)"></input>
            <label for="notused">Not Used</label>
            
            <br><br>
            
            <label>Face Shield</label>
            
            &nbsp;&nbsp;<input type="checkbox" id="faceshieldused" onclick="shieldused(this.form)"></input>
            <label for="used">Used</label>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox" id="faceshieldnotused" onclick="shieldnotused(this.form)"></input>
            <label for="notused">Not Used</label>
            
            <br><br>
                        
            <label>Lysol Status</label>
            
            &nbsp;<input type="checkbox" id="lysolpickup" onclick="lysolpickupfun(this.form)"></input>
            <label for="lysolpickup">Pick Up</label>

            &nbsp;<input type="checkbox" id="lysolputdown" onclick="lysolputdownfun(this.form)"></input>
            <label for="lysolputdown">Put Down</label>

            <br><br>
            
            <label>Desk Status</label>
            
            &nbsp;<input type="checkbox" id="deskcleaned" onclick="deskcleanedfun(this.form)"></input>
            <label for="deskcleaned">Cleaned</label>

            <input type="checkbox" id="desknotcleaned" onclick="desknotcleanedfun(this.form)"></input>
            <label for="desknotcleaned">Not Cleaned</label>
            <br> <br>

            <label>Hand-Sanitizer Status</label>
            
            <input type="checkbox" id="hsused" onclick="hsusedfun(this.form)"></input>
            <label for="used">Used</label>

            <input type="checkbox" id="hsnotused" onclick="hsnotusedfun(this.form)"></input>
            <label for="notused">Not Used</label>
            
            <br><br>

                    <tr></tr>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" id="checkin" onclick="checkIn(this.form)" style="border: 6px solid transparent;font-weight: bold;">Check In</button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" id="checkout" onclick="checkOut(this.form)" style="border: 6px solid transparent;font-weight: bold;">Check Out</button>
                    
            <br><br>
        </fieldset>
        `
      }
}

customElements.define('simulation-component', Simulation);

function checkIn (form) {
    var jsonData = {
        class: 0,
        type: "", faceMask: false, faceSheild: false,
        lysol: false, handSanitizer: false, desk: false
    };

    if (form.selecttype.value == "") {
        alert("please select type");
        return
    }
    
    if (form.id == "one") {
        console.log(form.id)
        jsonData = {
            class: 1,
            type: form.selecttype.value, faceMask: form.facemaskused.checked, faceSheild: form.faceshieldused.checked,
            lysol: form.lysolpickup.checked, handSanitizer: form.hsused.checked, desk: form.deskcleaned.checked
        };
        console.log(jsonData)
        getRequest (jsonData)
    }

    if (form.id == "two") {
        console.log(form.id)
        jsonData = {
            class: 2,
            type: form.selecttype.value, faceMask: form.facemaskused.checked, faceSheild: form.faceshieldused.checked,
            lysol: form.lysolpickup.checked, handSanitizer: form.hsused.checked, desk: form.deskcleaned.checked
        };
        console.log(jsonData)
    }

    if (form.id == "three") {
        jsonData = {
            class: 3,
            type: form.selecttype.value, faceMask: form.facemaskused.checked, faceSheild: form.faceshieldused.checked,
            lysol: form.lysolpickup.checked, handSanitizer: form.hsused.checked, desk: form.deskcleaned.checked
        };
        console.log(form.id)
        console.log(jsonData)
    }
}

function checkOut () {
    console.log("checkOut Button Click")
}


function getRequest (myJson) {

    var apiReq = new XMLHttpRequest();
      
      apiReq.onreadystatechange = function () {
        if (apiReq.readyState == 4) {
        
         var resJson = JSON.parse(apiReq.responseText);
         if (resJson.status = true) {
             my_callback(apiReq, resJson.msg)
         } else {
            postData(jsonData)
         }
        }
      }

      jsonObj = JSON.stringify(myJson);
      apiReq.open("GET", "sdsensor.php?json=" + jsonObj, true)
      apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      apiReq.send();
  }

function postData (myJson) {

    var apiReq = new XMLHttpRequest();
    
    apiReq.onreadystatechange = function () {
      if (apiReq.readyState == 4) {
        // console.log(apiReq.responseText)
        my_callback(apiReq);
      }
    }

    apiReq.open("POST", "server.php", true);
    apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    jsonObj = JSON.stringify(myJson);
    console.log(jsonObj);
    apiReq.send("json=" + jsonObj);
}

function my_callback(apiReq, msg) {
    if (apiReq.status == 200) {
      console.log(apiReq.responseText)
      alert(msg);
    }
  }

// face mask  used condition check
function maskused(form) {
    if (form.id == "one") {
        form.facemasknotused.checked = false
    } else if (form.id == "two") {
        form.facemasknotused.checked = false
    }  else if (form.id == "three") {
        form.facemasknotused.checked = false
    }
}

// face mask not used condition check
function masknotused(form) {
    if (form.id == "one") {
        form.facemaskused.checked = false
    } else if (form.id == "two") {
        form.facemaskused.checked = false
    } else if (form.id == "three") {
        console.log(form.id)
        form.facemaskused.checked = false
    }
}

// Face Shield used status
function shieldused(form) {
    if (form.id == "one") {
        form.faceshieldnotused.checked = false
    } else if (form.id == "two") {
        form.faceshieldnotused.checked = false
    }  else if (form.id == "three") {
        form.faceshieldnotused.checked = false
    }
}

// Face Shield not used
function shieldnotused(form) {
    if (form.id == "one") {
        form.faceshieldused.checked = false
    } else if (form.id == "two") {
        form.faceshieldused.checked = false
    } else if (form.id == "three") {
        console.log(form.id)
        form.faceshieldused.checked = false
    }
}

// Hand-Sanitizer used Status
function hsusedfun(form) {
    if (form.id == "one") {
        form.hsnotused.checked = false
    } else if (form.id == "two") {
        form.hsnotused.checked = false
    }  else if (form.id == "three") {
        form.hsnotused.checked = false
    }
}

// Hand-Sanitizer not used Status
function hsnotusedfun(form) {
    if (form.id == "one") {
        form.hsused.checked = false
    } else if (form.id == "two") {
        form.hsused.checked = false
    } else if (form.id == "three") {
        console.log(form.id)
        form.hsused.checked = false
    }
}

// Lysol Status used Status
function lysolpickupfun(form) {
    if (form.id == "one") {
        form.lysolputdown.checked = false
    } else if (form.id == "two") {
        form.lysolputdown.checked = false
    }  else if (form.id == "three") {
        form.lysolputdown.checked = false
    }
}

// Lysol Status not used Status
function lysolputdownfun(form) {
    if (form.id == "one") {
        form.lysolpickup.checked = false
    } else if (form.id == "two") {
        form.lysolpickup.checked = false
    } else if (form.id == "three") {
        console.log(form.id)
        form.lysolpickup.checked = false
    }
}

// Lysol Status used Status
function deskcleanedfun(form) {
    if (form.id == "one") {
        form.desknotcleaned.checked = false
    } else if (form.id == "two") {
        form.desknotcleaned.checked = false
    }  else if (form.id == "three") {
        form.desknotcleaned.checked = false
    }
}

// Lysol Status not used Status
function desknotcleanedfun(form) {
    if (form.id == "one") {
        form.deskcleaned.checked = false
    } else if (form.id == "two") {
        form.deskcleaned.checked = false
    } else if (form.id == "three") {
        console.log(form.id)
        form.deskcleaned.checked = false
    }
}