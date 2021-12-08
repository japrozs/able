import { AxiosResponse } from "axios";
import fs from "fs";

export const getConfigFilePath = (): string => {
    const HOME = process.env.HOME;
    let path = `${HOME}/.able`;
    return `${path}/able.json`;
};

export const getUserData = () => {
    const data = fs.readFileSync(getConfigFilePath(), "utf-8");
    return JSON.parse(data);
};

export const checkCredentials = (): boolean => {
    if (fs.existsSync(getConfigFilePath())) {
        const file = fs.readFileSync(getConfigFilePath(), "utf-8");
        if (JSON.parse(file || "{}").user) {
            return true;
        }
        return false;
    } else {
        return false;
    }
};

export const addToken = (data: AxiosResponse<any, any>) => {
    if (!fs.existsSync(`${process.env.HOME}/.able`)) {
        fs.mkdirSync(`${process.env.HOME}/.able`);
    }
    fs.writeFileSync(getConfigFilePath(), JSON.stringify(data, null, 4));
};
