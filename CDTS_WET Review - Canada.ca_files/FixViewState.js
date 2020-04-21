$(document).ready(function()
{
    if (typeof __doPostBack == "function")
    {
        var __doPostBack_original = __doPostBack;

        __doPostBack = function(eventTarget, eventArgument)
        {
            $("form").each(function()
            {
                var viewStates = $(this).find("[name='__VIEWSTATE']");

                if (viewStates.length > 1)
                {
                    viewStates.slice(0, viewStates.length - 1).remove();
                }
            });

            __doPostBack_original(eventTarget, eventArgument);
        }
    }
});