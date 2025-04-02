const template = document.createElement("template");
template.innerHTML = "<div><h1>Escuela: <span id='nombreEscuela'></span></h1></div><input type='text' id='myInput'>";

class EscuelaElemento extends HTMLElement {

    constructor() {
      super();
      const shadow= this.attachShadow({ mode: "open"})

      this.textContent="Kindergarden";
      
      this.country= this.getAttribute("pais");
      console.log("Pais ", this.country);

      //this.append(template);
      //this.append(template.innerHTML);
      //this.append(template.content);

      const templateContent = template.content.cloneNode(true);
      templateContent.querySelector("#nombreEscuela").textContent= this.country;
      shadow.append(templateContent);

      this.input = shadow.querySelector("#myInput");
      this.input.addEventListener("input", this.handleInput.bind(this));

      console.log("Constructor ", this);
    }

    handleInput() {
      console.log("Tecleaste...");
      const newValue = this.input.value;
      this.setAttribute("value", this.input.value);
      this.setAttribute("pais", newValue);
    }

    static get observedAttributes(){
      return ["value"];
    }

    attributeChangedCallback(name, old, nw) {
      console.log(`Cambio ${name} de ${old} a ${nw}`); 
      if (name === "value") {

        //this.shadowRoot.querySelector("#nombreEscuela").textContent = nw;
      }
    }
    
}




customElements.define("escuela-elemento", EscuelaElemento);


