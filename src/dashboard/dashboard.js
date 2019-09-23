import React from 'react';
import ChatListComponent from '../chatlist/chatList'

class DashboardComponent extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {

        return (
            <div>
                <div>Hello word from Dashboard</div>
                <ChatListComponent history={this.props.history}></ChatListComponent>
            </div>

        );
    }
}
export default DashboardComponent;