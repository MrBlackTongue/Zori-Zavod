// import React from 'react'
//
// import './technology.css'
//
// class TechnologyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {technology: 'JavaScript'};
//
//         this.onChangeSelect = this.onChangeSelect.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//     }
//
//     onChangeSelect(event) {
//         this.setState({technology: event.target.value});
//     }
//
//     onSubmit(event) {
//         alert(`По цукатам отправлена операция: ${this.state.technology}`);
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.onSubmit}>
//                 <label>
//                     Цукаты:
//                     <select value={this.state.technology} onChange={this.onChangeSelect}>
//                         <option value="Чистка">Чистка</option>
//                         <option value="Посол">Посол</option>
//                         <option value="Дробление">Дробление</option>
//                         <option value="Загрузка">Загрузка</option>
//                         <option value="Варка">Варка</option>
//                     </select>
//                 </label>
//                 <input type="submit" value="Отправить" />
//             </form>
//
//         );
//     }
// }
//
// export default TechnologyForm


import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Operations from "../operations";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function GroupOrientation() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical contained primary button group"
                variant="contained"
            >
                <Button>Цукаты</Button>
                <Button>Икра</Button>
                {/*<Button>Three</Button>*/}
            </ButtonGroup>
        </div>
    );
}
