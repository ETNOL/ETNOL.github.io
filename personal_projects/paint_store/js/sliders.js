$('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_bar_selector": ".bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        var $container = $(this).parent(),
            g = 255 - 127 + leftValue,
            r = 255 - g,
            b = 0;
        $container.find('.leftLabel').text(leftValue);
        $(this).find('.bar').css('background', 'rgb(' + [r, g, b].join(',') + ')');
    }
});
