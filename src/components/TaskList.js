import React from 'react';

import Task from './Task';

// eslint-disable-next-line react/prop-types
export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
    const events = {
        onPinTask,
        onArchiveTask,
    };

    if (loading) {
        return <div className="list-items">loading</div>;
    }

    // eslint-disable-next-line react/prop-types
    if (tasks.length === 0) {
        return <div className="list-items">empty</div>;
    }

    return (
        <div className="list-items">
            {/* eslint-disable-next-line react/prop-types */}
            {tasks.map(task => (
                <Task key={task.id} task={task} {...events} />
            ))}
        </div>
    );
}
