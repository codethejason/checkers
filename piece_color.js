window.addEventListener('load', () => {
    console.log('page is fully loaded');
    // GET PIECE IDS
    let player1pieces = document.querySelectorAll('.player1pieces .piece');
    let player2pieces = document.querySelectorAll('.player2pieces .piece');

    console.log('player1pieces', player1pieces)

    // GET PIECE COLOR BUTTONS
    let redBlue = document.getElementById('circle_redblue');
    let whiteBrown = document.getElementById('circle_whitebrown');
    let greenPink = document.getElementById('circle_greenpink');

    // LISTEN FOR COLOR BUTTON CLICKS
    // RED BLUE
    redBlue.addEventListener('click', () => {
        player1pieces.forEach(piece => {
            piece.style.backgroundColor = '#e4a6ae';
            piece.style.border = '1vmin solid #B93848';
        });
        player2pieces.forEach(piece => {
            piece.style.backgroundColor = '#F1F1FF';
            piece.style.border = '1vmin solid #8b8bff';
        });
    });
    // WHITE-BROWN
    whiteBrown.addEventListener('click', () => {
        player1pieces.forEach(piece => {
            piece.style.backgroundColor = '#fff';
            piece.style.border = '1vmin solid #ccc';
        });
        player2pieces.forEach(piece => {
            piece.style.backgroundColor = '#eb4b4b';
            piece.style.border = '1vmin solid #630909';
        });
    });
    // GREEN-PINK
    greenPink.addEventListener('click', () => {
        player1pieces.forEach(piece => {
            piece.style.backgroundColor = '#b8e4a6';
            piece.style.border = '1vmin solid #2b9e14';
        });
        player2pieces.forEach(piece => {
            piece.style.backgroundColor = '#f481ff';
            piece.style.border = '1vmin solid #c716c7';
        });
    });
})