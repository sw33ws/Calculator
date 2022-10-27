let output = document.getElementById("output");

let buttons = Array.from(document.getElementsByClassName("calculator-item"));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                output.innerText = '';
                break;
            case '=':
                try {
                    output.innerText = eval(output.innerText.replace(/[^-+/*\d]/g, ''));
                    // The replace stops it from accepting text, and harmful javascript code!
                } catch {
                    output.innerText = "error"
                }
                break;
            case '←':
                if (output.innerText){
                    output.innerText = output.innerText.slice(0, -1);
                }
                break;
            default:
                output.innerText += e.target.innerText;
        }
    });
});

function lightmodeToggle() {
    var lightmode = document.body;
    lightmode.classList.toggle("lightmode");
}