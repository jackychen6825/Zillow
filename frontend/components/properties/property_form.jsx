import React from 'react'

class PropertyForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render(){
        return (
            <div className='property-form-container'>
                <form className='property-form'>
                    <input 
                        type="text" 
                        value={this.state.email} 
                        onChange={this.update('email')} 
                        className='session-input' 
                        placeholder='Enter email' 
                    />
                </form>
            </div>

        )
    }
}

export default PropertyForm;