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
                <ActiveSection/>
            </div>
        </>
    );
}
 
export default Dashboard;