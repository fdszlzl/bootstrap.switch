$(function () {
    $.fn.switch = function (options) {
        var _default = {
            'onClass': 'btn-success',
            'offClass': 'btn-danger',
            'onText': 'On',
            'offText': 'Off'
        };
        options = $.extend(_default, options);
        var $button_on = "<button class='bootstrap-btn-switch bootstrap-btn-switch-on btn btn-default " + options.onClass + "'>" + options.onText + "</button>";
        var $button_off = "<button class='bootstrap-btn-switch bootstrap-btn-switch-off btn btn-default " + options.offClass + "'>" + options.offText + "</button>";
        var $button_none = "<button class='bootstrap-btn-switch bootstrap-btn-switch-none btn btn-default'>&nbsp;&nbsp;&nbsp;&nbsp;</button>";
        this.each(function () {
            var $after = this.checked ? $button_on + $button_none : $button_none + $button_off;
            $(this)
                .hide()
                .wrap('<div class="btn-group bootstrap-switch">')
                .after($after);
        });
        $(document).on("click", ".bootstrap-btn-switch-none", function () {
            var $parent = $(this).parent('.bootstrap-switch');
            if ($parent.find(".bootstrap-btn-switch-on").length > 0) {
                $parent.find(".bootstrap-btn-switch").remove();
                $parent.append($button_none + $button_off);
                $parent.find("input[type='checkbox']").attr("checked", false).change();
            }
            else {
                $parent.find(".bootstrap-btn-switch").remove();
                $parent.append($button_on + $button_none);
                $parent.find("input[type='checkbox']").attr("checked", true).change();
            }
        });
        return this;
    }
});