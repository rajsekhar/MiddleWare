class Simulation extends HTMLElement {
    constructor() {
        super();
      }

    studentCnt = 0;

      connectedCallback() {
        this.innerHTML = `
        
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

        <fieldset id="options">
            <br>
            <label for="selectiontype" id="mylabel">Select Type</label>

            <select name="selecttype" id="selecttype" style="border: 6px solid transparent;font-weight: bold;" onchange="selectChange(this.form)">

                <option value="" disabled selected>-- Please Select A Rectangle --</option>
                <option value="Instructor" selected>Instructor</option>
                <option value="Student#1">Student #1</option>
                <option value="Student#2">Student #2</option>
                <option value="Student#3">Student #3</option>
                <option value="Student#4">Student #4</option>
                <option value="Student#5">Student #5</option>

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
                    <button type="button" id="checkin" onclick="checkIn(this.form)" class="mybutton">Check In</button>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                    <button type="button" id="checkout" onclick="checkOut(this.form)" class="mybutton">Check Out</button>
                    
            <br><br>
        </fieldset>
        <fieldset style="text-align: center;">
        <br>
        <button type="button" class="button" id="StartClass" onclick="startClass(this.form)" >Start Class</button>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <button type="button" class="button"  id="EndClass" onclick="endClass(this.form)" >End Class</button>
        <br><br>
        </fieldset>
        `
      }
}

customElements.define('simulation-component', Simulation);

var class_one_stu_cnt = 0;
var class_two_stu_cnt = 0;
var class_three_stu_cnt = 0;
var stuId = 0
function selectChange(form) {
    stuId = 0
    if(form.selecttype.value == "Student#1") {
        stuId = 1
    }
    if(form.selecttype.value == "Student#2") {
        stuId = 2
    }
    if(form.selecttype.value == "Student#3") {
        stuId = 3
    }
    if(form.selecttype.value == "Student#4") {
        stuId = 4
    }
    if(form.selecttype.value == "Student#5") {
        stuId = 5
    }
    console.log(stuId)
}

function startClass (form) {
    form.options.disabled  = true
}

function endClass (form) {
    form.options.disabled  = false
}

function checkIn (form) {
    var classId = 0;
    classId = form.id == "one" ? 1 : (form.id == "two" ? 2 : (form.id == "three" ? 3:0))
    if (form.id == "one") {

    }
    var jsonData = {
        class: classId,
        id: stuId,
        type: "", faceMask: false, faceSheild: false,
        lysol: false, handSanitizer: false, desk: false
    };

    if (form.selecttype.value == "") {
        alert("please select type");
        return
    }
    
    // check boxes select 
    if ( (form.facemaskused.checked == false && form.facemasknotused.checked == false) || 
        (form.faceshieldused.checked == false  && form.faceshieldnotused.checked == false) || 
        (form.lysolpickup.checked == false && form.lysolputdown.checked == false)|| 
        (form.hsused.checked == false && form.hsnotused.checked == false) ||
        (form.deskcleaned.checked  == false && form.desknotcleaned.checked  == false) ) {

        alert("please select all checkboxes");
        return
    }

    if (form.hsused.checked == false) {
        jsonData = {
            class: classId,
            type: form.selecttype.value, 
            id:stuId,
            handSanitizer: form.hsused.checked == false ? 0:true

        };

        handSanitizer (jsonData)
        return
    }

    if (form.facemaskused.checked == false || form.faceshieldused.checked == false) {
        jsonData = {
            class: classId,
            type: form.selecttype.value, 
            id:stuId,
            faceMask: form.facemaskused.checked == false ? 0:true,
            faceSheild: form.faceshieldused.checked == false ? 0:true
        };

        masksensor (jsonData)
        return
    }

    if (form.deskcleaned.checked == false) {
        jsonData = {
            class: classId,
            type: form.selecttype.value, 
            id:stuId,
            desk: form.deskcleaned.checked == false ? 0:true

        };

        deskSanitize (jsonData)
        return
    }

    if (form.lysolputdown.checked == false) {
        jsonData = {
            class: classId,
            type: form.selecttype.value, 
            id:stuId,
            lysol: form.lysolputdown.checked == false ? 0:true

        };

        lysolSensor (jsonData)
        return
    }

    if (form.id == "one") {
        console.log(form.id)
        jsonData = {
            class: classId,
            type: form.selecttype.value, 
            id:stuId,
            faceMask: form.facemaskused.checked == false ? 0:true,
            faceSheild: form.faceshieldused.checked == false ? 0:true,
            lysol: form.lysolpickup.checked == false ? 0:true,
            handSanitizer: form.hsused.checked == false ? 0:true,
            desk: form.deskcleaned.checked == false ? 0:true

        };
        getRequest (jsonData)
    }

    if (form.id == "two") {
        console.log(form.id)
        jsonData = {
            class: classId,
            type: form.selecttype.value, 
            id:stuId,
            faceMask: form.facemaskused.checked == false ? 0:true,
            faceSheild: form.faceshieldused.checked == false ? 0:true,
            lysol: form.lysolpickup.checked == false ? 0:true,
            handSanitizer: form.hsused.checked == false ? 0:true,
            desk: form.deskcleaned.checked == false ? 0:true
        };
        console.log(jsonData)
        getRequest (jsonData)
    }

    if (form.id == "three") {
        jsonData = {
            class: classId,
            type: form.selecttype.value,
            id:stuId,
            faceMask: form.facemaskused.checked == false ? 0:true,
            faceSheild: form.faceshieldused.checked == false ? 0:true,
            lysol: form.lysolpickup.checked == false ? 0:true,
            handSanitizer: form.hsused.checked == false ? 0:true,
            desk: form.deskcleaned.checked == false ? 0:true
        };
        getRequest (jsonData)
    }
}

function checkOut () {
    console.log("checkOut Button Click")
}

// lysol Function
function lysolSensor (myJson) {
    var apiReq = new XMLHttpRequest();
    apiReq.onreadystatechange = function () {
        if (apiReq.readyState == 4) {
            console.log(apiReq.responseText)
            var resJson = JSON.parse(apiReq.responseText);
            if (resJson.status === true) {
                my_callback(apiReq, resJson.type + " : " + resJson.msg)
            }
        }
    }
    jsonObj = JSON.stringify(myJson);
    apiReq.open("GET", "lysolsensor.php?lysolsensor=" + jsonObj, true)
    apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    apiReq.send();
}

// Hand Sanitizer Function
function handSanitizer (myJson) {
    var apiReq = new XMLHttpRequest();
    apiReq.onreadystatechange = function () {
        if (apiReq.readyState == 4) {
            console.log(apiReq.responseText)
            var resJson = JSON.parse(apiReq.responseText);
            if (resJson.status === true) {
                my_callback(apiReq, resJson.type + " : " + resJson.msg)
            }
        }
    }
    jsonObj = JSON.stringify(myJson);
    apiReq.open("GET", "hssensor.php?hssensor=" + jsonObj, true)
    apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    apiReq.send();
}

// desk Sanitize Function
function deskSanitize (myJson) {
    var apiReq = new XMLHttpRequest();
    apiReq.onreadystatechange = function () {
        if (apiReq.readyState == 4) {
            console.log(apiReq.responseText)
            var resJson = JSON.parse(apiReq.responseText);
            if (resJson.status === true) {
                my_callback(apiReq, resJson.type + "  " + resJson.msg)
            }
        }
    }
    jsonObj = JSON.stringify(myJson);
    apiReq.open("GET", "desksanitize.php?desksanitize=" + jsonObj, true)
    apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    apiReq.send();
}

// face mask Function
function masksensor (myJson) {
    var apiReq = new XMLHttpRequest();
    apiReq.onreadystatechange = function () {
        if (apiReq.readyState == 4) {
            console.log(apiReq.responseText)
            var resJson = JSON.parse(apiReq.responseText);
            if (resJson.status === true) {
                my_callback(apiReq, resJson.type + " : " + resJson.msg)
            }
        }
    }
    jsonObj = JSON.stringify(myJson);
    apiReq.open("GET", "masksensor.php?masksensor=" + jsonObj, true)
    apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    apiReq.send();
}
          
// Get Request
function getRequest (myJson) {

    var apiReq = new XMLHttpRequest();
      
      apiReq.onreadystatechange = function () {
        if (apiReq.readyState == 4) {
        
         var resJson = JSON.parse(apiReq.responseText);
         if (resJson.status === true) {
             my_callback(apiReq, resJson.msg)
         } else {
            postData(myJson)
         }
        }
      }

      jsonObj = JSON.stringify(myJson);
      apiReq.open("GET", "sdsensor.php?json=" + jsonObj, true)
      apiReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      apiReq.send();
}

// Post Request
function postData (myJson) {

    var apiReq = new XMLHttpRequest();
    
    apiReq.onreadystatechange = function () {
      if (apiReq.readyState == 4) {
        // console.log(apiReq.responseText)
        my_callback(apiReq);
      }
    }

    apiReq.open("POST", "server.php?", true);
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