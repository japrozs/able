import inquirer from "inquirer";
import { addToken, checkCredentials, getUserData } from ".";
import axios from "axios";
import { UserConfig } from "src/types";

export const login = async () => {
    if (checkCredentials()) {
        const data: UserConfig = getUserData();
        console.log(
            `You're already logged in as ${data.user?.name.green} (${data.user?.email.blue})`
        );
        console.log("To login as another user, type the following:\n");
        console.log(`\t${"$".grey} able ${"logout".blue}`);
        console.log(`\t${"$".grey} able ${"login".blue}`);
        return;
    }
    inquirer
        .prompt([
            {
                type: "input",
                name: "authToken",
                message: "Enter your authtoken",
            },
        ])
        .then(async (answers: { authToken: string }) => {
            let res = await axios.post("/login", {
                authToken: answers.authToken,
            });
            res = res.data;
            if (!(res as any).user) {
                console.log("unsuccessful login!");
                return;
            } else {
                addToken(res);
                console.log("successful login!");
            }
        });
};
