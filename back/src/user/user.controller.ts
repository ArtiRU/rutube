import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Patch,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Auth } from '../auth/decorators/auth.decorator';
import { CurrentUser } from './user.decorator';
import { UserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @UseGuards(AuthGuard)
  @Get('get-all')
  getAll() {
    return this.userService.getAll();
  }

  @Get('profile')
  @Auth()
  getProfile(@CurrentUser('id') id: number) {
    return this.userService.byId(id);
  }

  @Get('by-id/:id')
  getUser(@Param('id') id: string) {
    return this.userService.byId(+id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update/:id')
  @Auth()
  updateProfile(@Param('id') id: string, @Body() dto: UserDto) {
    return this.userService.update(+id, dto);
  }

  @Patch('subscribe/:channelId')
  @Auth()
  subscribe(
    @CurrentUser('id') id: number,
    @Param('channelId') channelId: string,
  ) {
    return this.userService.subscribe(+id, +channelId);
  }
}
