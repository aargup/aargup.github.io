document.onkeydown = function (e) {
    if (e.ctrlKey &&
        (e.keyCode > 1)) {
        alert('not allowed');
        return false;
    } else {
        return true;
    }
};