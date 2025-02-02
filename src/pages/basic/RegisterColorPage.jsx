import axios from 'axios';
import React, { useState } from 'react';

function RegisterColorPage(props) {
    const [ color, setColor ] = useState({
        colorName: ""
    });

    const handleColorInputChange = (e) => {
        setColor (color => {
            return {
                ...color,
                [e.target.name]: e.target.value
            }
        });
    }

    const handleColorSubmitClick = async () => {
        try {
            const repons = await axios.post("http://localhost:8080/api/v1/color", color);
        } catch(error) {
            console.log(error);
        }

        setColor (color => {
            return {
                colorName: ""
            }
        });

        
    }


    return (
        <div>
            <h1>색상 등록 페이지</h1>
            <p>
                <label htmlFor="">색상이름</label>
                <input type="text" 
                    name="colorName"
                    onChange={handleColorInputChange}
                    value={color.colorName}/>
            </p>
            <p>
                <button onClick={handleColorSubmitClick}>등록</button>
            </p>
            

        </div>
    );
}

export default RegisterColorPage;