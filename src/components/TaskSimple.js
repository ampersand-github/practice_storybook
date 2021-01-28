import React from 'react';

export default function TaskSimple(arg) {
    return (
        <div className="list-item">
            <div>ssjkjkss</div>
            <input type="text" value={arg.title} readOnly={true} />
        </div>
    );
}
