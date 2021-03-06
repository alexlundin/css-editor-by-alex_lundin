( function( global, $ ) {
    var editor,
        syncCSS = function() {
            $( '#custom_css_textarea' ).val( editor.getSession().getValue() );
        },
        loadAce = function() {
            editor = ace.edit( 'custom_css' );
            global.safecss_editor = editor;
            editor.getSession().setUseWrapMode( true );
            editor.setShowPrintMargin( false );
            editor.getSession().setValue( $( '#custom_css_textarea' ).val() );
            editor.getSession().setMode( "ace/mode/css" );
            editor.setTheme("ace/theme/monokai");
            jQuery.fn.spin&&$( '#custom_css_container' ).spin( false );
            $( '#custom_css_form' ).submit( syncCSS );
        };

        $( global ).load( loadAce );

    global.aceSyncCSS = syncCSS;
} )( this, jQuery );