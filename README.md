# clean-arch-node-ts-poc
## Introduction
This project is a Proof of Concept for a implementation of a NodeJs Typescript application based in clean architecture, focusing in an agnostics implementations.

## Folder Structure Example
```
infrastructure
    api
        express
            serverExpress.ts (implementation of ServerInterface)
    persistence 
        mongodb
            driver.ts
            repositories
                userRepositoryMongo.ts
        postgres
            driver.ts
            repositories
                configurationsRepositoryPG.ts
        memory
            repositories
                usersRepositoryMemory.ts (implementation of UsersRepositoryInterface)
interfaces
    api
        controllers
            usersController.ts
        middlewares
        protocols
            serverInterface.ts
            setupRouteInterface.ts
        routes
            userRoute.ts (implementation of SetupRouteInterface)
        index.ts
    cmd
domain
    user
        entities
            userEntity.ts
            configurationsEntity.ts
        repositories (DAL / DAO)
            userRepositoryInterface.ts
            configurationsRepositoryInterface.ts
        useCases
            userCreate
                userCreateService.ts
                userCreateService.spec.ts
                userCreateValidatorInterface.ts
                userCreate.in.ts
                userCreate.out.ts
```
