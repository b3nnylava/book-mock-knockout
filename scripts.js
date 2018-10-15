$(document).ready(() => {
    $("#theme-toggle").dxSwitch({
        value: true,
        onText: 'DARK',
        offText: 'LIGHT',
        width: '75px',
        onOptionChanged: e => {
            if(e.value) {
                DevExpress.ui.themes.current('generic.darkviolet.compact');
                $('body').css('background-color','#424548');
            } else {
                DevExpress.ui.themes.current('generic.light.compact');
                $('body').css('background-color','lightgrey');
            }
        }
    });

    $("#view-toggle").dxSwitch({
        value: true,
        onText: 'CARD',
        offText: 'GRID',
        width: '75px',
        onOptionChanged: e => {
            if(e.value) {
                $('#grid-view').css('display','none');
                $('#card-view').css('display','block');
            } else {
                $('#card-view').css('display','none');
                $('#grid-view').css('display','block');
            }
        }
    });

    var viewModel = function(){
        var that = this;
        
        that.accordionOptions = {
            dataSource: listings,
            itemTemplate: "accordion-template",
            animationDuration: 300,
            collapsible: true,
            multiple: true,
            selectedItems: listings
        };
    };
    
    ko.applyBindings(new viewModel(), document.getElementById("accordion"));
});
