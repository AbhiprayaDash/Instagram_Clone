import passport from "passport";
import dotenv from "dotenv";
import strategy from "passport-facebook";


const UserController = () =>{
    const FacebookStrategy = strategy.Strategy;
    passport.serializeUser(function(user, done) {
    done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
    done(null, obj);
    });
    passport.use(
    new FacebookStrategy(
        {
        clientID: '1706771532862410',
        clientSecret: '75032622d20fbed46918861198c93a74',
        callbackURL: 'http://localhost:9000/v1/home',
        profileFields: [ "name"]
        },
        function(accessToken, refreshToken, profile, done) {
            console.log(accessToken,profile)
            done(null, profile);
        }
    )
    );
}

export default UserController
