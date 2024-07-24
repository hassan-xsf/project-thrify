import { ID , Client, Account } from "appwrite";
import {config} from './config'

class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(config.appWriteURL)
            .setProject(config.appWriteProjectID)
        this.account = new Account(this.client)
    }
    createAccount = async({username,email,password}) => {
        try {
            const id = ID.unique();
            const user = await this.account.create(id,email,password,username)
            if(user) await this.loginAccount({email,password})
            return user;
            
        } catch (error) {
            throw error;
        }
    }
    loginAccount = async({email,password}) => {
        try {
            return await this.account.createEmailPasswordSession(
                email,
                password
            )
        } catch (error) {
            throw error;
        }
    }
    logoutAccount = async() => {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
    getUser = async() => {
        try {
            return await this.account.get();
        } catch (error) {
            throw error;
        }
    }
}
export const Auth = new AuthService();