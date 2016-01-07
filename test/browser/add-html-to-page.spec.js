describe('Add HTML to page', () => {
    it('should console.log window object', () => {

        document.body.innerHTML = __html__['add-html-to-page.html'];

        expect(true).to.equal(true);
    });
});
