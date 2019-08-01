import './setupTests';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../components/App';
import SearchBar from '../components/SearchBar';
import Adapter from "enzyme-adapter-react-16";


// This test to check Jest work
describe('Check Jest Work environment', () => {
    it('To Check if Jest work on our project', () => {
        expect(1 + 2).toEqual(3);
     });
  });


// Unit test App component
describe('App component Test', () => {
it('unit test For app componant', () => {
    shallow(<App />);
    });
 });


// Unit test for Search Bar component to make sure it’s rendering
describe('Search Bar Test', () => {
    test("Search Bar", () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper.exists()).toBe(true);
    });
});


// Using Snapshots test
describe('Search Bar Test by Enzyme library', () => {
    Enzyme.configure({ adapter: new Adapter() });
    test("SearchBar component", () => {
        const wrapper = shallow(<SearchBar />);
        expect(wrapper).toMatchSnapshot();
    });
});