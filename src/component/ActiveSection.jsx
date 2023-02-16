import React from "react";
const ActiveSection = () => {
    const [validLogin, setValidLogin] = React.useState(localStorage.getItem('token'));
    
    React.useEffect(() => {
        setValidLogin(localStorage.getItem('token'))
    }, [])
    console.log("tokennn", validLogin)
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
                        <div className="mystery__container">
                            <div className="mystery__wrapper">
                                <div className="mystery__box">
                                    <div className="surprise">
                                        <input id="click" type="checkbox" />
                                        <label className="click" htmlFor="click" />
                                        <div className="winner">Happy Birthday!</div>
                                        <div className="sparkles">
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