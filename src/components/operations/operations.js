import React from 'react';
import { Button, Form, FormGroup, Label, Input, CustomInput } from 'reactstrap';

const Operations = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for="exampleCheckbox">Цукаты:</Label>
                <div>
                    <CustomInput type="checkbox" id="exampleCustomCheckbox" label="Чистка" />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox2" label="Посол" />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox3" label="Дробление" />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox4" label="Загрузка"  />
                    <CustomInput type="checkbox" id="exampleCustomCheckbox5" label="Варка"  />
                </div>
            </FormGroup>
            {/*<FormGroup check inline>*/}
            {/*    <Label check>*/}
            {/*        <Input type="checkbox" />{' '}*/}
            {/*        Чистка*/}
            {/*    </Label>*/}

            {/*    <Label check inline>*/}
            {/*        <Input type="checkbox" />{' '}*/}
            {/*        Посол*/}
            {/*    </Label>*/}
            {/*    <Label check inline>*/}
            {/*        <Input type="checkbox" />{' '}*/}
            {/*        Дробление*/}
            {/*    </Label>*/}
            {/*    <Label check inline>*/}
            {/*        <Input type="checkbox" />{' '}*/}
            {/*        Загрузка*/}
            {/*    </Label>*/}
            {/*    <Label check inline>*/}
            {/*        <Input type="checkbox" />{' '}*/}
            {/*        Варка*/}
            {/*    </Label>*/}
            {/*</FormGroup>*/}
            <Button>Отправить</Button>
        </Form>
    );
}

export default Operations;
