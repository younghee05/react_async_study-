import React from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';

function PostPage(props) {
    const schoolNameInput = useInput(); 
    const departmentInput = useInput(); 
    const gradeInput = useInput(); 
    const nameInput = useInput(); 
    const addressInput = useInput();
    const contactInput = useInput();
    const teacherNameInput = useInput();

    const handleSubmit = () => {
        const student = {
            schoolName : schoolNameInput.value,
            department : departmentInput.value,
            grade : gradeInput.value,
            name : nameInput.value,
            
        }
        
        // // 자바 스크립트에 내장되어져 있는 것
        // fetch("http://localhost:8080/basic/student", {
        //     method: "post",
        //     headers: {
        //         "Content-Type": "application/json"
        //     },
        //     body: JSON.stringify(student)
        // }).then(response => {
        //     response.json().then(responseData => {
        //         console.log(responseData);
        //     })
        // })

        // 자바 스프링과 연결 할때 쓰는 (위에꺼를 유용하게 쓴것)
        axios.post("http://localhost:8080/basic/student", student)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }

    const handleTeacherSubmit = () => {
        const teacher = {
            schoolName : schoolNameInput.value,
            contact: contactInput.value,
            address: addressInput.value,
            teacherName: teacherNameInput.value
        }

        axios.post("http://localhost:8080/basic/teacher", teacher)
        .then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        });
    }


    return (
        <>
            <header>
                <h1>비동기 데이터 통신(POST)</h1>
            </header>
            <main>
                <h3>학생정보</h3>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text" 
                        onChange={schoolNameInput.onChange} 
                        value={schoolNameInput.value} />
                </p>
                <p>
                    <label htmlFor="">학과명: </label>
                    <input type="text"
                        onChange={departmentInput.onChange}
                        value={departmentInput.value} />
                </p>
                <p>
                    <label htmlFor="">학년: </label>
                    <input type="text" 
                        onChange={gradeInput.onChange}
                        value={gradeInput.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text" 
                        onChange={nameInput.onChange}
                        value={nameInput.value} />
                </p>
                <button onClick={handleSubmit}>전송</button>

                <h3>선생님정보</h3>
                <p>
                    <label htmlFor="">학교명: </label>
                    <input type="text" 
                        onChange={schoolNameInput.onChange} 
                        value={schoolNameInput.value} />
                </p>
                <p>
                    <label htmlFor="">연락처: </label>
                    <input type="text"
                        onChange={contactInput.onChange}
                        value={contactInput.value} />
                </p>
                <p>
                    <label htmlFor="">주소: </label>
                    <input type="text" 
                        onChange={addressInput.onChange}
                        value={addressInput.value} />
                </p>
                <p>
                    <label htmlFor="">이름: </label>
                    <input type="text" 
                        onChange={teacherNameInput.onChange}
                        value={teacherNameInput.value} />
                </p>
                <button onClick={handleTeacherSubmit}>전송</button>
            </main>
        </>
    );
}

export default PostPage;