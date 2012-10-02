(function($) {

    module("jquery-toctree");

    test("toctree() default option", function() {

        var source =
            '<h1>Header1</h1>' +
            '<h2>Header2</h2>' +
            '<h3>Header3</h3>' +
            '<h4>Header4</h4>' +
            '<h5>Header5</h5>' +
            '<h6>Header6</h6>';

        var toc =
            '<ul>' +
                '<li>' +
                    '<a href="#toctree-1">Header1</a>' +
                    '<ul>' +
                        '<li>' +
                            '<a href="#toctree-1-1">Header2</a>' +
                            '<ul><li><a href="#toctree-1-1-1">Header3</a></li></ul>' +
                        '</li>' +
                    '</ul>' +
                '</li>' +
            '</ul>';

        var content =
            '<a id="toctree-1"></a><h1>Header1</h1>' +
            '<a id="toctree-1-1"></a><h2>Header2</h2>' +
            '<a id="toctree-1-1-1"></a><h3>Header3</h3>' +
            '<h4>Header4</h4>' +
            '<h5>Header5</h5>' +
            '<h6>Header6</h6>';

        $("#qunit-fixture").html('<div id="toc"></div><div id="content">' + source + '</div>');
        var $toc = $("#toc");
        $toc.toctree({ selector: '#content :header' });
        deepEqual($toc.html(), toc, 'equals #toc html');
        deepEqual($('#content').html(), content, 'equals #content html');
    });

    test("toctree() depth: 2", function() {

        var source =
            '<h1>Header1</h1>' +
            '<h2>Header2</h2>' +
            '<h3>Header3</h3>' +
            '<h4>Header4</h4>' +
            '<h5>Header5</h5>' +
            '<h6>Header6</h6>';

        var toc =
            '<ul>' +
                '<li>' +
                    '<a href="#toctree-1">Header1</a>' +
                    '<ul>' +
                        '<li>' +
                            '<a href="#toctree-1-1">Header2</a>' +
                        '</li>' +
                    '</ul>' +
                '</li>' +
            '</ul>';

        var content =
            '<a id="toctree-1"></a><h1>Header1</h1>' +
            '<a id="toctree-1-1"></a><h2>Header2</h2>' +
            '<h3>Header3</h3>' +
            '<h4>Header4</h4>' +
            '<h5>Header5</h5>' +
            '<h6>Header6</h6>';

        $("#qunit-fixture").html('<div id="toc"></div><div id="content">' + source + '</div>');
        var $toc = $("#toc");
        $toc.toctree({ selector: '#content :header', depth: 2 });
        deepEqual($toc.html(), toc, 'equals #toc html');
        deepEqual($('#content').html(), content, 'equals #content html');
    });

    test("toctree() offset: 1", function() {

        var source =
            '<h1>Header1</h1>' +
            '<h2>Header2</h2>' +
            '<h3>Header3</h3>' +
            '<h4>Header4</h4>' +
            '<h5>Header5</h5>' +
            '<h6>Header6</h6>';

        var toc =
            '<ul>' +
                '<li>' +
                    '<a href="#toctree-1">Header2</a>' +
                    '<ul>' +
                        '<li>' +
                            '<a href="#toctree-1-1">Header3</a>' +
                            '<ul><li><a href="#toctree-1-1-1">Header4</a></li></ul>' +
                        '</li>' +
                    '</ul>' +
                '</li>' +
            '</ul>';

        var content =
            '<h1>Header1</h1>' +
            '<a id="toctree-1"></a><h2>Header2</h2>' +
            '<a id="toctree-1-1"></a><h3>Header3</h3>' +
            '<a id="toctree-1-1-1"></a><h4>Header4</h4>' +
            '<h5>Header5</h5>' +
            '<h6>Header6</h6>';

        $("#qunit-fixture").html('<div id="toc"></div><div id="content">' + source + '</div>');
        var $toc = $("#toc");
        $toc.toctree({ selector: '#content :header', offset: 1 });
        deepEqual($toc.html(), toc, 'equals #toc html');
        deepEqual($('#content').html(), content, 'equals #content html');
    });

    test("toctree() option", function() {

        var source =
            '<h1>Title</h1>' +
            '<h2>Header1</h2>' +
            '<h2>Header2</h2>' +
            '<h3>Header2-1</h3>' +
            '<h2>Header3</h2>' +
            '<h3>Header3-1</h3>' +
            '<h3>Header3-2</h3>' +
            '<h4>unlinked</h4>';

        var toc =
            '<ul>' +
                '<li><a href="#toctree-1">Header1</a></li>' +
                '<li>' +
                    '<a href="#toctree-2">Header2</a>' +
                    '<ul>' +
                        '<li>' +
                            '<a href="#toctree-2-1">Header2-1</a>' +
                        '</li>' +
                    '</ul>' +
                '</li>' +
                '<li>' +
                    '<a href="#toctree-3">Header3</a>' +
                    '<ul>' +
                        '<li><a href="#toctree-3-1">Header3-1</a></li>' +
                        '<li><a href="#toctree-3-2">Header3-2</a></li>' +
                    '</ul>' +
                '</li>' +
            '</ul>';

        var content =
            '<h1>Title</h1>' +
            '<a id="toctree-1"></a><h2>Header1</h2>' +
            '<a id="toctree-2"></a><h2>Header2</h2>' +
            '<a id="toctree-2-1"></a><h3>Header2-1</h3>' +
            '<a id="toctree-3"></a><h2>Header3</h2>' +
            '<a id="toctree-3-1"></a><h3>Header3-1</h3>' +
            '<a id="toctree-3-2"></a><h3>Header3-2</h3>' +
            '<h4>unlinked</h4>';

        $("#qunit-fixture").html('<div id="toc"></div><div id="content">' + source + '</div>');
        var $toc = $("#toc");
        $toc.toctree({ selector: '#content :header', offset: 1, depth: 2, prefix: '' });
        deepEqual($toc.html(), toc, 'equals #toc html');
        deepEqual($('#content').html(), content, 'equals #content html');
    });

})(jQuery);
