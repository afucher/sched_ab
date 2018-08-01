import React from 'react';
import Time from './Time';
import Session from './Session';

const Schedule = (props) => {
    let schedules = [];
    let start_hour;
    props.data.forEach(s => {
      if(start_hour !== s.start_hour){
        start_hour = s.start_hour;
        schedules.push(<Time key={s.start_hour} value={s.start_hour} />)
      }
      schedules.push(<Session key={s.id} title={s.title} room={s.room} level={s.level}/>)
    });
    return schedules;
}

Schedule.defaultProps = {
    data: []
};

export default Schedule;