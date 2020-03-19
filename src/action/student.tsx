import {ThunkAction} from "redux-thunk";
import {AppState} from "../store";
import {Action} from "redux";

import {getAllStudents, updateStudent, deleteStudent, insertStudent} from '../service/student';
import {GET_STUDENT_DETAIL, ERROR_RESPONSE,
        ADD_STUDENT_DETAIL,
        DELETE_STUDENT_DETAIL,
        EDIT_STUDENT_DETAIL} from '../reducer/student';

import {AddStudentParameters, StudentsArray} from "../interfaces/studentInterface";

export const getAllStudent = (): ThunkAction<void, AppState, {}, Action> => {
    return (dispatch) => {
        getAllStudents()
            .then((response) => {
                if (response.status === 200) {
                    console.log('response data: ', response.data);
                    dispatch({
                        type: GET_STUDENT_DETAIL,
                        data: response.data
                    });
                }
            }).catch((error) => {
                debugger
            console.log('error in getAllStudent actions..',error.response);
            dispatch({
                type: ERROR_RESPONSE,
                data: {error_msg: error.response? error.response.data.error : 'there is an error while calling getAllStudent API'}
            });
        });
    }
};

export const addStudentData = (studentObject: AddStudentParameters): ThunkAction<void, AppState, {}, Action> => {
    return (dispatch) => {
        insertStudent(studentObject)
            .then((response) => {
                if (response.status === 201) {
                    dispatch({
                        type: ADD_STUDENT_DETAIL,
                        data: response.data
                    });
                }
                debugger
            }).catch((error) => {
                dispatch({
                    type: ERROR_RESPONSE,
                    data: {error_msg: error.response? error.response.data.error : 'there is an error while calling addStudent API'}
                });
        });
    }
}

export const deleteStudentData = (id: number): ThunkAction<void, AppState, {}, Action> => {
    return (dispatch) => {
        deleteStudent(id)
            .then((response) => {
                debugger
                if (response.status === 200) {
                    dispatch({
                        type: DELETE_STUDENT_DETAIL,
                        data: response.data
                    });
                }
            }).catch((error) => {
                debugger
                dispatch({
                    type: ERROR_RESPONSE,
                    data: {error_msg: error.response? error.response.data.error : 'there is an error while calling addStudent API'}
                });
        });
    }
}

export const editStudentData = (studentId: number, student: StudentsArray): ThunkAction<void, AppState, {}, Action> => {
    return (dispatch) => {
        updateStudent(studentId, student)
            .then((response) => {
                debugger
                if (response.status === 200) {
                    dispatch({
                        type: EDIT_STUDENT_DETAIL,
                        data: response.data
                    });
                }
            }).catch((error) => {
            debugger
            dispatch({
                type: ERROR_RESPONSE,
                data: {error_msg: error.response? error.response.data.error : 'there is an error while calling addStudent API'}
            });
        });
    }
}