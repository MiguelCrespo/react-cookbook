import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * This component render a section with the name and age that you pass as properties
 * 
 * @tracker
 */
export default class classDefinition extends Component {
    static propTypes = {
        /**
         * The name you want to display
         * 
         * @seed 'Miguel'
         */
        name: PropTypes.string.isRequired,
        /**
         * The age of the user
         * 
         * @seed 23
         */
        age: PropTypes.number.isRequired,
    }

    render() {
        return (
            <section>
                <h1>Hi, I'm {this.props.name}</h1>

                <p>
                    And I am {this.props.age} age old
                </p>
            </section>
        );
    }
}