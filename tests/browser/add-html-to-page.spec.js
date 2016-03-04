/*eslint-env browser, jquery, jasmine, mocha */

describe('Add HTML to page', () => {

  beforeEach(() => {
    let html = window.__html__['browser/test-context.html'];
    document.body.innerHTML = html;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });


  it('should add html to jQuery object', () => {
    let $context = jQuery('.context');
    let content = 'test content' + Date.now();

    $context.html(content);

    expect($context.html()).to.equal(content);
  });
});
