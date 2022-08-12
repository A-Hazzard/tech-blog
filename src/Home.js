//importing useState from react to allow values to be updated
import { useState} from 'react';
//function component that stores the home container information.
const Home = () => {
    const ListofNames = [
        {
            name1: 'Aaron',
            age: 19
        },
        {
            name2: 'Jonathan',
            age: 20
        }

    ]
    //reactive variables that changes the state from Aaron to something else

    //Aaron's information
    const [name_1, setName_1] = useState(ListofNames[0].name1)//name
    const [age_1, setAge_1] = useState(ListofNames[0].age);//age

    //Jonathan's information
    const [name_2, setName_2] = useState(ListofNames[1].name2) //name
    const [age_2, setAge_2] = useState(ListofNames[1].age); //age

    //handleClick function that displays the event that is fired when the user clicks on the button
    const handleClick = (name, e) => {
        console.log(`State before: NAME: ${name_1}, AGE ${age_1}`, e.target);
      
        //changes the state from Aaron to Jonathan
        setName_1(ListofNames[1].name2);
        setAge_1(ListofNames[1].age);

        console.log(`Current State: NAME: ${name_2}, AGE ${age_2}`, e.target);
    }

    //JSK(Javascript XML) code to render to DOM
    return ( 
        /*home container*/ 
        <div className="home">
           <h1>Homepage</h1>
           
<button id="button" onClick={
    (e) => handleClick('Aaron', e)}>Click Me
</button>
<p>Current State of name: { name_1 }</p>
<p>Current State of age: { age_1 }</p>
        </div>
    );
}
 
//exports Home component to be used in other files
export default Home;