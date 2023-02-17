import React from "react";
const LoginCount = () => {
    const initialCount1 = () => Number(window.localStorage.getItem(`count1`));
    const initialCount2 = () => Number(window.localStorage.getItem(`count2`));
    const initialCount3 = () => Number(window.localStorage.getItem(`count3`));
    const [count1, setCount1] = React.useState(initialCount1);
    const [count2, setCount2] = React.useState(initialCount2);
    const [count3, setCount3] = React.useState(initialCount3);
    const [token, setToken] = React.useState();
    

    React.useEffect(()=>{
        setToken(localStorage.getItem("token"));
    },[])

    return (
        <>
            {token === 'abc123' ? 
                <span class="_login__count">Ben: {count1}</span> 
                : 
                token === 'abc456' ? <span class="_login__count">Akash: {count2}</span>
                :
                <span class="_login__count">Jas: {count3}</span>
            }
        </>
    );
}
 
export default LoginCount;