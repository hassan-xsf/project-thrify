import { ID , Client, Storage , Databases } from "appwrite";
import {config} from './config'

class PostService {
    client = new Client();
    databases;
    storage;

    constructor() {
        this.client
            .setEndpoint(config.appWriteURL)
            .setProject(config.appWriteProjectID)
        this.databases = new Databases(this.client)
        this.storage = new Storage(this.client);
    }
    createPicture = async(file) => {
        try {
            return await this.storage.createFile(
                config.appWriteStorageID,
                ID.unique(),
                file
            )
        } catch (error) {
            throw error;
        }
    }
    deletePicture = async({pID}) => {
        try {
            return await this.storage.deleteFile(
                config.appWriteStorageID,
                pID
            )
        } catch (error) {
            throw error;
        }
    }
    getPicture = async({pID}) => {
        try {
            return this.storage.getFilePreview(
                config.appWriteStorageID,
                pID
            )
        } catch (error) {
            throw error;
        }
    }
    createAd = async({title,content,author,image}) => {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                ID.unique(),
                {
                    title,
                    content,
                    author,
                    image
                }
            )
        } catch (error) {
            throw error;
        }
    }
    deleteAd = async({adID}) => {
        try {
            return await this.databases.deleteDocument(
                config.appWriteDatabaseID,
               config.appWriteCollectionID,
                adID
            )
        } catch (error) {
            throw error;
        }
    }
    editAd = async({adID,title,content,images}) => {
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                adID,
                {
                    title,
                    content,
                    images
                }
            )
        } catch (error) {
            throw error;
        }
    }
    showAds = async() => {
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseID,
                config.appWriteCollectionID
            )
        } catch (error) {
            throw error;
        }
    }
    showAd = async({adID}) => {
        try {
            return await this.databases.getDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                adID
            )
        } catch (error) {
            throw error;
        }
    }
}

export const Post = new PostService();