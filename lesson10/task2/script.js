class option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    newDive() {
        let div = document.createElement("div");
        div.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}; text-align: ${this.textAlign}; color: white;`;
        div.textContent = '!!!!!!!!!!!!!!!!!!!!!';
        document.body.appendChild(div);   
    }
}

let div = new option("200px", "200px", "black", "13px", "center");

div.newDive();

