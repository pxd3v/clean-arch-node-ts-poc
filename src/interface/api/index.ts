import { ServerExpress } from '../../infrastructure/api/express/serverExpress';
import { UserSetupRoutes } from './routes/userRoutes';

const serverExpress = new ServerExpress();

new UserSetupRoutes().setupRoute(serverExpress);

serverExpress.start(3000);