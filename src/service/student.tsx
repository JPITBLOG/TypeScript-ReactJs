import baseServices from './baseService';

import {AddStudentParameters} from "../interfaces/studentInterface";

export function getAllStudents() {
    return baseServices.get(`/all-student`);
}

export function insertStudent(studentObject: AddStudentParameters) {
    debugger
    return baseServices.put(`/upsert-student/${null}`, studentObject);
}

export function updateStudent(studentId: number, studentObject: AddStudentParameters) {
    debugger
    return baseServices.put(`/upsert-student/${studentId}`, studentObject);
}

export function deleteStudent(id: number) {
    return baseServices.delete(`/delete-student/${id}`);
}