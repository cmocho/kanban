import React, {useState} from 'react';

import './ui/bootstrap.css'
import './App.css';
import Statuses from './ui/statuses'
import StatusBar from './ui/statusBar'
//import {CSSTransition} from 'react-transition-group'
import firebase from "firebase/app" 


var arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
var arr2 = [];
var inRevisonArr = [1];


function App() {
  return (
    <Kanban />
  );
}



function Kanban() {
	const [arr1State, setArr1] = useState(arr1); 
	const [arr2State, setArr2] = useState(arr2); 
	const [inRevisonArrState, setInRevisionArr] = useState(inRevisonArr); 
	const [searchField, setSearch] = useState("")
	const [searchTags, setSearchTags] = useState([])
	const [tags, setTags] = useState([])
	const [mouseDown, setMouseDown] = useState(false)

const setSearchWords= (item) => {
	//console.log(item)
	setSearch(item)
}


const addItem = (item) => {
    
 setArr2(arr2State.push(item).toString(10).replace(/\D/g, '0').split(''));
 const index = arr1.indexOf(item);

if (index > -1) {
	// removes array item from dragged location.
  	 arr1.splice(index, 1);
  	setArr1([...arr1])
	}
		

// array = [2, 9]
console.log(arr2State); 
  };

  const setTagsArray = (tag) =>{
  	setSearchTags([...searchTags, {id : searchTags.length, value: tag}])
  	console.log(tag)
  	setTags(tag)
  }

  const mouseDownHandler = () =>{
  	setMouseDown(true)
  }
  const mouseUpHandler = () =>{
  	setMouseDown(false)
  }


	return(<div
		onMouseDown = {mouseDownHandler}
		onMouseUp = {mouseUpHandler}
	 className="App container">
    <StatusBar setTags = {setTagsArray} setSearchWords={setSearchWords} />
	    <div className='flexbox' >
		   	<Statuses mouseDownState = {mouseDown} searchTags = {tags} searchWords = {searchField} color = "#D8D8D8;" title = "Requested" arr = {arr1State} />
		   	<Statuses mouseDownState = {mouseDown} searchTags = {tags} searchWords = {searchField} color = "#FFCCD3;" title = "Edit Requested"  arr = {arr2State} updateArray={addItem} />
		   	<Statuses mouseDownState = {mouseDown} searchTags = {tags} searchWords = {searchField} color = "#FBEDCE;" title = "In Revision"  arr = {inRevisonArrState} updateArray={addItem} />
	    </div>
    </div>)
}



export default App;
//