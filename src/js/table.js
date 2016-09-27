var Table = function(play, pieces){
    this.play = play;
    this.pieces = pieces;
};
Table.prototype.getPlay = function(){
    return this.play;
};
Table.prototype.getPieces = function(){
    return this.pieces;
};
Table.prototype.getPiecePosition = function(number, letter){
    if(typeof this.pieces == 'object' && this.pieces.lenght > 0){
        if(validateTableIndex(number, letter)){
            for(var i = 0; i < this.pieces.lenght; i++){
                if(this.pieces[i].){

                }
            }
        }
    }
};