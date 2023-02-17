import React from "react";
const LoginDashboard = () => {
    const [userEmail, setUserEmail] = React.useState();
    const [userPassword, setUserPassword] = React.useState();
    const [userToken, setUserToken] = React.useState(localStorage.getItem('token'));
    const initialCount1 = () => Number(window.localStorage.getItem(`count1`));
    const initialCount2 = () => Number(window.localStorage.getItem(`count2`));
    const initialCount3 = () => Number(window.localStorage.getItem(`count3`));
    const [count1, setCount1] = React.useState(initialCount1);
    const [count2, setCount2] = React.useState(initialCount2);
    const [count3, setCount3] = React.useState(initialCount3);
    const increment1 = () => setCount1(count1 + 1);
    const increment2 = () => setCount2(count2 + 1);
    const increment3 = () => setCount3(count3 + 1);

    const inputRef = React.useRef();
 
    React.useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    const users = [
        {
            id: 1,
            username: 'user1@email.com',
            password: 'password1',
            token: 'abc123',
            count: count1
        },
        {   id: 2,
            username: 'user2@email.com',
            password: 'password2',
            token: 'def456',
            count: count2
        },
        {
            id: 3,
            username: 'user3@email.com',
            password: 'password3',
            token: 'ghi789',
            count: count3
        }
    ];

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setUserEmail(userEmail);
            setUserPassword(userPassword);
            const Password = document.getElementsByClassName("password-input")
            users.find(user=>user.username === `${userEmail}`)?.username !== undefined ? Password[0].classList.add("active") : console.log(false)
            users.find(user=>user.username === `${userEmail}`)?.username === undefined ? Password[0].classList.remove("active") : console.log(false)
            const Active = document.getElementsByClassName("active")
            const ActiveClass = document.getElementsByClassName("activeClass")
            const AccessDenied = document.getElementsByClassName("Error")
            const AccessDeniedUser = document.getElementsByClassName("UserError")
            if(ActiveClass) {
                AccessDenied[0].classList.remove("activeClass")
            }

            userPassword ? 
                users.find(user=>user.username === `${userEmail}`)?.password !== undefined ? 
                    users.find(user=>user.username === `${userEmail}`)?.password === userPassword 
                    ?  click()
                    :  AccessDenied[0].classList.add("activeClass")
                : console.log('false01') 
            : console.log("false03");

            userEmail ? 
            users.find(user=>user.username === `${userEmail}`)?.username !== undefined ? 
            AccessDeniedUser[0].classList.remove("activeClass") 
            :  
            AccessDeniedUser[0].classList.add("activeClass")
            :
            AccessDeniedUser[0].classList.add("activeClass")
        }
      };

      function click() {
        if (users.find(user=>user.username === `${userEmail}`)?.password === users[0].password){
            localStorage.setItem("token", users.find(user=>user.username === `${userEmail}`)?.token);
            window.location.href="/dashboard";
            increment1();
        }
        else if (users.find(user=>user.username === `${userEmail}`)?.password === users[1].password) {
            localStorage.setItem("token", users.find(user=>user.username === `${userEmail}`)?.token);
            window.location.href="/dashboard";
            increment2();
        }
        else if (users.find(user=>user.username === `${userEmail}`)?.password === users[2].password) {
            localStorage.setItem("token", users.find(user=>user.username === `${userEmail}`)?.token);
            window.location.href="/dashboard";
            increment3();
        }
      }

        const LENGTH = 10;
        const clamp = (min, max, val) => Math.max(min, Math.min(val, max));
        const [data] = React.useState([...Array(LENGTH).keys()]);

        const inputRefs = React.useRef([]);

        const handleKeyPress = (index) => () => {
            const nextIndex = clamp(0, data.length - 1, index + 1);
            inputRefs.current[nextIndex].focus();
        };

      React.useEffect(() => {
        window.localStorage.setItem('count1', count1);
        window.localStorage.setItem('count2', count2);
        window.localStorage.setItem('count3', count3);
      }, [count1, count2, count3]);
      
    return (
        <> 
            { userToken ?
                window.location.href="/dashboard" 
                :
                <div className="_login">
                    <div className="console">
                        <div className="toolbar">
                            <div className="pips" />
                        </div>
                        <samp className="console_output">
                            <span>Welcome back. To proceed please log in to your account</span>
                        </samp>
                        <kbd className="console_input">
                                <span className="UserError">Access Denied</span>
                                <span className="email_input">
                                    <label htmlFor="email">Email address:</label>
                                    <input 
                                        className="email" 
                                        id="email" 
                                        type="email" 
                                        value={userEmail} 
                                        onChange={(e)=>{setUserEmail(e.target.value)}} 
                                        onKeyDown={handleKeyDown}
                                        ref={inputRef} 
                                        autoFocus 
                                    />
                                </span>
                                <span className="Error">Access Denied</span>
                                <span className="password-input">
                                    <label htmlFor="password">Password:</label>
                                    <input 
                                        className="password" 
                                        id="password" 
                                        type="password" 
                                        value={userPassword} 
                                        onChange={(e)=>{setUserPassword(e.target.value)}} 
                                        onKeyDown={handleKeyDown}
                                        ref={inputRef}
                                        autoFocus 
                                    />
                                </span>
                        </kbd>
                    </div>
                </div>
            }
        </>
    );
}

export default LoginDashboard;