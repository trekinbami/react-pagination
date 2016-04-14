//packages
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import { Router, Route, Link, IndexRoute, browserHistory, Redirect } from 'react-router';

//modules
import ScoreApp from './components/ScoreApp';
import PaginationCnt from './components/PaginationCnt';
import TitleBlock from './components/TitleBlock';

//class
class App extends Component {
	constructor(){
		super();
		
		this.state = {
			filteredScores: [],
			totalScores: []
		}
	}
	
	componentWillReceiveProps(nextProps){
		this.filterScores(this.state.totalScores, nextProps.params.pageId);
	}

	filterScores(matches, pageNr){
		let perPage = 3;

		let filteredScores = matches.filter((match, i) => {
			if( (i+1) > ((perPage*pageNr)-perPage) && (i+1) <= (perPage*pageNr)){
				return match;
			}
		});

		this.setState({
			filteredScores: filteredScores
		});
	}

	componentDidMount(){
		fetch('http://'+window.location.host+'/app/public/json/scores.json')
			.then((response) => response.json())
			.then((responseData) => {

				this.setState({
					totalScores: responseData
				});

				this.filterScores(responseData, this.props.params.pageId);
			});
	}

	render(){
		return(
			<div className="container">
				<TitleBlock title="Scores" />
				<ScoreApp scores={this.state.filteredScores} pageId={this.props.params.pageId} />
				<PaginationCnt scores={this.state.totalScores} filterScores={this.filterScores.bind(this)} pageId={this.props.params.pageId} />
			</div>
		)
	}
}

ReactDOM.render((
	<Router history={browserHistory}>
		<Redirect from="/" to="/page/1" />
		<Route path="/" component={App}>
			<Route path="/page/:pageId" component={App} />
		</Route>
	</Router>), document.getElementById('root'));