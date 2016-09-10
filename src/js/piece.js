var Piece = function(){

    //private
    var typePiece = null;
    var colorPiece = null;
    var initPosition = {};
    var currentPosition = {};

    //public
    var getInitPosition = function(){
        return initPosition;
    };

    var getCurrentPosition = function(){
        return currentPosition;
    };

    return {
        getInitPosition     : getInitPosition,
        getCurrentPosition  : getCurrentPosition
    };
};