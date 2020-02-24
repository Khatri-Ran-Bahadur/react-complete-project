import React from 'react';
import styled from 'styled-components'

const person= (props)=>{
	return(
		<div>
		<p onClick={props.click}>I am {props.name} and i am {props.age} years old</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed}/>
		</div>
		)
}

export default person;