// Update Email Address
updateEmailAddressForm.addEventListener('submit', event => {
    event.preventDefault();

    const old_email_input = $("#old_email");
    const new_email_input = $("#new_email");

    const dataForm = {
        new_email: $(new_email_input).val(),
        old_email: $(old_email_input).val(),
        id: $("#candidate_id").val()
    };

    const email = $("#email");
    const force_update_email_btn = $("#force_update_email_btn");

    const error_message = $("#error_message_email_update");
    const success_message = $("#success_message_email_update");
    const loader = $(error_message).siblings('.custom-loader');

    $(success_message).hide()
    $(error_message).hide()
    $(loader).show();

    $.ajax({
        url: updateEmailAddressForm.action,
        method: 'POST',
        data: dataForm,
        success: function(response) {
            if (response.fail !== null && response.fail !== undefined) {
                setTimeout(() => failedUpdateAction(success_message, error_message, loader, response, force_update_email_btn), 1000);
            } else {
                setTimeout(() => successUpdateAction(loader, force_update_email_btn, new_email_input, old_email_input, error_message, success_message, email, dataForm), 1000);
            }
        },
        error: function(err) {
            $(error_message).text(JSON.parse(err.responseText).errors.new_email);
            setTimeout(() => failedValidationAction(success_message, error_message, loader, JSON.parse(err.responseText).errors.new_email), 1000);
        }
    });
});

// Update IC Number
updateIcNumberForm.addEventListener('submit', event => {
    event.preventDefault();

    const old_ic_input = $("#old_ic_number");
    const new_ic_input = $("#new_ic_number");

    const dataForm = {
        new_ic_number: $(new_ic_input).val(),
        old_ic_number: $(old_ic_input).val(),
        id: $("#candidate_id").val()
    };

    const ic_number = $("#ic_number");
    const force_update_ic_btn = $("#force_update_ic_btn");

    const error_message = $("#error_message_ic_number_update");
    const success_message = $("#success_message_ic_number_update");
    const loader = $(error_message).siblings('.custom-loader');
    
    $(success_message).hide()
    $(error_message).hide()
    $(loader).show();

    $.ajax({
        url: updateIcNumberForm.action,
        method: 'POST',
        data: dataForm,
        success: function(response) {
            if (response.fail !== null && response.fail !== undefined) {
                setTimeout(() => failedUpdateAction(success_message, error_message, loader, response, force_update_ic_btn), 1000);
            } else {
                setTimeout(() => successUpdateAction(loader, force_update_ic_btn, new_ic_input, old_ic_input, error_message, success_message, ic_number, dataForm), 1000);
            }
        }, error: function(err) {
            setTimeout(() => failedValidationAction(success_message, error_message, loader, JSON.parse(err.responseText).errors.new_ic_number), 1000);
        }
    });
});

// Force Update IC Number
function forceUpdateIcNumber(event) {
    event.preventDefault();

    const force_update_ic_number_url = $("#force_update_ic_number_url").val();

    const old_ic_input = $("#old_ic_number");
    const new_ic_input = $("#new_ic_number");

    const dataForm = {
        new_ic_number: $(new_ic_input).val(),
        old_ic_number: $(old_ic_input).val(),
        id: $("#candidate_id").val()
    };

    const ic_number = $('#ic_number');
    const force_update_ic_btn = $('#force_update_ic_btn');

    const error_message = $("#error_message_ic_number_update");
    const success_message = $("#success_message_ic_number_update");
    const loader = $(error_message).siblings('.custom-loader');

    $(success_message).hide()
    $(error_message).hide()
    $(loader).show();

    $.ajax({
        url: force_update_ic_number_url,
        method: 'POST',
        data: dataForm,
        success: function(response) {
            if (response.fail !== null && response.fail !== undefined) {
                setTimeout(() => failedUpdateAction(success_message, error_message, loader, response, force_update_ic_btn), 1000);
            } else {
                $(error_message).hide();
                setTimeout(() => successUpdateAction(loader, force_update_ic_btn, new_ic_input, old_ic_input, error_message, success_message, response, ic_number, dataForm), 1000);
            }
        },
        error: function(err) {
            setTimeout(() => failedValidationAction(success_message, error_message, loader, JSON.parse(err.responseText).errors.new_ic_number), 1000);
        }
    });
}
        
// Force Update Email
function forceUpdateEmail(event) {
    event.preventDefault();

    const force_update_email_url = $("#force_update_email_url").val();

    const new_email_input = $('#new_email');
    const old_email_input = $('#old_email');

    const dataForm = {
        new_email: $('#new_email').val(),
        old_email: $('#old_email').val(),
        id: $("#candidate_id").val()
    };

    const email = $('#email');
    const force_update_email_btn = $("#force_update_email_btn");

    const error_message = $("#error_message_email_update");
    const success_message = $("#success_message_email_update");
    const loader = $(error_message).siblings('.custom-loader');

    $(success_message).hide()
    $(error_message).hide()
    $(loader).show();

    $.ajax({
        url: force_update_email_url,
        method: 'POST',
        data: dataForm,
        success: function(response) {
            if (response.fail !== null && response.fail !== undefined) {
                setTimeout(() => failedUpdateAction(success_message, error_message, loader, response, force_update_email_btn), 1000);
            } else {
                $(error_message).hide();
                setTimeout(() => successUpdateAction(loader, force_update_email_btn, new_email_input, old_email_input, error_message, success_message, response, email, dataForm), 1000);
            }
        },
        error: function(err) {
            setTimeout(() => failedValidationAction(success_message, error_message, loader, JSON.parse(err.responseText).errors.new_email), 1000);
        }
    });
}

function successUpdateAction(loader, force_update_ic_number, new_update_input, old_update_input, error_message, success_message, response, originalInput, dataForm) {
    $(loader).hide();
    $(force_update_ic_number).hide();
    $(new_update_input).val("");
    $(old_update_input).val(dataForm.new_ic_number);
    $(error_message).hide()
    $(success_message).text(response.success).show();
    $(originalInput).text(dataForm.new_ic_number);
}

function failedUpdateAction(success_message, error_message, loader, response, force_update_btn) {
    $(success_message).hide();
    $(loader).hide();
    $(error_message).text(response.fail).show();
    $(force_update_btn).show();
}

function failedValidationAction(success_message, error_message, loader, response) {
    $(success_message).hide();
    $(loader).hide();
    $(error_message).text(response).show();
}
