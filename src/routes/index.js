import { useRoutes } from 'react-router-dom';

// project import
import logionRoutes from 'routes/loginRoutes';
import pageRoutes from 'routes/pageRoutes';

export default function ThemeRoutes() {
  return useRoutes([
    logionRoutes,
    pageRoutes
  ]);
}
