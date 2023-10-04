import React from 'react';
import '../styles/time.css';
import Svguser from "../photos/svguser";


export default function Time() {
    const [currentDay, setCurrentDay] = React.useState(' ');
    const [currentDate, setCurrentDate] = React.useState(' ');
    const [currentTime, setCurrentTime] = React.useState(' ');

    React.useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            
            const optionDay = {weekday:'short'};
            const optionDate = {month:'short', day:'2-digit'};
            const optionTime = {hour:'numeric', minute:'2-digit', hour12:true};

            setCurrentDay(now.toLocaleString(undefined, optionDay));
            setCurrentDate(now.toLocaleString(undefined, optionDate));
            setCurrentTime(now.toLocaleString(undefined, optionTime));
        }, 1000);
        return() => clearInterval(interval);
    }, []);
    return(
         <div className="row">
            <div className="subContent"> 
            {/* col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4  */}
            
            <div className="row">
            <div className="text-center col-5">
            <Svguser />   
            {/* <FontAwesomeIcon icon="fa-duotone fa-user" style={{"--fa-primary-color": "#504e4e", "--fa-secondary-color": "#d1c785",}} /> */}
            </div>
            <div className="text-center col-7 timeContent">
                <div className="cTagLine">
                {/* Turning Tasks into Triumphs */}
                {currentTime}
                </div>
                <div className="cDateTime">
                {/* {currentTime} || {currentDay} || {currentDate}  */}
                {currentDay} , {currentDate} 
                </div>
            </div>
            </div>
            </div>
         </div>
    )
}