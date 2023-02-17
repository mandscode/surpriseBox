import React from "react";
import LoginCount from "../utils/Count";
const ActiveSection = () => {
    const initialCount1 = () => Number(window.localStorage.getItem(`count1`));
    const initialCount2 = () => Number(window.localStorage.getItem(`count2`));
    const initialCount3 = () => Number(window.localStorage.getItem(`count3`));
    const [count1, setCount1] = React.useState(initialCount1);
    const [count2, setCount2] = React.useState(initialCount2);
    const [count3, setCount3] = React.useState(initialCount3);
    const [validLogin, setValidLogin] = React.useState(localStorage.getItem('token'));
    const [looser, setLooser] = React.useState(true);
    
    let PredefineNumberList = [2, 4, 6, 8]

    React.useEffect(() => {
        setValidLogin(localStorage.getItem('token'));
        if(PredefineNumberList.filter(e => e === count1).toString() === count1.toString() && validLogin === 'abc123') {
            setLooser(false);
        }
        else if(PredefineNumberList.filter(e => e === count2).toString() === count2.toString() && validLogin === 'def456') {
            setLooser(false);
        }
        else if(PredefineNumberList.filter(e => e === count3).toString() === count3.toString() && validLogin === 'ghi789') {
            setLooser(false);
        }
    }, [])
    console.log(PredefineNumberList.filter(e => e === count3).toString() === 1)
    return (
        <>
            {
                validLogin ?
                    ( <>
                        <div className="wrapper"
                            onClick={()=>{
                                setValidLogin(localStorage.removeItem('token'), window.location.href="/")
                            }}
                        >
                            <input type="checkbox" />
                            <label>
                                <span className="switchOff"></span>
                            </label>
                        </div>
                        <div className="_count__wrapper">
                            <LoginCount/>
                        </div>
                        <div className="mystery__container">
                            <div className="mystery__wrapper">
                                <div className="mystery__box">
                                    <div className="surprise">
                                        <input id="click" type="checkbox" />
                                        <label className="click" htmlFor="click" />
                                        <div className="winner">
                                            {validLogin === 'abc123' ? 
                                                <span
                                                    className={looser ? `_looser` : `_login__count`}
                                                >
                                                    {PredefineNumberList.filter(e => e === count1).toString() === count1.toString() ? "You're Winner" :"You are Looser"}
                                                </span> 
                                                : 
                                                validLogin === 'def456' ? 
                                                <span 
                                                    className={looser ? `_looser` :`_login__count`}
                                                >
                                                    {PredefineNumberList.filter(e => e === count2).toString() === count2.toString() ? "You're Winner" : "You are Looser"}
                                                </span>
                                                :
                                                <span 
                                                    className={looser ? `_looser` :`_login__count`}
                                                >
                                                    {PredefineNumberList.filter(e => e === count3).toString() === count3.toString() ? "You're Winner" : "You are Looser"}
                                                </span>
                                            }
                                        </div>
                                        <div className={looser ? `` : `sparkles`}>
                                            <div className="spark1" />
                                            <div className="spark2" />
                                            <div className="spark3" />
                                            <div className="spark4" />
                                            <div className="spark5" />
                                            <div className="spark6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </>
                    )
                :
                window.location.href="/"
            }
        </>
    );
}
 
export default ActiveSection;