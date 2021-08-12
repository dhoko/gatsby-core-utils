import { OutgoingHttpHeaders, Agent } from "http";
import { GatsbyCache } from "gatsby";
export interface IFetchRemoteFileOptions {
    url: string;
    cache: GatsbyCache;
    auth?: {
        htaccess_pass?: string;
        htaccess_user?: string;
    };
    httpOptions?: {
        auth?: string;
        agent?: {
            http?: Agent;
            https?: Agent;
        };
    };
    httpHeaders?: OutgoingHttpHeaders;
    ext?: string;
    name?: string;
}
export declare function fetchRemoteFile({ url, cache, auth, httpOptions, httpHeaders, ext, name, }: IFetchRemoteFileOptions): Promise<string>;
