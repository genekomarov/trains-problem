import {ITrain, ICurrent} from '../interface/Interface';

/*** Поезд. */
export class BaseTrain implements ITrain {

    constructor(length: number) {

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

/*** Тип конструктора поезда. */
export type TrainConstructor = typeof BaseTrain;
