(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
            jQuery(".s-59bd003f-f396-4893-98bd-a847515fd9a8 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-59bd003f-f396-4893-98bd-a847515fd9a8 #s-Panel_1 .layoutWrapper").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-dc02a7b9-f6ad-47a8-9d09-42a578823be1 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
            jQuery(".s-d12245cc-1680-458d-89dd-4f0d7fb22724 .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#333333', opacity:'0.7', thickness:'4'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);