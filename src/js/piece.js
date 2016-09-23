var Piece = function(typePiece,colorPiece, initPosition){
    //private
    this.typePiece = typePiece;
    this.colorPiece = colorPiece;
    this.initPosition = initPosition;
    this.currentPosition = initPosition;
};

Piece.prototype.getTypePiece = function(){
    return this.typePiece;
};
Piece.prototype.getColorPiece = function(){
    return this.colorPiece;
};
Piece.prototype.getCurrentPosition = function(){
    return this.currentPosition;
};
Piece.prototype.getTipeMoves = function(){
    return MOVES_PIECES[this.typePiece];
};
Piece.prototype.reset = function(){
    this.currentPosition = this.initPosition;
};

