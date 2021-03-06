import React, {Component} from "react";
import _ from "lodash";
import axios from "axios";
import {Link} from "react-router";


class SideBar extends Component{
    constructor(props){
        super(props);
    }

    collapseMenu = (e) => {
        $(".sideMenu").on("click", "li", function(e){
            e.preventDefault();
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

    componentDidMount = () => {
        this.collapseMenu();
    }

    render(){
        console.log("in rendering of c/SideBar.js...");
        console.log("in rendering of c/SideBar.js of props...", this.props);
        const {menuList} = this.props;
        let element = (
            <ul class="nav nav-pills nav-stacked sideMenu">
                {menuList.map( (menu) => {
                    return(
                        <li role="presentation" class="collapse" key={_.uniqueId("menu_")}>
                            <Link href="#">{menu.name}<span class="fa fa-angle-right angle_"></span></Link>
                            <ul class="nav nav-pills nav-stacked sideSubMenu">
                                {menu.subMenu.map( (item) => {
                                    return(
                                        <li role="presentation" key={_.uniqueId("subMenu_")}>
                                            <a href={item.uri_en}>{item.uri_cn}</a>
                                        </li>
                                    )
                                } )}
                            </ul>
                        </li>
                    )
                } )}
            </ul>
        );
        return(
            element
        );
    }
}

export {SideBar};
