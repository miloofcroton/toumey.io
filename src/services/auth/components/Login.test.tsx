/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Login from './Login';

describe('Login', () => {
  test('renders the h1 title', () => {
    const login = shallow(<Login />);
    expect(login.find('h1').text()).toEqual('Login');
  });

  test('renders the form', () => {
    const login = shallow(<Login />);
    expect(login.find('form')).toHaveLength(1);
  });

  test('changes the text of email', () => {
    const login = shallow(<Login />);
    login.find('#formEmail').simulate('change', {
      target: {
        name: 'email',
        value: 'some@test.com',
      },
    });
    expect(
      login
        .update()
        .find('#formEmail')
        .props().value
    ).toEqual('some@test.com');
  });

  test('changes the text of login button after clicking it', () => {
    const login = shallow(<Login />);
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    login.find('#loginSubmit').simulate('click', { preventDefault() {} });
    expect(
      login
        .update()
        .find('#loginSubmit')
        .text()
    ).toEqual('Logging in...');
  });
});
