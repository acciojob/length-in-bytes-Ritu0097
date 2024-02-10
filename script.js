function shortcut(str1, str2) {
    if (str1 === '' || str2 === '') {
        return '';
    } else {
        return str1.charAt(0).toUpperCase() + str2.charAt(0).toLowerCase();
    }
}