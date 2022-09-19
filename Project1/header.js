class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <table>
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
        `
    }
  }
  
  customElements.define('header-component', Header);