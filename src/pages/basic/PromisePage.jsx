import React from 'react';

function PromisePage(props) {

    // const testPromise = () => {
    //     // const loop = (name) => {
    //     //     // 랜덤 : random 0 < 1 0.123234455 
    //     //     const random = Math.floor(Math.random() * 100) + 1; // 100번 반복  
    //     //     for(let i = 0; i < random; i++) {
    //     //         console.log(`${name}: ${i}`);
    //     //     }
    //     // }

    //     return new Promise((resolve, reject) => {
    //         // loop("test1");
    //         resolve("test1반복 완료");
    //     });
    // }


    const loop = (name) => {
        // 랜덤 : random 0 < 1 0.123234455 
        const random = Math.floor(Math.random() * 100) + 1; // 100번 반복  
        for(let i = 0; i < random; i++) {
            console.log(`${name}: ${i}`);
        }
    }

    const testPromise = async () => {
        const response = {
            statusL: 200,
            data: ""
        }
        loop("test1");
        return response;
    }

    const testPromise2 = () => {
        return new Promise((resolve, reject) => {
            // loop("test2");
            resolve("test2반복 완료");
        });
    }

    const testPromise3 = () => {
        return new Promise((resolve, reject) => {
            loop("test3");
            resolve("test3반복 완료");
        });
    }

    const testPromise4 = (num) => {
        return new Promise((resolve, reject) => {
            console.log("test4");
            if(num === 0) {
                reject("test4오류!!!");
                return;
            }
            resolve("test4성공!!!");
        });
    }

    // 위에꺼랑 같은 코드임
    const testPromise5 = async(num) => {
        console.log("test5");
        if(num === 0) {
            throw new Error("test5오류!!!"); // reject 처럼 약속이 아님 바로 즉시 예외를 터뜨림 
        }
        return "test5성공!!!";
    }

    // 순서대로(번갈아서) 반복완료를 띄우겠다 
    const handleClick1 = () => {
        testPromise().then(r => { // 반복
            console.log(r); // 완료
            testPromise3().then(r => { // 반복
                console.log(r); // 완료
                testPromise2().then(r => { // 반복
                    console.log(r); // 완료
                });
            });
        });
    }

    const handleClick3 = () => {
        testPromise4(0)
        .then(r => {
            console.log(r);
        })
        .catch(e => {
            console.error(e);
        });

        testPromise5(0)
        .then(r => {
            console.log(r);
        })
        .catch(e => {
            console.error(e);
        });
    }

    const handleClick4 = async () => {
        // 순서대로 작동이 된다 (참&거짓)
        try {
            const r = await testPromise4(1);
            console.log(r);
        }catch(e) {
            console.error(e);
        }

        try {
            const r = await testPromise5(1);
            console.log(r);
        }catch(e) {
            console.error(e);
        }

    }

    // async 안에서만 await을 쓸 수 있다 
    const handleClick2 = async() => {
        const r = await testPromise();
        console.log(r);
        const r2 = await testPromise2();
        console.log(r2);
        const r3 = await testPromise3();
        console.log(r3);
    }

    

    return (
        <div>
            <button onClick={handleClick1}>버튼1</button>
            <button onClick={handleClick2}>버튼2</button>
            <button onClick={handleClick3}>버튼3</button>
            <button onClick={handleClick4}>버튼4</button>
        </div>
    );
}

export default PromisePage;