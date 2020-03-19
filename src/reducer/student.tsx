import {StudentsArray} from "../interfaces/studentInterface";

 export interface StudentInterface {
    students: Array<StudentsArray>
    errormsg: string
}

const INITIAL_STATE: StudentInterface = {
    students: [],
    errormsg: ''
};

export const GET_STUDENT_DETAIL = 'GET_STUDENT_DETAIL';
export const ERROR_RESPONSE = 'ERROR_RESPONSE';
export const ADD_STUDENT_DETAIL = 'ADD_STUDENT_DETAIL';
export const DELETE_STUDENT_DETAIL = 'DELETE_STUDENT_DETAIL';
export const EDIT_STUDENT_DETAIL = 'EDIT_STUDENT_DETAIL';

interface StudentDetail {
    type: typeof GET_STUDENT_DETAIL
    data: []
}

interface addStudentDetail {
    type: typeof ADD_STUDENT_DETAIL,
    data: {id: number,
            firstname: string,
            lastname: string}
}

interface deleteStudentDetail {
    type: typeof DELETE_STUDENT_DETAIL,
    data: {studentId: number}
}

interface editStudentDetail {
    type: typeof EDIT_STUDENT_DETAIL,
    data: {studentId: number,
            studentObject: StudentsArray}
}

interface ErrorResponse {
    type: typeof ERROR_RESPONSE,
    data: {
        error_msg: string
    }
}

type actionType = StudentDetail | addStudentDetail | deleteStudentDetail | editStudentDetail | ErrorResponse

export default (state = INITIAL_STATE, action: actionType) => {
    switch (action.type) {
        case GET_STUDENT_DETAIL: {
            return {...state, students: action.data, errormsg: ''};
        }
        case ADD_STUDENT_DETAIL: {
            let studentObject = action.data;
            let {students} = state;
            students.push(studentObject);
            return {...state, students, errormsg: ''};
        }
        case DELETE_STUDENT_DETAIL: {
            let deleteStudentId = action.data;
            let {students} = state;
            students = students.filter((student, index) => {
                return student.id != deleteStudentId.studentId;
            });
            return {...state, students, errormsg: ''};
        }
        case EDIT_STUDENT_DETAIL: {
            let {studentId, studentObject} = action.data;
            let {students} = state;
            students[studentId] = studentObject;
            return {...state, students, errormsg: ''};
        }
        case ERROR_RESPONSE: {
            debugger
            console.log('error detail');
            return {...state,errormsg: action.data.error_msg, students: []}
        }
        default:
            return state;
    }
}