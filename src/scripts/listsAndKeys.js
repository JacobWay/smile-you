import React, {Component} from "react";
import {render} from "react-dom";
import uniqueId from "lodash/uniqueId";

const nums = [1, 2, 3];
function NumberList(props){
    const nums = props.nums;
    const listItems = nums.map( (num, i)=>{
        return <li key={uniqueId()}>{num*2}</li>
    });
    const item = <ul>{listItems}</ul>;

    return item;
}

const blogs = [
    {"id":1, "title": "New Year", "content": "You'll never say a new year is not coming"},
    {"id":2, "title": "Lear Something", "content": "Learn by thinking, doing, and repeating"},
    {"id":3, "title": "Finish React Doc", "content": "It's tricky to read through the whold doc"},
];
function Blog(props){
    const sideBar = (
        <ul>
            {props.blogs.map( (blog, i) => {
                return (
                <li key={blog.id}>
                    {blog.title}
                </li>
                );
            })}
        </ul>
    );

    const contentArea = (
        props.blogs.map( (blog, i) => {
            return(
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                </div>
            );
        })
    );

    return (
        <div>
            {sideBar}
            <hr />
            {contentArea}
        </div>
    );
}

var mountNode = document.getElementById("app");
render(<Blog blogs={blogs} />, mountNode);
