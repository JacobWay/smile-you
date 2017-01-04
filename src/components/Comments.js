import React, {Component} from "react";
import {render} from "react-dom";

class Comment extends Component{
    constructor(props){
        super(props);

        this.state = {
            text: 'There is a comment. The world is chaoic, but you need balance it.',
            author: {
                avantarUrl: '#',
                name: 'Jacob Way'
            }
        }
    }

    render(){
        return(
            <div>
                <UserInfo user={this.state.author}/>
                <CommentText text={this.state.text}/>
                <CommentDate />
            </div>
        );
    }
}

class UserInfo extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div class="userInfo">
                <Avatar 
                    user={this.props.user}
                />
                <div class="userName">
                    {this.props.user.name}
                </div>
            </div>
        );
    }
}

class Avatar extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <img 
                class="avantar"
                src={this.props.user.avantarUrl}
                alt={this.props.user.name}
            />
        );
    }
}

class CommentText extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <p>
                {this.props.text}
            </p>
        );
    }
}

class CommentDate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                Publish Date: <span><FormatDate /></span>
            </div>
        );
    }
}

class FormatDate extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                {new Date().toLocaleTimeString()}
            </div>
        );
    }
}

export {Comment};
