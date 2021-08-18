let cloneNode = $('.radio_item').eq(0).clone(true);
let wrapper = $('<fieldset></fieldset>');
wrapper.append(cloneNode);
$('.radio_item').eq(0).replaceWith(wrapper)