import { ID , Client, Storage , Databases , Query } from "appwrite";
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
    deletePicture = async(pID) => {
        try {
            return await this.storage.deleteFile(
                config.appWriteStorageID,
                pID
            )
        } catch (error) {
            throw error;
        }
    }
    getPicture = async(pID) => {
        try {
            return this.storage.getFilePreview(
                config.appWriteStorageID,
                pID
            )
        } catch (error) {
            throw error;
        }
    }
    createAd = async({title,content,author,authorName,image,price,category}) => {
        try {
            return await this.databases.createDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                ID.unique(),
                {
                    title,
                    content,
                    author,
                    authorName,
                    image,
                    price,
                    category
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
    editAd = async({adID,title,content,image,price,category}) => {
        try {
            return await this.databases.updateDocument(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                adID,
                {
                    title,
                    content,
                    image,
                    price,
                    category
                }
            )
        } catch (error) {
            throw error;
        }
    }
    getAds = async ({ limit = 4, offset = 0 }) => {
        try {
            return await this.databases.listDocuments(
                config.appWriteDatabaseID,
                config.appWriteCollectionID,
                [
                    Query.limit(limit),
                    Query.offset(offset)
                ]
            );
        } catch (error) {
            throw error;
        }
    }
    getAd = async(adID) => {
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