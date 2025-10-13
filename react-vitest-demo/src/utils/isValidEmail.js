export function isValidEmail(mail) {
    if (mail.includes("@") && mail.includes (".com")) {
        return true
    }
    else{
        return false
    }
    
}