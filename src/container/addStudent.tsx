import React from "react";

import {AddStudentParameters} from "../interfaces/studentInterface";

interface Props {
    addStudentHandler : (StudentObject: AddStudentParameters) => void;
}

const AddStudent = (props: Props) => {
    const studentObject = {firstname: 'jay', lastname: 'patel'}
    const callAddStudentHandleClick = (studentObject: AddStudentParameters) => {
        debugger
        props.addStudentHandler(studentObject);
    }
    return (
        <>
            <h1>Add student</h1>
            <button onClick={() => callAddStudentHandleClick(studentObject)}>Add Student</button>
        </>
    );
};

export default AddStudent;