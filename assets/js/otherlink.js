require(["gitbook","jquery"],function(gitbook,$){function fixSummaryLinks(){fixLinks($(".book-summary nav li a"))}function fixPageLinks(){fixLinks($(".book-body a"))}function fixLinks($links){var bookRoot=gitbook.state.bookRoot;if(!/\/$/.test(bookRoot)){bookRoot+="/"}$links.each(function(index,link){var $link=$(link),href=$link.attr("href");if(/^ref:\/\//.test(href)){$link.attr("href",bookRoot+href.replace(/^ref:\/\//,""))}})}gitbook.push(function(){fixSummaryLinks();fixPageLinks()});gitbook.events.on("page.change",function(){fixSummaryLinks();fixPageLinks()})});