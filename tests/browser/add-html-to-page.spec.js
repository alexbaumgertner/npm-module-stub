describe('Add HTML to page', () => {

  beforeEach(() => {
    let html = window.__html__['tests/browser/test-context.html'];
    document.body.innerHTML = html;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });


  it('should add html to jQuery object', () => {
    var $context = jQuery('.context');
    var content = 'test content' + Date.now();

    $context.html(content);

    expect($context.html()).to.equal(content);
  });
});
