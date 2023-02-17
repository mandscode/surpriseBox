import ActiveSection from "../component/ActiveSection";

const Dashboard = () => {
    return (
        <>
            <div className="_activeDashboard">
                <div className="wave" />
                <div className="wave" />
                <div className="wave" />
            </div>
            <div className="_activeSection">
                <ul className="rules">
                    <h2>Rules:-</h2>
                    <li>We have a predefined number list in surprise box</li>
                    <li>We count the number of logins.</li>
                    <li>
                        After clicking once on surprise box, your login count will be seen in the predefined number list. If your login count matches then you will become a winner.
                    </li>
                </ul>
                <ActiveSection/>
            </div>
        </>
    );
}
 
export default Dashboard;