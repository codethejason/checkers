window.addEventListener('load', () => {
    console.log('page is fully loaded');
    // GET PIECE IDS && COMBINE ALL PIECES INTO ONE ARRAY
    let allPieces = document.querySelectorAll('.player1pieces .piece, .player2pieces .piece');
    console.log(allPieces);

    // GET PIECE COLOR BUTTONS
    let circle = document.getElementById('circle');
    let square = document.getElementById('square');

    // LISTEN FOR COLOR BUTTON CLICKS
    // CIRCLE
    circle.addEventListener('click', () => {
        allPieces.forEach(piece => {
            piece.style.borderRadius = '6vmin';
        });
    });
    // SQUARE
    square.addEventListener('click', () => {
        allPieces.forEach(piece => {
            piece.style.borderRadius = '0px';
        });
    });
})