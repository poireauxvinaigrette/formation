var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"appRoutes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"login","pathMatch":"full"},{"path":"prestations","loadChildren":"./prestations/prestations.module#PrestationsModule","children":[{"kind":"module","children":[{"name":"appRoutes","filename":"src/app/prestations/prestations-routing.module.ts","module":"PrestationRoutingModule","children":[{"path":"","component":"PrestationsInterfaceComponent"}],"kind":"module"}],"module":"PrestationsModule"}]}],"kind":"module"},{"name":"appRoutes","filename":"src/app/login/login-routing.module.ts","module":"LoginRoutingModule","children":[{"path":"login","component":"LoginInterfaceComponent"}],"kind":"module"},{"name":"appRoutes","filename":"src/app/page-not-found/page-not-found-routing.module.ts","module":"PagenotfoundRoutingModule","children":[{"path":"**","component":"PagenotfoundInterfaceComponent"}],"kind":"module"}]}