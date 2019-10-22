import React, { Component } from 'react';
import ContentWrapper from '../Layout/ContentWrapper';

require('babel-polyfill');

const SiteClient = require('datocms-client').SiteClient;
console.log("Key = " + process.env.DATOCMS_KEY);
const client = new SiteClient(process.env.DATOCMS_KEY);
var festival = String();
client.items.all({'filter[type]': 'festival'}, {allPages: true})
                .then((models) => console.log(models));

class Festivals extends Component {
    constructor() {
        super();
        console.log(process.env.DATOCMS_KEY);
        this.state = {
            // TODO: Change this to hold the entire array of results and retrieve into a list on the page
            festivalName: ''
        }
    }

    componentDidMount() {
        this.getFestivals().then(result => this.setState({
            festivalName: result[0].name
        }))
    }

    getFestivals() {
        return client.items.all({'filter[type]': 'festival'}, {allPages: true});
    }

    render() {
        return (
            <ContentWrapper>
                {/* view content here */}
                <h1>Festivals</h1>
                <h3> - {this.state.festivalName} - </h3>
            </ContentWrapper>
        );
    }
}

export default Festivals;