import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import { Provider } from 'react-redux';
import store from './store';

class TimerDashboard extends React.Component {
    // Update the timers in real time by force rendering from the Redux store
    
    componentDidMount() {
        const store = store;

        store.subscribe( () => {
            this.forceUpdate();
        }
        );
        

    }


    state = {
      timers: [
        {
          title: 'Practice squat',
          project: 'Gym Chores',
          id: 3,
          elapsed: 5456099,
          runningSince: Date.now(),
        },
        {
          title: 'Bake squash',
          project: 'Kitchen Chores',
          id: 4,
          elapsed: 1273998,
          runningSince: null,
        },
      ],
    };
  
    render() {
      return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList
                    timers={this.state.timers}
                />
                <ToggleableTimerForm />
                </div>
            </div>
      );
    }
  }

export default TimerDashboard;