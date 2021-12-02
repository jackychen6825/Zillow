import React from 'react'

class PropertyForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            address: '',
            latitude: '',
            longitude: '',
            city: '',
            state: '',
            zipcode: '',
            bedrooms: '',
            bathrooms: '',
            sqft: '',
            price: '',
            for_sale: true,
            description: '',
            photoFiles: null
        }

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.navigatetoSearch = this.navigatetoSearch.bind(this); 
        this.handleSale = this.handleSale.bind(this);
        this.handleRent = this.handleRent.bind(this);
    }

    update(field) {
        return e => {
            if (field === 'address' || field === 'city' || field === 'state' || field === 'description'){
                this.setState({
                    [field]: e.target.value
                })
            } else if (field === 'latitude' || field === 'longitude') {
                this.setState({
                    [field]: parseFloat(e.target.value)
                })
            } else {
                this.setState({
                    [field]: parseInt(e.target.value)
                })
            }
        }
    }

    navigatetoSearch(){
        this.props.history.push('/')
    }

    handleSubmit(e){
        e.preventDefault();

        //making use of form data and implementing photos for the backend 
        const formData = new FormData();
        formData.append('property[address]', this.state.address);
        formData.append('property[latitude]', this.state.latitude);
        formData.append('property[longitude]', this.state.longitude);
        formData.append('property[city]', this.state.city);
        formData.append('property[state]', this.state.state);
        formData.append('property[zipcode]', this.state.zipcode);
        formData.append('property[bedrooms]', this.state.bedrooms);
        formData.append('property[bathrooms]', this.state.bathrooms);
        formData.append('property[sqft]', this.state.sqft);
        formData.append('property[price]', this.state.price);
        formData.append('property[for_sale]', this.state.for_sale);
        formData.append('property[description]', this.state.description);
        formData.append('property[photos]', this.state.photoFiles);

        this.props.createProperty(formData);
        this.navigatetoSearch();
    }

    //handles properties for sale --
    handleSale(){
        this.setState({
            ['for_sale']: true 
        })
    }

    //handles rentals --
    handleRent(){
        this.setState({
            ['for_sale']: false 
        })
    }

    handleFile(e){
        this.setState({
            photoFiles: e.currentTarget.files[0]
        })
    }


    render(){
        return (
            <div className='property-form-container'>
                <form onSubmit={this.handleSubmit} className='property-form'>
            
                    <br />
                    <input type="file" onChange={this.handleFile.bind(this)}/>

                    <br/>
                    <label className='home-input-field'>Address</label><br/>
                    <input 
                        type="text" 
                        value={this.state.address} 
                        onChange={this.update('address')} 
                        className='property-input' 
                        
                    />
                    <br />
                    <label className='home-input-field'>Latitude</label><br />
                    <input 
                        type="number" 
                        value={this.state.latitude} 
                        onChange={this.update('latitude')} 
                        className='property-input' 
                        
                    />
                    <br />
                    <label className='home-input-field'>Longitude</label><br />
                    <input 
                        type="number" 
                        value={this.state.longitude} 
                        onChange={this.update('longitude')} 
                        className='property-input' 
                        
                    />
                    <br />
                    <label className='home-input-field'>City</label><br />
                    <input 
                        type="text" 
                        value={this.state.city} 
                        onChange={this.update('city')} 
                        className='property-input' 
                        
                    />
                    <br />
                    <label className='home-input-field'>State</label><br />
                    <input 
                        type="text" 
                        value={this.state.state} 
                        onChange={this.update('state')} 
                        className='property-input' 
                       
                    />
                    <br/>
                    <label className='home-input-field'>Zip Code</label><br />
                    <input 
                        type="number" 
                        value={this.state.zipcode} 
                        onChange={this.update('zipcode')} 
                        className='property-input' 
                        
                    />
                    <br/>
                    <label className='home-input-field'>Bedrooms</label><br />
                    <input 
                        type="number" 
                        value={this.state.bedrooms} 
                        onChange={this.update('bedrooms')} 
                        className='property-input' 
                        
                    />
                    <br/>
                    <label className='home-input-field'>Bathrooms</label><br />
                    <input 
                        type="number" 
                        value={this.state.bathrooms} 
                        onChange={this.update('bathrooms')} 
                        className='property-input' 
                       
                    />
                    <br/>
                    <label className='home-input-field'>Square Footage</label><br />
                    <input 
                        type="number" 
                        value={this.state.sqft} 
                        onChange={this.update('sqft')} 
                        className='property-input' 
                       
                    />
                    <br/>
                    <label className='home-input-field'>Price</label><br />
                    <input 
                        type="number" 
                        value={this.state.price} 
                        onChange={this.update('price')} 
                        className='property-input' 
                        
                    />
                    <br/>
                    <label className='home-input-field'>Description</label><br />
                    <textarea 
                        value={this.state.description} 
                        onChange={this.update('description')} 
                        className='property-textarea' 
                        
                    />
                    <br/>
                    <p>
                    <input
                        type="radio"
                        checked={this.state.for_sale}
                        onChange={this.handleSale}
                        name='listing-type'
                    />
                    <label className='home-input-field'>Sale</label>
                    <input
                        type="radio"
                        checked={!this.state.for_sale}
                        onChange={this.handleRent}
                        name='listing-type'
                    />
                    <label className='home-input-field'>Rent</label>
                    <br/>
                    </p>
                    
                    <input className='session-submit' type="submit" placeholder='Submit' />
                </form>
            </div>

        )
    }
}

export default PropertyForm;