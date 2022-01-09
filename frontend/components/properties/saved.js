import React, { Component } from 'react'
import PropertyIndexItem from './property_index_item'

export default class Saved extends Component {
    constructor(props) {
        super(props)
        this.state = { rerender: false }
    }

    componentDidMount() {
        const {saves} = this.props;
        
        if (saves.length !== 0) {
            this.props.fetchProperties({ saved_ids: this.props.saves, minPrice: '', maxPrice: '' })
        } else {
            this.props.fetchProperties({ saved_ids: [], has_saves: false, minPrice: '', maxPrice: '' })
        }
    }

    //when the react component gets new props ie when the user unlikes a property 
    //grab the properties again based on the new users saves array 
    //since props changed, this will cause a rerender 
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
           const {saves} = this.props;
            if (saves.length !== 0) {
                this.props.fetchProperties({ saved_ids: this.props.saves, minPrice: '', maxPrice: '' })
            } else {
                this.props.fetchProperties({ saved_ids: [], has_saves: false, minPrice: '', maxPrice: '' })
            }
        }
    }

    render() {
        const { properties, currentUser, openModal, makeSave, removeSave } = this.props;
        return (
            <div className="saved-index-container">
                <div className='saved-index-header'>Saved homes</div>
                <div className='saved-index'>    
                    {properties.map(
                        property => <PropertyIndexItem 
                                        saved={true}
                                        key={property.id} 
                                        property={property} 
                                        currentUser={currentUser}
                                        makeSave={makeSave}
                                        removeSave={removeSave}
                                        openModal={openModal}
                                    />
                    ) }
                </div>
            </div>
        )
    }
}
