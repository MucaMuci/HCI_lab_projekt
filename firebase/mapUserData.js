export const mapUserData = (user) => {
    const { uid, email, accessToken } = user
    return {
        id: uid,
        email,
        token: accessToken,
    }
}