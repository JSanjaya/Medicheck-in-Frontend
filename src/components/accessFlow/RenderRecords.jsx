import React from "react";
import Record from "../Record"


const RenderRecords = props => {

    return (
        <div className="records-display">
        {props.records.map(record =>
            <Record
                key={record._id}
                id={record._id}
                answer={record.answer}
                notes={record.notes}
                day={record.day}
                update={props.update}
            />)}
        </div>
        );
}

export default RenderRecords;
