module.exports = {
    checkResponsive: () => {
        if (window.innerWidth < 900) {
            return true;
        } else {
            return false;
        }
    }
}