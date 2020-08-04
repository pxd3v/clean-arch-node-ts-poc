import { UserCreate } from '../../../../../src/domain/user/useCases/userCreate/userCreate';
import  { FakeUsersRepository } from '../../../../../src/domain/user/repositories/fakes/fakeUsersRepository';
import { UserCreateEntry } from '../../../../../src/domain/user/useCases/userCreate/userCreateEntry';
describe('userCreate', () => {
    it('should be able to create a new user', async () => {
        
        const usersRepository = new FakeUsersRepository();
        const userCreateService = new UserCreate(usersRepository);
        const user = await userCreateService.execute(new UserCreateEntry('pedro', 'pedro@lett.digital'));

        expect(user).toHaveProperty('id');
        expect(user.email).toBe('pedro@lett.digital');
        expect(user.name).toBe('pedro');
    });
});