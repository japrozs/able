import axios from "axios";
import "colors";
import { Command } from "commander";
import fs from "fs";
import { getConfigFilePath, getUserData } from "./auth";
import { login } from "./auth/login";
import { API_URL, VERSION } from "./constants";
import { UserConfig } from "./types";

axios.defaults.baseURL = API_URL;
const program = new Command();
program
    .version(VERSION)
    .name("able")
    .description(
        "🔑 The Able CLI to work with your keys stored on the cloud ⛅️"
    );

program
    .command("login")
    .description(
        "Use your authtoken to login with the CLI and access your keys"
    )
    .action(() => {
        login();
    });

program
    .command("whoami")
    .description("😃 Find out who you're logged in as !")
    .action(() => {
        const data: UserConfig = getUserData();
        if (data.user) {
            console.log(
                `\nLogged in as ${data.user?.name} (${data.user?.email})\n`
                    .green
            );
        } else {
            console.log("\n💡 You are not logged in!\n".blue);
        }
    });

program
    .command("logout")
    .description("😃 Logout from your account")
    .action(() => {
        fs.writeFileSync(getConfigFilePath(), "{}");
        console.log("Successfully logged out!".blue);
    });

program.parse(process.argv);
