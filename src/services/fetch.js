import React from "react";

export default class FetchRequest extends React.Component {
    state = {
        loading: true,
        operations: [],
        technology: []
    };

    async componentDidMount() {
        const url = `http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/operation/all`

        const url2 = `http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/all`

        // const url2 = "https://api.randomuser.me/"

        const responce = await fetch(url2)
        const data = await responce.json()

        this.setState({technology: data, loading: false})
        console.log(data);
    }

    render() {

        if (this.state.loading) {
            return <div>loading...</div>
        }

        if (!this.state.technology.length) {
            return <div>didn't get a technology</div>
        }

        return (
            <div>
                {this.state.technology.map((technology) => (
                    <div key={technology}>
                        <div>Технология: {technology.name}</div>
                        <div>id = {technology.id}</div>

                        <div>operations: {technology.operations.map(
                            (operation) => (
                                <div key={operation}>
                                    <div>id: {operation.id}</div>
                                    <div>{operation.name}</div>
                                    {/*<div>{operation.technology}</div>*/}
                                    {/*<div>standard: {operation.standard}</div>*/}
                                </div>
                            )
                        )}</div>


                        {/*<div>{this.state.technology.operations}</div>*/}
                        {/*<div>{this.state.test.name.first}</div>*/}
                        {/*<div>{this.state.test.operations[]}</div>*/}
                        {/*<div>{this.state.technology.name.last}</div>*/}
                    </div>

                ))}
            </div>
        )
    }
}