$('p').hide()

$('#calc').click(() => {
    event.preventDefault()
    console.log($('#inputMilhas').val())
    const metros = 1609.34 * milhas
    $('#inputMetros').val(metros)
    if ($('#inputMilhas').val() === '') {
        $('p').show()
        $('#inputMetros').val('')
    } else {
        $('p').hide()
    }
})