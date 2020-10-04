/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ProductList from '../src/Pages/ProductList';

it('renders correctly', () => {
  renderer.create(<App />);
});


// it('renders the loading component when the app is first rendered', () => {
//   const rendered = renderer.create(<App />);
//   const TeamsListRendered = rendered.root.findByType(ProductList);
//   const ActivityIndicatorRendered = TeamsListRendered.findByType(ActivityIndicator);
//   expect(ActivityIndicatorRendered).toBeTruthy();
// });