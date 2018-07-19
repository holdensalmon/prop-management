import React, { Component } from 'react';

import TabNav from './tabnav';
import NewsletterGrid from './newsletter/newsletterGrid';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tabs: [
                {
                    title: 'love me',
                    active: true,
                    component: <NewsletterGrid/>
                },
                {
                    title: 'come back',
                    active: false,
                    component: <h4>DAD - come back</h4>
                },
            ]
        }
    }

    handleTabChange = (title) => {
        const tabs = this.state.tabs;

        tabs.map((tab, index) => {
            if (tab.title == title) {
                tab.active = true
            } else {
                tab.active = false
            }
        })

        this.setState({ tabs });
    }

    render() {
        return (
            <div className='dashboard'>
                <TabNav handleClick={(title) => this.handleTabChange(title)} tabs={this.state.tabs} />
            </div>
        )
    }

}

export default Dashboard;
