window.addEventListener('load', () => {
    console.log('page is fully loaded');

    // INITIALIZE GAMEBOARD
    let gameBoard = document.getElementById('board');
    let gameBoardTiles = document.querySelectorAll('#board .tile');
    console.log('Game Board', gameBoardTiles);
    
    // GET DIRECTIONAL OPTIONS
    let normal = document.getElementById('default');
    let reversed = document.getElementById('reversed');

    // TEST! TEST! TEST!
    console.log('Normal', gameBoardTiles.length);
    
    // LISTEN FOR COLOR BUTTON CLICKS
    // NORMAL
    normal.addEventListener('click', () => {
        gameBoardTiles.forEach(tile => {
            tile.style.backgroundColor = '#232621';
        });
        gameBoard.style.backgroundColor = '#B93848';
    });
    // REVERSED
    reversed.addEventListener('click', () => {
        gameBoardTiles.forEach(tile => {
            tile.style.backgroundColor = '#B93848';
        });
        gameBoard.style.backgroundColor = '#232621';
    });
})