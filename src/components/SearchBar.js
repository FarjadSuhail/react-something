import React from 'react';

class SearchBar extends React.Component{
    
    //for controlled components
    state = {term: ''};
    
    // to prevent form from submitting on pressing enter
    // changing the default behaviour

    

    onFormSubmit = (event) =>
    {
        event.preventDefault();
        //console.log(event.target.value);
     //   console.log(this.state.term);

        this.props.onSubmit(this.state.term);
    }
    

    //    onInputChange(event) {
  //      console.log(event.target.value);
   // }

    // onInputClick() {
    //     console.log('Input clicked');
    // }

    
    
    render() {
//        console.log('props', this.props);
        return (
            <div className="ui segment">

                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    
                    <label>Image Search</label>
                    <input 
                        type="text"

                        //for controlled components
                        value={this.state.term}
                        onChange={e => this.setState({ term: e.target.value })}
                     />
                
                    </div>
                </form>
            </div>
            );
    };
}

export default SearchBar;