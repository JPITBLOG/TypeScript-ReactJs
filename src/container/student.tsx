import React, {Component} from "react";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {AppState} from '../store';

import * as studentAction from '../action/student';
import {AddStudentParameters} from "../interfaces/studentInterface";

import AddStudent from "./addStudent";
import GetAllStudents from "./getAllStudent";
import {StudentsArray} from "../interfaces/studentInterface";

interface State {
    getAllStudent: StudentsArray[] | [];
}

interface DispatchProps {
        getAllStudentDispatch: {
            getAllStudent: () => void;
            addStudentData: (data: AddStudentParameters) => void;
            deleteStudentData: (id: number) => void;
            editStudentData: (studentId: number, student: StudentsArray) => void;
        }
}

interface IrRoootState {
    students: {
        students: StudentsArray[] | []
    }
}

type Props = DispatchProps & IrRoootState;

class Students extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            getAllStudent: []
        };
        this.AddStudentHandler = this.AddStudentHandler.bind(this);
        this.EditStudentHandler = this.EditStudentHandler.bind(this);
        this.DeleteStudentHandler = this.DeleteStudentHandler.bind(this);
    }

    AddStudentHandler = (studentObject:AddStudentParameters) => {
        this.props.getAllStudentDispatch.addStudentData(studentObject);
        debugger
    }

    EditStudentHandler = (studentId: number, student: StudentsArray) => {
        this.props.getAllStudentDispatch.editStudentData(studentId, student);
    }

    DeleteStudentHandler = (id: number) => {
        this.props.getAllStudentDispatch.deleteStudentData(id);
    }

    componentDidMount = () => {
        this.props.getAllStudentDispatch.getAllStudent();
    }

    componentDidUpdate(prevProps: Props) {
        console.log('state data: ', this.props.students);
        debugger
        if (this.props.students !== prevProps.students) {
            this.setState({getAllStudent: this.props.students.students});
        }
    }

    render() {
            const {getAllStudent} = this.state;
        return (
            <>
                <div><AddStudent addStudentHandler = {(studentObject:AddStudentParameters) => this.AddStudentHandler(studentObject)}/></div>
                <div><GetAllStudents students = {getAllStudent}
                                     editStudentHandler = {(studentId: number, student: StudentsArray) => this.EditStudentHandler(studentId, student)}
                                     deleteStudentHandler = {(id: number) => this.DeleteStudentHandler(id)}/></div>
            </>
        );
    }
}

const mapStateToProps = (state: AppState) => {
    const {Student} = state;
    return {
        students: Student
    }
};

const mapDispatchToProps = (dispatch: ThunkDispatch<AppState, void, any>) => {
    return  {
        getAllStudentDispatch: bindActionCreators(studentAction, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);