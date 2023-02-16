import React from "react";
const LoginDashboard = () => {
    const [userEmail, setUserEmail] = React.useState();
    const [userPassword, setUserPassword] = React.useState();
    const users = [
        {
          username: 'user1@email.com',
          password: 'password1',
          token: 'abc123'
        },
        {
          username: 'user2@email.com',
          password: 'password2',
          token: 'def456'
        },
        {
          username: 'user3@email.com',
          password: 'password3',
          token: 'ghi789'
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
            if(ActiveClass) {
                AccessDenied[0].classList.remove("activeClass")
            }

            userPassword ? 
                users.find(user=>user.username === `${userEmail}`)?.password !== undefined ? 
                    users.find(user=>user.username === `${userEmail}`)?.password === userPassword 
                    ? console.log("true02") 
                    :  AccessDenied[0].classList.add("activeClass")
                : console.log('false01') 
            : console.log("false03");
        }
      };
      
    return (
        <>
            <div className="_login">
                <div className="console">
                    <div className="toolbar">
                        <div className="pips" />
                    </div>
                    <samp className="console_output">
                        <span>Welcome back. To proceed please log in to your account</span>
                    </samp>
                    <kbd className="console_input">
                            <span className="email_input">
                                <label htmlFor="email">Email address:</label>
                                <input className="email" id="email" type="email" value={userEmail} onChange={(e)=>{setUserEmail(e.target.value)}} onKeyDown={handleKeyDown} autoFocus />
                            </span>
                            <span className="Error">Access Denied</span>
                            <span className="password-input">
                                <label htmlFor="password">Password:</label>
                                <input className="password" id="password" type="password" value={userPassword} onChange={(e)=>{setUserPassword(e.target.value)}} onKeyDown={handleKeyDown} autoFocus />
                            </span>
                    </kbd>
                </div>
            </div>

        </>
    );
}

export default LoginDashboard;