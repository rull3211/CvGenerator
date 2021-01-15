import React from 'react';

const LinkComp = (props) =>{
      return <a id = {props.id} href = {props.link} >{props.text}</a>
}
export default LinkComp;