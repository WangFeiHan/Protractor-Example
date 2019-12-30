const log4js = require('log4js');
import { changeJson } from './changeJson';

export class log4jsconfig {
    private log4js;

    public static Log(): any {
        const logger = log4js.getLogger();

        return logger;
    }

    public static init(): void {
        const fileName = 'testLog' + new Date().getFullYear().toString()
            + (new Date().getMonth() > 9 ? new Date().getMonth() + 1 : '0' + (new Date().getMonth() + 1))
            + (new Date().getDate() > 9 ? new Date().getDate() : '0' + new Date().getDate()) + '.log';

        changeJson.editJson(fileName);
        log4js.configure('./config/log4js.json');
    }

}