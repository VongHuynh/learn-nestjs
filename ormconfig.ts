import { Commnent } from "src/entities/comment.entity";
import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";



const config: PostgresConnectionOptions = {
    type: "postgres",
    database: "testDB",
    host: "localhost",
    port: 5435,
    username: "postgres",
    password: "postgres",
    entities: [User, Commnent, Topic],
    migrations: [
        "src/migrations/*.ts",
        "dist/migrations/*{.ts,.js}"
    ],
    synchronize: true
}

export default config;