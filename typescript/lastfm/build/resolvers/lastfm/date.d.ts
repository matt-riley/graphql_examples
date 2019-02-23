import { ILastFMUserRegistered } from '../../interfaces/ILastFMUserInfo';
import { ILastFMUserLovedtrackDate } from '../../interfaces/ILastFMUserLovedTracks';
declare const _default: {
    Date: {
        date(parentValue: ILastFMUserRegistered | ILastFMUserLovedtrackDate): string;
        text(parentValue: ILastFMUserRegistered | ILastFMUserLovedtrackDate): string | number;
    };
};
export default _default;
