import React from "react";
import {StudentsArray} from "../interfaces/studentInterface";

interface Props {
    students: Array<StudentsArray>,
    editStudentHandler: (studentId: number,student: StudentsArray) => void,
    deleteStudentHandler: (id: number) => void
}

const GetAllStudents: React.SFC<Props> = (props) => {
    const students = props.students;

    const editStudent = (studentIndex: number,student: StudentsArray) => {
        student.firstname = student.firstname+student.id;
        student.lastname = student.lastname+student.firstname;
        props.editStudentHandler(studentIndex, student);
    }

    const deleteStudent = (id: number) => {
        props.deleteStudentHandler(id);
    }

    const mappedStudent = (students: Array<StudentsArray>) => {
        if (students instanceof Array) {
            return students.map((student, index) => {
                const {id, firstname, lastname} = student;
                debugger
                return (
                    <tr key={`tr${index}`}>
                        <td>{id}</td>
                        <td>{firstname}</td>
                        <td>{lastname}</td>
                        <td><button onClick={() => editStudent(index, student)}>{'Edit'}</button></td>
                        <td><button onClick={() => deleteStudent(id)}>{'Delete'}</button></td>
                    </tr>
                );
            });
        }

    }

    const bindStudent = () => {
        return (
            <table>
                <th>
                    <tr>
                        <td>{'ID'}</td>
                        <td>{'First Name'}</td>
                        <td>{'Last Name'}</td>
                        <td>{'Edit Data'}</td>
                        <td>{'Delete Data'}</td>
                    </tr>
                </th>
                <tbody>
                {mappedStudent(students)}
                </tbody>
            </table>
        );
    }

  return (
      <div>
          <h2>{'get all students...'}</h2>
          <div>
              {props.students ? bindStudent() : null}
          </div>
      </div>
  );
};

export default GetAllStudents;