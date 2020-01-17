import pageAccess from "./modules/pageAccess";
import interfaceRequest from "./modules/interfaceRequest";
import userOperation from "./modules/userOperation";
import { def } from "./types";
export declare class DbBuryingPoint {
    /** 埋点信息发送的目标地址 */
    reporterUrl: string;
    /** 埋点信息的发送函数，若有自定义的发送函数，则不需要使用上报地址了 */
    reporter?: (data: def.commonInfo.ICommonConfig) => void;
    /** 埋点监听器 */
    watchers: {
        pageAccess: typeof pageAccess;
        interfaceRequest: typeof interfaceRequest;
        userOperation: typeof userOperation;
    };
    /** 埋点配置 */
    config: def.modules.index.IConfig;
    constructor(buryingPoint?: def.modules.index.IBuryingPointCfg);
    /** 安装相应的埋点功能 */
    install(): void;
    /** 接收器 */
    recordReceiver: (data: def.commonInfo.ICommonConfig) => void;
    /** 默认上报请求 */
    defaultReporter: (param: def.commonInfo.ICommonConfig) => void;
}
