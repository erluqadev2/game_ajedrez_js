var TYPES_PIECES = {
    PEON    : 'PEON',
    ALFIL   : 'ALFIL',
    CABALLO : 'CABALLO',
    TORRE   : 'TORRE',
    REY     : 'REY',
    REINA   : 'REINA'
}
var COLOR_PIECES = {
    WHITE : 'WHITE',
    BLACK : 'BLACK'
};
var MOVES = {
    TOP             : 'TOP',
    TOP_RIGHT       : 'TOP_RIGHT',
    RIGHT           : 'RIGHT',
    RIGHT_BOTTOM    : 'RIGHT_BOTTOM',
    BOTTOM          : 'BOTTOM',
    BOTTOM_LEFT     : 'BOTTOM_LEFT',
    LEFT            : 'LEFT',
    LEFT_TOP        : 'LEFT_TOP'
};
var NUMBER_PLAYERS = 2;
var NUMBER_PIECES_PER_PLAYER = 16;
var NUMBER_ROWS = 8;
var NUMBER_COLUMS = 8;
var ARRAY_NUMBERS_ROWS = [1,2,3,4,5,6,7,8];
var ARRAY_LETTERS_COLUMNS = ['A','B','C','D','E','F','G','H'];

var MOVES_PIECES = {
    TYPES_PIECES.PEON : [
                            [{MOVE : MOVES.TOP, FACTOR : 1}],
                            [{MOVE : MOVES.TOP, FACTOR : 2}],
                            [{MOVE : MOVES.TOP_RIGHT, FACTOR : 1}],
                            [{MOVE : MOVES.LEFT_TOP, FACTOR : 1}]
                        ],
    TYPES_PIECES.ALFIL : [
                            [{MOVE : MOVES.TOP_RIGHT, FACTOR : *}],
                            [{MOVE : MOVES.RIGHT_BOTTOM, FACTOR : *}],
                            [{MOVE : MOVES.BOTTOM_LEFT, FACTOR : *}],
                            [{MOVE : MOVES.LEFT_TOP, FACTOR : *}]
                        ],
    TYPES_PIECES.CABALLO : [
                            [{MOVE : MOVES.TOP, FACTOR : 3}, {MOVE : MOVES.RIGHT, FACTOR : 2}],
                            [{MOVE : MOVES.RIGHT, FACTOR : 3}, {MOVE : MOVES.TOP, FACTOR : 2}],
                            [{MOVE : MOVES.RIGHT, FACTOR : 3}, {MOVE : MOVES.BOTTOM, FACTOR : 2}],
                            [{MOVE : MOVES.BOTTOM, FACTOR : 3}, {MOVE : MOVES.RIGHT, FACTOR : 2}],
                            [{MOVE : MOVES.BOTTOM, FACTOR : 3}, {MOVE : MOVES.LEFT, FACTOR : 2}],
                            [{MOVE : MOVES.LEFT, FACTOR : 3}, {MOVE : MOVES.BOTTOM, FACTOR : 2}],
                            [{MOVE : MOVES.LEFT, FACTOR : 3}, {MOVE : MOVES.TOP, FACTOR : 2}],
                            [{MOVE : MOVES.TOP, FACTOR : 3}, {MOVE : MOVES.LEFT, FACTOR : 2}]
                        ],
    TYPES_PIECES.TORRE : [
                            [{MOVE : MOVES.TOP, FACTOR : *}],
                            [{MOVE : MOVES.RIGHT, FACTOR : *}],
                            [{MOVE : MOVES.BOTTOM, FACTOR : *}],
                            [{MOVE : MOVES.LEFT, FACTOR : *}],
                        ],
    TYPES_PIECES.REY : [
                            [{MOVE : MOVES.TOP, FACTOR : 1}],
                            [{MOVE : MOVES.TOP_RIGHT, FACTOR : 1}],
                            [{MOVE : MOVES.RIGHT, FACTOR : 1}],
                            [{MOVE : MOVES.RIGHT_BOTTOM, FACTOR : 1}],
                            [{MOVE : MOVES.BOTTOM, FACTOR : 1}],
                            [{MOVE : MOVES.BOTTOM_LEFT, FACTOR : 1}],
                            [{MOVE : MOVES.LEFT, FACTOR : 1}],
                            [{MOVE : MOVES.LEFT_TOP, FACTOR : 1}]
                        ],
    TYPES_PIECES.REINA : [
                            [{MOVE : MOVES.TOP, FACTOR : *}],
                            [{MOVE : MOVES.TOP_RIGHT, FACTOR : *}],
                            [{MOVE : MOVES.RIGHT, FACTOR : *}],
                            [{MOVE : MOVES.RIGHT_BOTTOM, FACTOR : *}],
                            [{MOVE : MOVES.BOTTOM, FACTOR : *}],
                            [{MOVE : MOVES.BOTTOM_LEFT, FACTOR : *}],
                            [{MOVE : MOVES.LEFT, FACTOR : *}],
                            [{MOVE : MOVES.LEFT_TOP, FACTOR : *}]
                        ]
};
