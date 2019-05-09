window.addEventListener("DOMContentLoaded", () => {
    function mask(e) {
        let matrix = this.defaultValue,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
            def.length >= val.length && (val = def);
            matrix = matrix.replace(/[_\d]/g, (a) => {
                return val.charAt(i++) || "_";
            });
        this.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf("_");
    }
    
        let input = document.querySelector("input");
        input.addEventListener("input", mask, false);
    });