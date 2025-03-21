import { useRoutes } from 'react-router-dom';

// project import
import sampleRoutes from 'routes/sampleRoutes';

export default function ThemeRoutes() {
  return useRoutes([
    sampleRoutes
  ]);
}
