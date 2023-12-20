import { Controller, Get } from "@nestjs/common";
import { RedisService } from "./redis.service";

@Controller("/redis")
export class RedisController{
    constructor(
        private readonly redisService:RedisService,
        ){}

    @Get("test")
    async test(){
        await this.redisService.setValue("test", "demo")
        return await this.redisService.getValue("test")
    }

}