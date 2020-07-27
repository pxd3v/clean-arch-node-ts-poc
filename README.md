# clean-arch-node-ts-poc
## Introduction
This project is a Proof of Concept for a implementation of a NodeJs Typescript application based in clean architecture, focusing in an agnostics implementations.

## Folder Structure Example
```
infrastructure
    api
        express
            routes
                userRoutes.ts
            init.ts
    db 
        mongodb
            driver.ts
            repositories
                UserRepositoryMongo.ts
        postgres
            driver.ts
            repositories
                ConfigurationsRepositoryPG.ts
interfaces
    controllers
        userController.ts
    middlewares
application
    user
        domain
            UserEntity.ts
            ConfigurationsEntity.ts
        repositories (DAL / DAO)
            UserRepositoryInterface.ts
            ConfigurationsRepositoryInterface.ts
        useCases
            userCreate
                UserCreateService.ts
                UserCreateService.spec.ts
                UserCreateValidatorInterface.ts
                UserCreate.in.ts
                UserCreate.out.ts
```
