var Player = function(){

    //private
    var name = "";
    var lastName = "";
    var nick = "";
    var age = 0;
    var lastMove = null;
    var numberMove = 0;

    //public
    var getFullName = function(){
        return name + " " + lastName;
    };
    return {
        getFullName : getFullName,
    };
};