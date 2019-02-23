import { RESTDataSource } from 'apollo-datasource-rest';
import { ILastFMArtist } from '../interfaces/ILastFMArtistInfo';
import { ILastFMUser } from '../interfaces/ILastFMUserInfo';
import { ILastFMUserLovedtrack } from '../interfaces/ILastFMUserLovedTracks';
import { ILastFMUserRecentTrack } from '../interfaces/ILastFMUserRecentTracks';
export default class LastFMAPI extends RESTDataSource {
    constructor();
    getUserInfo(user: string): Promise<ILastFMUser>;
    getUserLovedTracks(user: string): Promise<ILastFMUserLovedtrack[]>;
    getRecentTracks(user: string, { limit, page }: {
        limit: number;
        page: number;
    }): Promise<ILastFMUserRecentTrack[]>;
    getArtistInfo(mbid: string): Promise<ILastFMArtist>;
    willSendRequest(request: any): void;
}
