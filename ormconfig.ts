import { Comment } from "src/entities/comment.entity";
import { Topic } from "src/entities/topic.entity";
import { User } from "src/entities/user.entity";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { config } from "dotenv"



config({ path: process.env.NODE_ENV ?  `.env.${process.env.NODE_ENV}` : '.env' });
const configorm: PostgresConnectionOptions = {
    type: "postgres",
    database: process.env.POSTGRES_NAME,
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    entities: [User, Comment, Topic],
    migrations: [
        "src/migrations/*.ts",
        "dist/migrations/*{.ts,.js}"
    ],
    synchronize: true
}

export default configorm;