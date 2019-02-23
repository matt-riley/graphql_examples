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
};
export default _default;
