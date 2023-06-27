import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { SubscriptionEntity } from './subscription.entity';
import { UserDto } from './user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    @InjectRepository(SubscriptionEntity)
    private readonly subscriptionRepository: Repository<SubscriptionEntity>,
  ) {}

  async byId(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: {
        videos: true,
        subscriptions: {
          toChannel: true,
        },
      },
      order: {
        createdAt: 'desc',
      },
    });

    if (!user) throw new NotFoundException('Пользователь не найден!');

    return user;
  }

  //update
  async update(id: number, dto: UserDto) {
    const user = await this.byId(id);
    const isSameUser = await this.userRepository.findOneBy({
      email: dto.email,
    });

    if (isSameUser && isSameUser.id !== id) {
      throw new BadRequestException('Email занят!');
    }

    if (dto.password) {
      user.password = await hash(dto.password, 5);
    }

    user.email = dto.email;
    user.name = dto.name;
    user.description = dto.description;
    user.avatarPath = dto.avatarPath;

    return this.userRepository.save(user);
  }

  async subscribe(id: number, channelId: number) {
    const data = {
      toChannel: { id: channelId },
      fromUser: { id },
    };

    const user = await this.userRepository.findOneBy({id: channelId});
    const isSubscribed = await this.subscriptionRepository.findOneBy(data);


    if (!isSubscribed) {
      const newSubscription = await this.subscriptionRepository.create(data);
      await this.subscriptionRepository.save(newSubscription);
      await this.userRepository.save({
        ...user,
        subscribersCount: ++user.subscribersCount
      })

      return true;
    }

    await this.subscriptionRepository.delete(data);
    await this.userRepository.save({
      ...user,
      subscribersCount: --user.subscribersCount
    })

    return false;
  }

  async getAll() {
    return this.userRepository.find();
  }
}
