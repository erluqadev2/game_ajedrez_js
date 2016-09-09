var player = function(){

    //private
    var name = "";
    var lastName = "";
    var nick = "";
    var age = 0;
    var lastMove = null;

    //public
    var getFullName = function(){
        return name + " " + lastName;
    };
    return {
        getFullName : getFullName,
    };
};