import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom'

import Home from './pages/home';
import About from './pages/about';
import Services from './pages/services';
import Accomodations from './pages/accomodations';
import Veterans from './pages/veterans';
import TheCottage from './pages/the-cottage';
import ContactUs from './pages/contact-us';

import Layout from './Layout';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: Home,
    title: 'A Place To Call Home',
    bannerImg: '/images/banners/home-new.jpg',
  },
  {
    path: '/about',
    label: 'About',
    title: 'A Place With History',
    bannerImg: '/images/banners/sign-new.jpg',
    component: About,
  },
  {
    path: '/services',
    label: 'Services',
    component: Services,
    title: 'A Place for Care',
    bannerImg: '/images/banners/services-new.jpg'
  },
  {
    path: '/accomodations',
    label: 'Accomodations',
    component: Accomodations,
    title: 'A Perfect Fit',
    bannerImg: '/images/banners/room.jpg',
  },
  {
    path: '/veterans',
    label: 'Veterans',
    component: Veterans,
    title: 'A Place for Vets',
    bannerImg: '/images/banners/vets.jpg',
  },
  {
    path: '/the-cottage',
    label: 'The Cottage',
    title: 'The Cottage at Century Pines',
    component: TheCottage,
    bannerImg: '/images/banners/cottage.jpg',

  },
  {
    path: '/contact-us',
    label: 'Contact Us',
    title: 'Contact Century Pines',
    bannerImg: '/images/banners/contact.jpg',
    component: ContactUs,
  }
]


const DefaultLayout = ({component: Component, ...rest}) => {
  return (
    <Route {...rest} render={matchProps => (
      <Layout {...matchProps} {...rest}>
        <Component {...matchProps} />
      </Layout>
    )} />
  )
};

const App = () => (
  <Router>
    <div>
      {routes.map(route=>{
        return (
          <DefaultLayout exact key={route.path} {...route}/>
        )
      })}
    </div>
  </Router>
)
export default App