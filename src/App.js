
import './App.css';
import { useState } from 'react';

function App() {
  // const [toggle,setToggle] = useState(false);
  const [formData,setFormData] = useState(
    {
      Name:'',
      Department : '',
      Rating : '',
      myEmployees : []
    }
  )
  function submitChange(e){

//     let empObj = {
//       Name: formData.Name,
//       Department : formData.Department,
//       Rating : formData.Rating
//     }
//     const arr = formData.myEmployees;
//     arr.push(empObj);
//     setFormData({myEmployees: arr})//setting the arr value to the myEmpoyees
// // setFormData({Name:'',Department:'',Rating:''}

//     console.log(formData)

e.preventDefault();
    setFormData((prevFormData) => {
        const empObj = {
            Name: prevFormData.Name,
            Department: prevFormData.Department,
            Rating: prevFormData.Rating,
        };
        return {
            myEmployees: [...prevFormData.myEmployees, empObj],
            Name: '',
            Department: '',
            Rating: '',
        };
    });
  }
  
  function changeValue(e){
   
     e.preventDefault();
  
          // const newFormData = { ...formData,[e.target.name] : e.target.value };
          const newFormData = {...formData};
      
          newFormData[e.target.name] = e.target.value;
          setFormData(newFormData);

        

    // this.setState({[e.target.name] : e.target.value})
// console.log(e)
// setFormData( (e) => ( {[e.target.name]:e.target.value}))
console.log(formData)
  }
   
  return (
    <>
    <div className="App">
      <h1 >EMPLOYEE FEEDBACK FORM</h1>
      <form className='form'>
      <label>Name : </label>
      <input type='text' name='Name' value={formData.Name} onChange={changeValue}></input> <br/>
      <label>Department : </label>
      <input type='text' name='Department' value={formData.Department} onChange={changeValue}></input> <br/>
      <label>Rating : </label>
      <input type='text' name='Rating' value={formData.Rating} onChange={changeValue}></input> <br/>
      <button id='button' type='button' onClick={submitChange}>Submit</button>
      {/* <input type='submit' value='Submit' /> */}
      </form>
      <div className='list'>
{formData.myEmployees.map((value,index)=> {

  return (

      <div key={index} className='wholeDiv' >
    
     
       Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating}




    </div> 
    
  )
})}
      </div>
    </div>
    </>
  );
}

export default App;
