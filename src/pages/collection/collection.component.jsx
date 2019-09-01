import React from 'react';

import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';

const CollectionPage = ({collection}) => (
    <div className="collection-page">
        <h2>{collection.title}</h2>
    </div>
);

const mapStateTopProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateTopProps)(CollectionPage);
