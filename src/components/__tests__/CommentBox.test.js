import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterAll(() => {
    wrapped.unmount();
});

it('has a text area and a two buttons', () => {
    expect(wrapped.find('textarea').length).toBe(1);
    expect(wrapped.find('button').length).toBe(2);
});


describe('text area', () => {
    beforeEach(() => {
        wrapped
            .find('textarea').simulate('change', {
                target: { value: 'new comment' }
            })
            .update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    it('when form is submitted, text area gets emptied', () => {
        wrapped
            .find('form')
            .simulate('submit')
            .update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
});