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
            photos: []
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
        
        //taking care of photos:
        for (let i = 0; i < this.state.photos.length; i++) {
            formData.append("property[photos][]", this.state.photos[i]);
        }

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
            photos: e.currentTarget.files
        })
    }
 

    render(){
        return (
            <div className='property-form-container'>
                <form onSubmit={this.handleSubmit} className='property-form'>
                    <div className='photos-input'>
                        <div className='files-input-container'>
                            <label className='photo-label' htmlFor='files'>
                                <i className="fas fa-camera-retro"></i>
                                Choose Photos
                            </label>
                        </div>
                        <input id='files' className='files-input' type="file" onChange={this.handleFile.bind(this)} multiple />
                    </div>
                    <div className='address-input-container'>
                       
                        <div className='address-div'>
                            <label className='home-input-field'>Address</label><br/>
                            <input
                                type="text"
                                value={this.state.address}
                                onChange={this.update('address')}
                                className='address-input'
                                placeholder='Enter address'

                            />
                        </div>
                        <div className='city-state-zip'>
                             <div className='city'>
                                 <label className='home-input-field'>City</label><br/>
                                 <input
                                     type="text"
                                     value={this.state.city}
                                     onChange={this.update('city')}
                                     className='property-input'
                                     placeholder="Enter city"
 
                                 />
                             </div>
                             
                             <div className='state'>
                                 <label className='home-input-field'>State</label><br/>
                                 <input
                                     type="text"
                                     value={this.state.state}
                                     onChange={this.update('state')}
                                     className='property-input'
                                     placeholder="Enter state"
                                 />
                             </div>
                             
                             <div className='zipcode'> 
                                 <label className='home-input-field'>Zip Code</label><br/>
                                 <input
                                     type="number"
                                     value={this.state.zipcode}
                                     onChange={this.update('zipcode')}
                                     className='property-input'
                                     placeholder="Enter zipcode"
                                 />
                             </div>
                         </div>

                        <div className="lat-lng-container">
                            <div className='latitude'>
                                <label className='home-input-field'>Latitude</label><br/>
                                <input
                                    type="number"
                                    value={this.state.latitude}
                                    onChange={this.update('latitude')}
                                    className='property-input'
                                    placeholder='Enter latitude'

                                />
                            </div>
                            <div className='longitude'> 
                                <label className='home-input-field'>Longitude</label><br/>
                                <input
                                    type="number"
                                    value={this.state.longitude}
                                    onChange={this.update('longitude')}
                                    className='property-input'
                                    placeholder='Enter longitude'

                                />
                            </div>
                        </div>
                        <div className='rent-sale-container'>
                            <input
                                type="radio"
                                id='sale'
                                checked={this.state.for_sale}
                                onChange={this.handleSale}
                                name='listing-type'
                            />

                            <div className='label'><label htmlFor='sale' className='radio-label'>Sale</label></div>
                            <input
                                type="radio"
                                id='rent'
                                checked={!this.state.for_sale}
                                onChange={this.handleRent}
                                name='listing-type'
                            />

                            <div className='label'><label htmlFor='rent' className='radio-label'>Rent</label></div>
                        </div>
                    </div>
                    <div className='details-input'>
                        <div>
                        <label className='home-input-field'>Bedrooms</label><br />
                        <input
                            type="number"
                            value={this.state.bedrooms}
                            onChange={this.update('bedrooms')}
                            className='property-input'
                            placeholder='Enter # bedrooms'
                        />
                        </div>
                        <div>
                        <label className='home-input-field'>Bathrooms</label><br />
                        <input
                            type="number"
                            value={this.state.bathrooms}
                            onChange={this.update('bathrooms')}
                            className='property-input'
                            placeholder='Enter # bathrooms'
                        />
                        </div>
                        
                        <div>
                        <label className='home-input-field'>Square Footage</label><br />
                        <input
                            type="number"
                            value={this.state.sqft}
                            onChange={this.update('sqft')}
                            className='property-input'
                            placeholder='Enter square footage'
                        />
                        </div>
                        
                        <div>
                        <label className='home-input-field'>Price</label><br />
                        <input
                            type="number"
                            value={this.state.price}
                            onChange={this.update('price')}
                            className='property-input'
                            placeholder='Enter asking price'

                        />
                        </div>
                    </div>
                    <div className='description-input'>
                        <div>
                            <label className='home-input-field'>Description</label><br />
                            <textarea
                                value={this.state.description}
                                onChange={this.update('description')}
                                className='property-textarea'
                                placeholder='Enter description'
                            />
                        </div>
                    </div>
                    <input className='create-submit' type="submit" value='Post Home' />

                    
                </form>
            </div>

        )
    }
}

export default PropertyForm;