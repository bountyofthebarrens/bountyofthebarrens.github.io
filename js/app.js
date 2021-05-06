

<script>

    $(window):scroll(function() {
       $('nav'). toggleClass('scrolled',$(this).scrollTop()>50); 
    });
</script>