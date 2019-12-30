import * as fs from 'fs';

export class changeJson {

    public static editJson(fileName: string) {
        const jsonData = fs.readFileSync('./config/log4js.json', { encoding: 'utf-8' });
        const json = JSON.parse(jsonData);

        json.appenders.file.filename = fileName;

        const data = JSON.stringify(json);
        fs.writeFileSync('./config/log4js.json', data, { encoding: 'utf-8' });
    }
}
