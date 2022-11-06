window.addEventListener("load", () => {
    console.log("page is fully loaded");
    // GET PIECE IDS
    let board = document.getElementById("board");
    let tiles = document.querySelectorAll(".tile");

    // GET PIECE COLOR BUTTONS
    let redBlack = document.getElementById("redBlack");
    let whiteBlack = document.getElementById("whiteBlack");
    let greenBlue = document.getElementById("greenBlue");

    // LISTEN FOR COLOR BUTTON CLICKS
    // RED BLACK
    redBlack.addEventListener("click", () => {
        board.style.backgroundColor = "#B93848";
        tiles.forEach((tile) => {
            tile.style.backgroundColor = "#B93848";
        });
    });
    // WHITE-BLACK
    whiteBlack.addEventListener("click", () => {
        board.style.backgroundColor = "white";
        tiles.forEach((tile) => {
            tile.style.backgroundColor = "black";
        });
    });
    // GREEN-BLUE
    greenBlue.addEventListener("click", () => {
        board.style.backgroundColor = "green";
        tiles.forEach(tile => {
            tile.style.backgroundColor = "blue";
        });
    });
});
