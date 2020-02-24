import React, {Component} from 'react';
import './App.css';
import Radium  from 'radium';
import Person from './Person/Person';

class App extends Component{
	state={
		persons: [
			{id:"ddjs1",name:"Ran Bahadur kc",age:23},
			{id:"ddjs2",name:"Khatri",age:22},
			{id:"ddjs3",name:"Opendra",age:24},
		],
		otherState:"sothing value",
		showPerson:false
	}
	switchNameHandler = (propsName)=>{
		console.log('was.Clicked');
		this.setState({
			persons: [
				{name:propsName,age:23},
				{name:"Changed Khatri",age:22},
				{name:"Changed Opendra",age:24},
			]
		})
	}

	nameChangedHandler = (event,id) => {
		const personIndex = this.state.persons.findIndex(p=>{
			return p.id===id;
		});
		const person = {
			...this.state.persons[personIndex]
		};
		//const person = Object.assign({}, this.state.persons[personIndex]) 
		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;
		this.setState({persons:persons});
		
	}
	deletePersonHandler= (personIndex)=>{
		const  persons=this.state.persons;
		persons.splice(personIndex,1);
		this.setState({persons: persons})
	}

	togglerPersonHandler = ()=>{
		const doesShow=this.state.showPerson;
		this.setState({showPerson: !doesShow});
	}

		

	render() {
		const style = {
			backgroundColor: "green",
			font: 'inherit',
			border: '1px solid blue',
			padding: '20px',
			cursor: 'pointer',
			color:	'white',
			':hover':{
				backgroundColor: 'yellow',
				color:	'black'
			}

		};
		let persons=null;
		if(this.state.showPerson){
			persons=(
				<div>
					{this.state.persons.map((person,index) =>{
						return <Person 
						click={()=>this.deletePersonHandler(index)}
						name={person.name} 
						age={person.age} 
						key={person.id}
						changed={(event) => this.nameChangedHandler(event,person.id)}
						/>
					})}
					
				</div>
			);
			style.backgroundColor=	'red';
			style[':hover']= {
				backgroundColor: 'yellow',
				color: 'black'
			}
		}
		return (
			<div className="App">
				<h1>Hello React App i am RN</h1>
				<button style={style} onClick={this.togglerPersonHandler}>Switch Name</button>
				{persons}	
			</div>
		);
	}
}

export default Radium(App);
