import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TopicsList = (props) => {
    console.log(props)
    return (<div>
        <h1>TOPICS LIST</h1>
    </div>);
};

function App() {
    return <div>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop/hats" component={TopicsList}/>
        {/*<Route path="/topics/:topicId" component={TopicDetail}/>*/}
    </div>;
}

export default App;
