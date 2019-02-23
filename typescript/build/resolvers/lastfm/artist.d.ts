import { ILastFMArtistTag } from '../../interfaces/ILastFMArtistInfo';
declare const _default: {
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
                tag: ILastFMArtistTag[];
            };
        }): ILastFMArtistTag[];
    };
};
export default _default;
