// import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {ThunkDispatch} from 'redux-thunk';
// import * as LoginActions from '../action/actions';
// // import login from './reducer/login';
// import {AppState} from '../store';
//
// interface OwnProps {}
//
// interface State {
//     loginData: {
//         name: string,
//         age: string
//     }
// }
//
//
//
// interface DispatchProps {
//     action: {
//         LoginActions: {
//             LoginDetail: ({}) => void;
//         }
//     }
// };
//
// type Props = DispatchProps;
//
// class Login extends Component<Props, State>{
//     constructor(props: Props) {
//         super(props);
//         this.state = {
//             loginData: {name:'jigar', age:'23'}
//         }
//     }
//     login = () => {
//         const {loginData} = this.state;
//         console.log('login click');
//         this.props.action.LoginActions.LoginDetail(loginData);
//     };
//     render() {
//         return (
//             <div>
//                 <h1>{'Login'}</h1>
//                 <button onClick={() => this.login()}>LoginClick</button>
//             </div>
//         );
//     }
//
//
// }
//
// interface StateData {
//     login: {}
// }
//
// const mapStateToProps = (state: AppState, ownProps: OwnProps): StateData  => ({
//     login: state.Login
// });
//
//
//
// const mapDispatchToProps = (dispatch: ThunkDispatch<{}, {}, any>): DispatchProps => ({
//     action: {
//         LoginActions: bindActionCreators(LoginActions,dispatch)
//     }
// })
//
// export default connect(mapStateToProps, mapDispatchToProps)(Login);