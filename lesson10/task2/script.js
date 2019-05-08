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
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.style.color = "white";
        div.textContent = '!!!!!!!!!!!!!!!!!!!!!';
        document.body.appendChild(div);
        
        
    }
}

let div = new option("200px", "200px", "black", "13px", "center");

div.newDive();

