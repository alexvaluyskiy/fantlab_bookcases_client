import React        from 'react';
import TestUtils    from 'react-addons-test-utils';
import BookcaseItem from 'components/BookcaseItem';

function shallowRender (component) {
  const renderer = TestUtils.createRenderer();

  renderer.render(component);
  return renderer.getRenderOutput();
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<BookcaseItem {...props} />);
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<BookcaseItem {...props} />);
}

describe('(Component) BookcaseItem', function () {
  let _component, _rendered, _props;

  beforeEach(function () {
    _props = {
      bookcase : {
        "bookcount":10,
        "name":"Just a bookcase",
        "group":"work",
        "description":"My bookcase",
        "order":2,
        "user_id":1,
        "bookcase_id":1,
        "type":"default"
      }
    };

    _component = shallowRenderWithProps(_props);
    console.log(_component);
    _rendered  = renderWithProps(_props);
    console.log(_rendered);
  });

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div');
  });
});
