/**
 * -------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation.  All Rights Reserved.  Licensed under the MIT License.
 * See License in the project root for license information.
 * -------------------------------------------------------------------------------------------
 */
/**
 * @module LargeFileUploadTask
 */
import { Client } from "../index";
import { Range } from "../Range";
/**
 * @interface
 * Signature to representing key value pairs
 * @property {[key: string] : string | number} - The Key value pair
 */
interface KeyValuePairObjectStringNumber {
    [key: string]: string | number;
}
/**
 * @interface
 * Signature to define options for upload task
 * @property {number} [rangeSize = LargeFileUploadTask.DEFAULT_FILE_SIZE] - Specifies the range chunk size
 */
export interface LargeFileUploadTaskOptions {
    rangeSize?: number;
}
/**
 * @interface
 * Signature to represent upload session resulting from the session creation in the server
 * @property {string} url - The URL to which the file upload is made
 * @property {Date} expiry - The expiration of the time of the upload session
 */
export interface LargeFileUploadSession {
    url: string;
    expiry: Date;
}
/**
 * @interface
 * Signature to define the properties and content of the file in upload task
 * @property {ArrayBuffer | File} content - The actual file content
 * @property {string} name - Specifies the file name with extension
 * @property {number} size - Specifies size of the file
 */
export interface FileObject {
    content: ArrayBuffer | File;
    name: string;
    size: number;
}
/**
 * @class
 * Class representing LargeFileUploadTask
 */
export declare class LargeFileUploadTask {
    /**
     * @private
     * Default value for the rangeSize
     */
    private DEFAULT_FILE_SIZE;
    /**
     * @protected
     * The GraphClient instance
     */
    protected client: Client;
    /**
     * @protected
     * The object holding file details
     */
    protected file: FileObject;
    /**
     * @protected
     * The object holding options for the task
     */
    protected options: LargeFileUploadTaskOptions;
    /**
     * @protected
     * The object for upload session
     */
    protected uploadSession: LargeFileUploadSession;
    /**
     * @protected
     * The next range needs to be uploaded
     */
    protected nextRange: Range;
    /**
     * @public
     * @static
     * @async
     * Makes request to the server to create an upload session
     * @param {Client} client - The GraphClient instance
     * @param {any} payload - The payload that needs to be sent
     * @param {KeyValuePairObjectStringNumber} headers - The headers that needs to be sent
     * @returns The promise that resolves to LargeFileUploadSession
     */
    static createUploadSession(client: Client, requestUrl: string, payload: any, headers?: KeyValuePairObjectStringNumber): Promise<any>;
    /**
     * @public
     * @constructor
     * Constructs a LargeFileUploadTask
     * @param {Client} client - The GraphClient instance
     * @param {FileObject} file - The FileObject holding details of a file that needs to be uploaded
     * @param {LargeFileUploadSession} uploadSession - The upload session to which the upload has to be done
     * @param {LargeFileUploadTaskOptions} options - The upload task options
     * @returns An instance of LargeFileUploadTask
     */
    constructor(client: Client, file: FileObject, uploadSession: LargeFileUploadSession, options?: LargeFileUploadTaskOptions);
    /**
     * @private
     * Parses given range string to the Range instance
     * @param {string[]} ranges - The ranges value
     * @returns The range instance
     */
    private parseRange;
    /**
     * @private
     * Updates the expiration date and the next range
     * @param {UploadStatusResponse} response - The response of the upload status
     * @returns Nothing
     */
    private updateTaskStatus;
    /**
     * @public
     * Gets next range that needs to be uploaded
     * @returns The range instance
     */
    getNextRange(): Range;
    /**
     * @public
     * Slices the file content to the given range
     * @param {Range} range - The range value
     * @returns The sliced ArrayBuffer or Blob
     */
    sliceFile(range: Range): ArrayBuffer | Blob;
    /**
     * @public
     * @async
     * Uploads file to the server in a sequential order by slicing the file
     * @returns The promise resolves to uploaded response
     */
    upload(): Promise<any>;
    /**
     * @public
     * @async
     * Uploads given slice to the server
     * @param {ArrayBuffer | Blob | File} fileSlice - The file slice
     * @param {Range} range - The range value
     * @param {number} totalSize - The total size of a complete file
     */
    uploadSlice(fileSlice: ArrayBuffer | Blob | File, range: Range, totalSize: number): Promise<any>;
    /**
     * @public
     * @async
     * Deletes upload session in the server
     * @returns The promise resolves to cancelled response
     */
    cancel(): Promise<any>;
    /**
     * @public
     * @async
     * Gets status for the upload session
     * @returns The promise resolves to the status enquiry response
     */
    getStatus(): Promise<any>;
    /**
     * @public
     * @async
     * Resumes upload session and continue uploading the file from the last sent range
     * @returns The promise resolves to the uploaded response
     */
    resume(): Promise<any>;
}
export {};
