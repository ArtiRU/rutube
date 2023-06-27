import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../utils/db/base';
import { VideoEntity } from '../video/video.entity';
import { SubscriptionEntity } from './subscription.entity';

@Entity('User')
export class UserEntity extends Base {
  @Column({ unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: false, name: 'is_verified' })
  isVerified: boolean;

  @Column({ default: '' })
  avatarPath: string;

  @Column({ default: 0, name: 'subscribers_count' })
  subscribersCount?: number;

  @Column({ type: 'text', default: '' })
  description: string;

  @OneToMany(() => VideoEntity, (video) => video.user)
  videos: VideoEntity[];

  @OneToMany(() => SubscriptionEntity, (sub) => sub.fromUser)
  subscriptions: SubscriptionEntity[];

  @OneToMany(() => SubscriptionEntity, (sub) => sub.toChannel)
  subscribers: SubscriptionEntity[];
}
