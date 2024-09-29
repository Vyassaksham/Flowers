function showConfirmation() {
    var response = confirm("Are you sure to continue? The file may contain malware and\nleak your cute photos to him.");
    
    if (response) {
        alert("You pressed OK.\nNow he can access your gallery.");
        // Optionally, redirect to flower.html here if needed:
         window.location.href = "flowers.html";
    } else {
        alert("You pressed Cancel.\nBYE");
       
        showConfirmation();
    }
}
