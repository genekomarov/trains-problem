import {TrainConstructor} from '../base/BaseTrain';

/*** Обьект поезда. */
export interface ITrain {
    next: IMoveFunc;
    prev: IMoveFunc;
    getCurrent: () => ICurrent;
    getMovesCount: () => number;
    resetMovesCount: () => void;

}

/*** Текущий стейт поезда. */
export interface ICurrent {
    getState: () => boolean;
    switch: () => boolean;
}

/*** Интерфейс фунции перехода между вагонами. */
export type IMoveFunc = () => ICurrent;

/*** Мувер. */
export interface IMover {
    start(next: IMoveFunc, prev: IMoveFunc): number;
}

/*** Фабрика экземпляров поезда */
export type MoverCreator = () => IMover;

/*** Конфиг для запуска тестов. */
export interface ITesterCfg {
    trainConstructor: TrainConstructor;
    moverConstructors: MoverCreator[];
    tests: ITest[];
}

/*** Конфиг теста. */
export interface ITest {
    length: number;
    testCount: number;
}

/*** Результат набора тестов. */
export interface ITestResult {
    [currentCase: string]: number[];
}

/*** Тестер. */
export interface ITester {
    start: (cfg: ITesterCfg) => ITestResult;
}
