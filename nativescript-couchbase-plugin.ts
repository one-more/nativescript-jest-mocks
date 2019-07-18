export abstract class Common {
    ios: any;
    android: any;
    config: any;
    constructor(databaseName: string) {}
    abstract createDocument(data: Object, documentId?: string): any;
    abstract getDocument(documentId: string): any;
    abstract updateDocument(documentId: string, data: any): any;
    abstract deleteDocument(documentId: string): any;
    abstract destroyDatabase(): any;
    abstract query(query: Query): any[];
    abstract createPullReplication(remoteUrl: string): any;
    abstract createPushReplication(remoteUrl: string): any;
    abstract createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both'): any;
    abstract addDatabaseChangeListener(callback: any): any;
    abstract inBatch(batch: () => void): any;
    abstract setBlob(id: string, name: string, blob: any, mimeType: string): any;
    abstract getBlob(id: string, name: string): any;
}
export abstract class ReplicatorBase {
    replicator: any;
    constructor(replicator: any) {}
    abstract start(): any;
    abstract stop(): any;
    abstract isRunning(): any;
    abstract setContinuous(isContinuous: boolean): any;
    abstract setUserNameAndPassword(username: string, password: string): any;
    abstract setSessionIdAndCookieName(sessionId: string, cookieName: string): any;
    abstract setSessionId(sessionId: string): any;
}
export enum QueryMeta {
    ALL = "COUCHBASE_ALL",
    ID = "COUCHBASE_ID",
}
export type QueryComparisonOperator = 'modulo' | 'is' | 'between' | 'isNot' | 'collate' | 'in' | 'add' | 'isNullOrMissing' | 'greaterThan' | 'divide' | 'notEqualTo' | 'greaterThanOrEqualTo' | 'like' | 'subtract' | 'lessThanOrEqualTo' | 'lessThan' | 'notNullOrMissing' | 'regex' | 'equalTo' | 'multiply';
export enum QueryLogicalOperator {
    AND = "and",
    OR = "or",
}
export enum QueryArrayOperator {
    CONTAINS = "contains",
}
export interface Query {
    select: any[];
    where?: any[];
    groupBy?: any;
    order?: QueryOrderItem[];
    limit?: any;
    offset?: any;
    from?: string;
}
export interface QueryWhereItem {
    logical?: QueryLogicalOperator;
    property: string;
    comparison: QueryComparisonOperator;
    value: any;
}
export interface QueryOrderItem {
    property: string;
    direction: 'asc' | 'desc';
}
export abstract class BlobBase {
    blob: any;
    readonly ios: any;
    readonly android: any;
    readonly content: any;
    readonly contentStream: any;
    readonly contentType: string;
    readonly length: number;
    readonly digest: string;
    readonly properties: Map<string, any>;
    constructor(blob: any) {}
}

class BlobMock implements Blob {
    readonly size: number;
    readonly type: string;
    slice(start?: number, end?: number, contentType?: string): Blob {
        return this
    }
}

export class Couchbase extends Common {
    config: any;
    android: any;
    ios: any;

    constructor(name: string) {
        super(name)
    }

    createDocument(data: Object, documentId?: string): any {}

    setBlob(id: string, name: string, blob: any, mimeType?: string): void {}

    getBlob(id: string, name: string): Blob {
        return new BlobMock()
    }

    getDocument(documentId: string): any {}

    updateDocument(documentId: string, data: any): void {}

    deleteDocument(documentId: string): any {}

    destroyDatabase(): void {}

    query(query?: Query): any[] {
        return []
    }

    createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both'): Replicator {
        return new Replicator("")
    }

    createPullReplication(remoteUrl: string, username?: string, password?: string): Replicator {
        return new Replicator("")
    }

    createPushReplication(remoteUrl: string, username?: string, password?: string): Replicator {
        return new Replicator("")
    }

    addDatabaseChangeListener(callback: any): void {}

    inBatch(batch: () => void): void {}
}

export class Replicator extends ReplicatorBase {
    constructor(replicator: any) {
        super(replicator)
    }

    start(): void {}

    stop(): void {}

    isRunning(): boolean {
        return false
    }

    setContinuous(isContinuous: boolean): void {}

    setUserNameAndPassword(username: string, password: string): any {}

    setSessionIdAndCookieName(sessionId: string, cookieName: string): any {}

    setSessionId(sessionId: string): any {}
}

