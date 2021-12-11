import {ICurrent} from './interface/Interface';
import {BaseTrain} from './base/BaseTrain';

/*** Поезд. */
export default class Train extends BaseTrain{

    constructor(length: number) {
        super(length);
    }

    next(): ICurrent {
        return;
    }

    prev(): ICurrent {
        return;
    }

    getCurrent(): ICurrent {
        return;
    }

    getMovesCount(): number {
        return ;
    }

    resetMovesCount(): void {
        return;
    }
}
