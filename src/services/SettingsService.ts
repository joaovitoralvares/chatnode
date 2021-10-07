import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingCreate{
    chat: boolean,
    username: string
}

class SettingsService {

    private settingsRepository: SettingsRepository

    constructor(){
       this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({chat, username}: ISettingCreate){

        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        });

        if(userAlreadyExists){
            throw new Error("User already exists");
        }

        const setting = this.settingsRepository.create({
            chat,
            username
        });

        await this.settingsRepository.save(setting);

        return setting;

    }

}

export {SettingsService};