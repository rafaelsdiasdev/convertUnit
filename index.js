$('p').hide()

$('#calc').click(() => {
    event.preventDefault()
    const metros = 1609.34 * $('#inputMilhas').val()
    $('#inputMetros').val(metros)
    if ($('#inputMilhas').val() === '') {
        $('p').show()
        $('#inputMetros').val('')
    } else {
        $('p').hide()
    }
})