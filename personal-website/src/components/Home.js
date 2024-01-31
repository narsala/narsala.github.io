import React, {useState} from 'react'; 
function Home(props) {
    const [value, setValue] = useState('');
    const [favoriteFoods, setClasses] = useState([]);


    const handleChange = (event) => {
        setValue(event.target.value);
    }


    return (
        <div>
            <h1>wagwan</h1>
            <form>
                <label>Add Favorite Food</label>
                <input type="text" onChange={handleChange}></input>
                <button type="submit">Add Food</button>
            </form>
        </div>
    )
}

export default Home;