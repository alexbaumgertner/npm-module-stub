describe('Add HTML to page', () => {

  beforeEach(() => {
    document.body.innerHTML = window.__html__['test/browser/test-context.html'];
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
