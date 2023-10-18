function convertDecimalToBinary() {
    const decimalInput = parseInt(document.getElementById("decimalInput").value);
    const binaryOutput = document.getElementById("binaryOutput");
    
    if (!isNaN(decimalInput)) {
        const binaryValue = decimalInput.toString(2);
        binaryOutput.textContent = "Binaire : " + binaryValue;
    } else {
        binaryOutput.textContent = "Veuillez entrer un nombre décimal valide.";
    }
}
function login() {
            
    var password = document.getElementById("passwordInput").value;

   
    if (password === "ADMIN") {
        document.getElementById("loginMessage").textContent = "Connexion réussie!";
        window.location.href = "https://lord-chalex.github.io/My-NSI-work/login2"
    } else {
        document.getElementById("loginMessage").textContent = "Échec de la connexion. Mot de passe incorrect.";
    }
}    function convertBinaryToDecimal() {
    const binaryInput = document.getElementById("binaryInput").value;
    const decimalOutput = document.getElementById("decimalOutput");
    
    const decimalValue = parseInt(binaryInput, 2);
    
    if (!isNaN(decimalValue)) {
        decimalOutput.textContent = "Décimal : " + decimalValue;
    } else {
        decimalOutput.textContent = "Veuillez entrer un nombre binaire valide.";
    }
}
