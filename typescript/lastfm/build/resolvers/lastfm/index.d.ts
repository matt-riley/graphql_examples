declare const _default: {
    User: {
        subscriber({ subscriber }: {
            subscriber: string;
        }): boolean;
        lovedTracks({ name }: {
            name: string;
        }, _: null, { dataSources }: {
            dataSources: any;
        }): any;
        registeredDate({ registered }: {
            registered: string;
        }): string;
        recentTracks({ name }: {
            name: string;
        }, args: any, { dataSources }: {
            dataSources: any;
        }): any;
    };
    Track: {
        id({ mbid }: {
            mbid: string;
        }): string;
        date({ date }: {
            date: string;
        }): string;
        images({ image }: {
            image: string;
        }): string;
        artist({ artist: { mbid } }: {
            artist: {
                mbid: string;
            };
        }, _: null, { dataSources }: {
            dataSources: any;
        }): any;
    };
    LastFM: {
        user(_: null, { username }: {
            username: string;
        }, { dataSources }: {
            dataSources: any;
        }): any;
    };
    Images: {
        small(parentValue: import("../../interfaces/ILastFMUserInfo").ILastFMImage[]): string;
        medium(parentValue: import("../../interfaces/ILastFMUserInfo").ILastFMImage[]): string;
        large(parentValue: import("../../interfaces/ILastFMUserInfo").ILastFMImage[]): string;
    };
    Date: {
        date(parentValue: import("../../interfaces/ILastFMUserInfo").ILastFMUserRegistered | import("../../interfaces/ILastFMUserLovedTracks").ILastFMUserLovedtrackDate): string;
        text(parentValue: import("../../interfaces/ILastFMUserInfo").ILastFMUserRegistered | import("../../interfaces/ILastFMUserLovedTracks").ILastFMUserLovedtrackDate): string | number;
    };
    Artist: {
        id({ mbid }: {
            mbid: string;
        }): string;
        images({ image }: {
            image: string;
        }): string;
        totalListeners({ stats: { listeners } }: {
            stats: {
                listeners: string;
            };
        }): string;
        totalPlays({ stats: { playcount } }: {
            stats: {
                playcount: string;
            };
        }): string;
        tags({ tags: { tag } }: {
            tags: {
                tag: import("../../interfaces/ILastFMArtistInfo").ILastFMArtistTag[];
            };
        }): import("../../interfaces/ILastFMArtistInfo").ILastFMArtistTag[];
    };
};
export default _default;
