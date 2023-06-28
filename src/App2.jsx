import { useState } from 'react'
import './App.css'
import { puppyList } from './data.js'


function App() {

    const [puppies, setPuppies] = useState(puppyList);
    const [featPupId, setFeatPupId] = useState(null);
    const featuredPup = puppies.find((puppy) => puppy.id === featPupId);
    const [seeDetails, setSeeDetails] = useState(false)

    // Define click event function 
    const handlePuppyClick = (id) => {
        setFeatPupId(id);
        setSeeDetails(true);
    };

    const handleBackClick = () => {
        setSeeDetails(false);
    }

    //Define random color for each <p> map element
    const getRandomPastelColor = () => {
        const baseHue = Math.floor(Math.random() * 360);
        const saturation = 30;
        const lightness = 80;
        return `hsl(${baseHue}, ${saturation}%, ${lightness}%)`;
    };

    return (
        <div className='app'>

            {seeDetails ?
                <div className='pups' style={{ display: 'none' }}> </div > &&
                <div className='pup' style={{ backgroundColor: getRandomPastelColor() }}>
                    {featPupId && (
                        <div>
                            <h2>{featuredPup.name}</h2>
                            <img src={`./assets/dog${featPupId}.png`} width="300px" height="auto" />
                            <ul>
                                <li>Age: {featuredPup.age}</li>
                                <li>Email: {featuredPup.email}</li>
                            </ul>
                            <button
                                onClick={handleBackClick}> Back</button>
                        </div>)}
                </div>

                : <div className='pups'>
                    <h1> Puppy Lists</h1>
                    <img id="main-img" src="./assets/all dog.png" alt="dog" width="200px" height="auto" />
                    {
                        puppies.map((puppy) =>
                            <p
                                key={puppy.id}
                                onClick={() => handlePuppyClick(puppy.id)}
                                style={{ backgroundColor: getRandomPastelColor() }}
                            >
                                {puppy.name}</p>)
                    }
                    <footer>&copy;tanggoma</footer>
                </div >}
        </div>
    )
}

export default App
