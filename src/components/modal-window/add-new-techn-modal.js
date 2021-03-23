import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PostRequestTech from "../post-request-tech";


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        backgroundColor: 'grey',
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function AddNewTechModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div
            style={modalStyle} className={classes.paper}
        >
            <PostRequestTech />
            {/*<h2 id="simple-modal-title">Text in a modal</h2>*/}
            {/*<p id="simple-modal-description">*/}
            {/*    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
            {/*</p>*/}
        </div>
    );

    return (
        <div>
            <button type="button" className='btn btn-success' onClick={handleOpen}>
                Добавить технологию
            </button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
                {/*<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog"*/}
                {/*     aria-labelledby="exampleModalCenterTitle" aria-hidden="true">*/}
                {/*    <div className="modal-dialog modal-dialog-centered" role="document">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>*/}
                {/*                <button type="button" className="close" data-dismiss="modal" aria-label="Close">*/}
                {/*                    <span aria-hidden="true">&times;</span>*/}
                {/*                </button>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body">*/}
                {/*                {body}*/}


                {/*            </div>*/}
                {/*            <div className="modal-footer">*/}
                {/*                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>*/}
                {/*                <button type="button" className="btn btn-primary">Save changes</button>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </Modal>
        </div>
    );
}
