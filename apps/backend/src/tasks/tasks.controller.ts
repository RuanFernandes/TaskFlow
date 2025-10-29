import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import {
    GetUser,
    AuthenticatedUser,
} from '../auth/decorators/get-user.decorator';

@Controller('tasks')
export class TasksController {
    constructor(private readonly tasksService: TasksService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    create(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: AuthenticatedUser,
    ) {
        return this.tasksService.create(createTaskDto, user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findAll(@GetUser() user: AuthenticatedUser) {
        return this.tasksService.findAll(user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string, @GetUser() user: AuthenticatedUser) {
        return this.tasksService.findOne(id, user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateTaskDto: UpdateTaskDto,
        @GetUser() user: AuthenticatedUser,
    ) {
        return this.tasksService.update(id, updateTaskDto, user.id);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string, @GetUser() user: AuthenticatedUser) {
        return this.tasksService.remove(id, user.id);
    }
}
