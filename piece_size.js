window.addEventListener('load', () => {
    console.log('page is fully loaded');
    // GET PIECE IDS && COMBINE ALL PIECES INTO ONE ARRAY
    let allPieces = document.querySelectorAll('.player1pieces .piece, .player2pieces .piece');
    console.log(allPieces);

    // GET PIECE COLOR BUTTONS
    let quarter = document.getElementById('quarter');
    let half = document.getElementById('half');
    let normal = document.getElementById('normal');

    // LISTEN FOR COLOR BUTTON CLICKS
    // QUARTER
    quarter.addEventListener('click', () => {
        allPieces.forEach(piece => {
            piece.style.width = '2vmin';
            piece.style.height = '2vmin';
        });
    });
    // HALF
    half.addEventListener('click', () => {
        allPieces.forEach(piece => {
            piece.style.width = '4vmin';
            piece.style.height = '4vmin';
        });
    });
    // NORMAL
    normal.addEventListener('click', () => {
        allPieces.forEach(piece => {
            piece.style.width = '8vmin';
            piece.style.height = '8vmin';
        });
    });
})