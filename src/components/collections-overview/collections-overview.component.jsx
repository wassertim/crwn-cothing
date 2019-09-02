import React from 'react';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import {connect} from 'react-redux';
import {CollectionsOverviewContainer} from './collections-overview.styles';

const CollectionsOverview = ({collections}) => (
    <CollectionsOverviewContainer>
        {collections.map(({id, ...otherCollectionProps}) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
