import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm: '' };
    }

    // This function is an arrow function because it fixes the problem of
    // the 'this' keyword breaking when it's a normally-declared function
    // as in that case it would be referring to an undefined
    onFormSubmit = (event) => { 
        // Stops the form from trying to submit itself and refreshing the page on Enter button
        event.preventDefault();

        // In a class-based component, 'this' goes in front of props
        this.props.onSubmit(this.state.searchTerm);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormSubmit}>
                    <div className='field'>
                        <label htmlFor='imageSearchBar'>Image Search</label>
                        <input
                            type='text'
                            id='imageSearchBar'
                            value={this.state.searchTerm}
                            onChange={event => this.setState({ searchTerm: event.target.value })}
                        />
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;