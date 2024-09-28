import { DataSource } from 'typeorm';
import { DATA_SOURCE } from 'src/common/constants';

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3309,
        username: 'root',
        password: '',
        database: 'nestjs',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, //only for developement. use false for production
      });

      return dataSource.initialize();
    },
  },
];