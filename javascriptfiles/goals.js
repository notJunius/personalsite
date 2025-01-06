function hideMe() {
    let content = document.getElementById("content");
    viewerName();
}

function viewerName() {

    const password = prompt("Who are you?");
    if (password === "Dutcher") {
        content.style.display = "flex";
    } else {
        alert("Permission Denied. Classified Info.")
    }
}