declare const _default: {
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
};
export default _default;
