import { DataSource } from "typeorm";
import { User } from "src/users/user.entity";
import { DATA_SOURCE, USER_REPOSITORY } from "src/common/constants";

export const UserProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  }
]