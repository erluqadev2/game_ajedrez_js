var showError = function(error){
    alert(error);
};

var validateTableIndex = function(number, letter){
    if(ARRAY_NUMBERS_ROWS.indexOf(number) == -1){
        showError("'" + number + "' index out of bounds in the table");
    }
    if(ARRAY_LETTERS_COLUMNS.indexOf(letter) == -1){
        showError("'" + letter + "' index out of bounds in the table");
    }
};