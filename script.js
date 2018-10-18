jQuery(function($){
	$('#view-toggle').click(function () {
		if ($(this).text() == 'Card') {
			$('#card-container').hide();
			$('#table-container').show();
			$(this).text('Grid');
		} else {
			$('#table-container').hide();
			$('#card-container').show();
			$(this).text('Card');
		}
	});

	$('#theme-toggle').click(function () {
		if ($(this).text() == 'Dark') {
			$(this).text('Light');
		} else {
			$(this).text('Dark');
		}
	});

	$('.table').footable({
		toggleColumn: "last",
		columns: [
			{ name: "title", title: "Title", formatter: (val, op, row) => `<a href='${row.storyURL}' target='_blank'>${val}</a>` },
			{ name: "author", title: "Author", breakpoints: "xs" },
			{ name: "rating", title: "Rating", breakpoints: "xs sm" },
			{ name: "store", title: "Store", breakpoints: "xs sm md", formatter: (val, op, row) => `<a href='${row.storyURL}' target='_blank'>${val}</a>` },
			{ name: "notes", title: "Notes", breakpoints: "xs sm md" },
			{ name: "storyURL", visible: false },
			{ name: "storeURL", visible: false }
		],
		rows: data
	});
});
