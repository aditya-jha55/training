export interface routeTypes {
    name: string;
    path: string;
    id: number;
    isPrivate?: boolean;
    Component: React.FC<any>;
    pageProp?: { page: string };
  }