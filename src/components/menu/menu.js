import React from 'react'

class Menu extends React.Component {

    render() {

        const menus = [
            'Газ и Электричество',
            'Технологии и операции',
            'Home',
            'Contacts',
            'Partners'

        ]
        return (
            <div className="menu">
                {menus.map((value, index) => {
                    return <div key={index}><Link label={value} /></div>
                })}
                {/*<ul>*/}
                {/*    {*/}
                {/*        this.menuList.map((item, index) => (*/}
                {/*            <li key={index} onClick={() => this.setState({activeIndex: index})}>*/}
                {/*                <a class={this.state.activeIndex === index ? "menu-active": ""} href="#home">{ item.name }</a>*/}
                {/*            </li>*/}
                {/*        ))*/}
                {/*    }*/}
                {/*</ul>*/}
            </div>
        );
    }
}

class Link extends React.Component {

    render() {

        const url = '/' + this.props.label.toLowerCase().trim().replace(' ', '-')

        return <div>
            <a href={url}>{this.props.label}</a>
        </div>
    }


}

export default Menu