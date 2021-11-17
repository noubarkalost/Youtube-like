import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''}
    onInputChange = (event)=>{
        this.setState({term: event.target.value })
    }
    onFormSubmit = (event)=>{
        event.preventDefault()
        // make sure to call from parent a callback
    }
    render() {
        return (
            <div className="ui segment search-bar">
               <form className="ui form" onSubmit={this.onFormSubmit}>
                 <div className="field">
                    <label>Video Search</label>
                     <input value={this.state.term} onChange={this.onInputChange} type="text"/>
                 </div>
               </form>
            </div>
        )
    }
}

export default SearchBar;