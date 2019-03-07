export interface ResourceType {
    isIframe: boolean;
    isForm?: boolean;
    isScript?: boolean;
    isEventSource?: boolean;
    isHtmlImport?: boolean;
    isWebSocket?: boolean;
}

export interface ParsedUrl {
    protocol: string;
    host: string;
    hostname: string;
    port: string;
    partAfterHost?: string;
    username?: string;
    password?: string;
}

export interface RequestDescriptor {
    sessionId: string;
    resourceType: string;
    charset?: string;
    reqOrigin?: string;
}

export interface ParsedProxyUrl {
    destUrl: string;
    destResourceInfo: ParsedUrl;
    partAfterHost: string;
    sessionId: string;
    resourceType: string;
    charset?: string;
    reqOrigin?: string;
    proxy: {
        hostname: string;
        port: string;
    };
}