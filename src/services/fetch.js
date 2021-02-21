import React from "react";

export default class FetchRequest extends React.Component {
    state = {
        loading: true,
        technology: []
    };

    async componentDidMount() {
        const url = `http://springreact2.eba-dup8x69j.eu-central-1.elasticbeanstalk.com/api/tech/all/`
        // const url2 = "https://api.randomuser.me/"

        const responce = await fetch(url)
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
                {this.state.technology.map(operrations => (
                    <div>
                        <div>Технология: {operrations.name}</div>
                        <div>id = {operrations.id}</div>
                    </div>
                ))}
                {/*<div>{this.state.technology.operations}</div>*/}
                {/*<div>{this.state.test.name.first}</div>*/}
                {/*<div>{this.state.test.operations[]}</div>*/}
                {/*<div>{this.state.technology.name.last}</div>*/}
            </div>
        )
    }

}