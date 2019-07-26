import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as MdmmActions from './actions/actionsMdmms';




import NavigationBar from './components/NavigationBar'
import SearchForm from './components/SearchForm'
import MdmmTable from './components/MdmmTable'
import Footer from './components/Footer'

import './App.css';

const AddForm = () => <div>AddForm</div>;
const EditForm = () => <div>EditForm</div>;

const title = '「致知」顧客情報参照システム'
const footer = 'Chichi Publishing Co.,Ltd. © 2019'

const data = [
  {id: 1, name: 'Ichiro Suzuki aaaaaa', address: 'Miami', zip: '100-1000'},
  {id: 2, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 3, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 4, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 5, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 6, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 7, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 8, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 9, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 10, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 11, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 12, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 13, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 14, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 15, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 16, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 17, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 18, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 19, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 20, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 21, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 22, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 23, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 24, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
  {id: 25, name: 'Ichiro Suzuki', address: 'Miami', zip: '100-1000'},
  {id: 26, name: 'Masahiro Tanaka', address: 'NewYork', zip: '110-1100'},
  {id: 27, name: 'Dal Yu', address: 'Texas', zip: '111-1110'},
]

const App = (props) => (
    <>
      <div className="app">

        <Helmet htmlAttributes={{ lang: 'ja' }}>
          <title>{title}</title>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Helmet>

        <NavigationBar title={title} />

        <div className="app-body">

          <div className="app-body-header">
            <SearchForm mdmms={props.mdmms} mdmmSearch={props.mdmmSearch}/>
          </div>
          <button onClick={() => props.mdmmSearch('20977473')}>test dispatch①</button>

          <div className="app-body-container">
            <Route exact path='/' render={() => <MdmmTable data={data} mdmms={props.mdmms} />} />
            <Route exact path='/AddForm' component={AddForm} />
            <Route exact path='/EditForm' component={EditForm} />
          </div>

        </div>

        <Footer footer={footer} />

      </div>
    </>
)

function mapStateToProps(state) {
  return {
    mdmms: state.mdmms
  }
}

function mapDispatchToProps(dispatch) {
  return {
    mdmmSearch: bindActionCreators(MdmmActions.GetMdmms.start, dispatch),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
