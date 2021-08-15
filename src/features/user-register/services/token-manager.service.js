class TokenManagerService {
    isThereAccessToken() {
        if (localStorage.getItem("user")) {
            return true;
        }
        return false;
    }

    manageTheCurrentToken() {
        const currentDate = Math.floor( Math.floor(Date.now()) / 1000);
        const accessTokenExpiration = parseInt(JSON.parse(localStorage.getItem("user")).expirationTime, 10);
        const accessTokenRemainingTime = accessTokenExpiration - currentDate;
        if (this.isTheCurrentTokenExpired(accessTokenRemainingTime)) {
            this.deleteCurrentCredentials();
            window.location.reload();
        } 
    }

    isTheCurrentTokenExpired(accessTokenRemainingTime) {
        return accessTokenRemainingTime < 0;
    }
    deleteCurrentCredentials(){
        localStorage.removeItem("user");
    }
}

export default new TokenManagerService();