import React, {Component} from "react";
import {render} from "react-dom";
import {BoxList} from "../components/BoxList.js";
require("../scss/base.scss");
require("../scss/frontDesk.scss");

let mountNode = document.getElementById("ktvBox");
render(<BoxList />, mountNode);

