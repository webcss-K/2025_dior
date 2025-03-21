import { useRoutes } from 'react-router-dom';

// project import
import pageRoutes from 'routes/pageRoutes';

export default function ThemeRoutes() {
  return useRoutes([
    pageRoutes
  ]);
}
