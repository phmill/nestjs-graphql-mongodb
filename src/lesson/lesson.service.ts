import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>
  ) {}

  async createLesson(name, startDate, endDate): Promise<Lesson> {
    console.log(name, startDate, endDate);

    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate
    });

    console.log(lesson);

    return this.lessonRepository.save(lesson);
  }
}
