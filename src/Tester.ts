import {ITester, ITestResult, ITesterCfg} from './interface/Interface';

export default class Tester implements ITester{
    start(cfg: ITesterCfg): ITestResult {
        return;
    }
}