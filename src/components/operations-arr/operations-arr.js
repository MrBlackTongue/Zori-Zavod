// import React, { Component } from "react";
//
// import './operations-arr.css'
//
// //файл пустышка ни к чему не привязан. Либо внести в него изменения и добавить на страницу, либо удать.
//
// export default class OperationsArr extends Component {
//
//     state = {
//         selectedOperation:  null,
//         hasError: false,
//         operation_Id: '',
//         name: '',
//     }
//
//     componentDidCatch(error, errorInfo) {
//
//         this.setState({
//             hasError: true
//         })
//     }
//
//     onTechnologySelected = (selectedOperation) => {
//         this.setState({ selectedOperation })
//     }
//
//     render() {
//
//         const { operation_Td, name} = this.state
//
//         return (
//             <div>
//                 <form onSubmit={this.submitHandler}>
//                     <div className='col-md-6'>
//
//                     </div>
//                     <div className='col-md-6'>
//
//
//                     </div>
//                     <button type='submit'>Отправить</button>
//                 </form>
//             </div>
//
//         )
//     }
// }
