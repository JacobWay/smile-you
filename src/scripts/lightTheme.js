require("../scss/lightTheme.scss");

{

$(".sideMenu").on("click", "li", function(e){
    console.log("clicking... ", e);
    // click only works on the right li element
    // but add color class of the activated submenu
    var currentTarget = $(e.currentTarget);
    var ctClass = $(currentTarget).attr("class");
    if(!ctClass || (ctClass && ctClass.indexOf("collapse") === -1)){
        $(".sideMenu").find(".activated").removeClass("activated");
        $(currentTarget).addClass("activated");
        e.stopPropagation();
        return;
    }

    // display or hide sub menu
    var sideSubMenu = $(currentTarget).find(".sideSubMenu");
    var display = $(sideSubMenu).css("display");
    display = display === "block" ? "none" : "block";

    var addOpenClose = display === "block" ? "opened" : "closed";
    var removeOpenClose = display === "block" ? "closed" : "opened";
    $(currentTarget).addClass(addOpenClose).removeClass(removeOpenClose);

    $(sideSubMenu).css({display: display});

    // change angle direction
    var faElement = $(currentTarget).find(".fa");
    var faClass = display === "block" ? "fa fa-angle-down angle_" : "fa fa-angle-right angle_";
    $(faElement).removeClass();
    $(faElement).addClass(faClass);

    // switch class of active
    var delegateTarget = $(e.delegateTarget);
    $(delegateTarget).find(".active").removeClass("active");
    $(currentTarget).addClass("active");
    

});

}
