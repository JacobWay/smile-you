import React, {Component} from 'react';

function Breadcrumbs(props){
    const {breadcrumbs} = props;
    let element;
    const length = breadcrumbs.length;
    const lists = breadcrumbs.map( (crumb, i) => {
        if (length === i + 1){
            element = <li key={crumb.name+i} class="active">{crumb.name}</li>
        }else{
            element = <li key={crumb.name+i}><a href={crumb.uri}>{crumb.name}</a></li>
        }
        return element;
    } )
    return(
        <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-map" aria-hidden="true"></i></a></li>
            {lists}
        </ol>
    );
}

export {Breadcrumbs};
